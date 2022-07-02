"""
# 爬取 umei.cc 站的图片

1. 使用 requests 发送请求，从服务器获取到服务器
2. BeautifulSoup 解析整个页面的源代码
3. 下载图片到当前目录

pip3 install requests
pip3 install beautifulsoup4
"""
import os.path
import ntpath
import requests
from bs4 import BeautifulSoup

base_url = 'https://www.umei.cc'
headers = {
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.115 Safari/537.36'
}  # 设置请求头

response = requests.get(base_url + '/meinvtupian/meinvxiezhen/', headers=headers)
response.encoding = 'utf-8'  # 设置响应字符集，避免乱码

# 解析HTML内容，获取超链接
main_page = BeautifulSoup(response.text, features='html.parser')

# 通过find()方法查找一个元素, find_all() 方法查找所有匹配的元素
a_list = main_page.find("ul", attrs={"class": ["pic-list"]}).find_all("a")

for a in a_list:
    href = a.get('href')
    if str.startswith(href, '/'):
        sub_page_url = base_url + href  # 添加域名
    else:
        continue

    # 如果不存在目录则创建目录
    sub_page_id = str.split(str.split(sub_page_url, '/')[-1], '.')[0]  # 从地址栏上获取ID

    if not os.path.exists('umei.cc/%s' % sub_page_id):
        os.mkdir('umei.cc/%s' % sub_page_id)

    # 发送请求到子页面
    sub_response = requests.get(sub_page_url, headers=headers)
    sub_response.encoding = 'utf-8'
    sub_page = BeautifulSoup(sub_response.text, features='html.parser')

    # 查找图片src地址
    img_src_list = sub_page.find('section', attrs={"class": ["img-content"]}).find("img").get('src')

    # 从图片地址获取文件名
    filename = ntpath.basename(img_src_list)

    # 将图片下载到本地
    with open('umei.cc/%s/%s' % (sub_page_id, filename), mode="wb") as f:
        f.write(requests.get(img_src_list).content)  # 这里 content 获取的二进制数据
        print(f'download image %s success.' % filename)

    # 找当前图片的相关图片
    other_image_number_span_txt = sub_page.find('div', attrs={"class": 'gongneng'}).find_all('span')[3].text
    max_number = int(str.split(other_image_number_span_txt, '/')[1])
    for number in range(2, max_number + 1):
        url_prefix = ntpath.dirname(sub_page_url)
        url_suffix_list = str.split(ntpath.basename(sub_page_url), '.')
        url_suffix = url_suffix_list[0] + '_' + str(number) + '.' + url_suffix_list[1]
        other_images_url = os.path.join(url_prefix, url_suffix)
        print(other_images_url)
        # 发送请求到其他相关图片子页面
        other_sub_response = requests.get(other_images_url, headers=headers)
        other_sub_response.encoding = 'utf-8'
        other_sub_page = BeautifulSoup(other_sub_response.text, features='html.parser')

        # 查找图片src地址
        other_img_src_list = other_sub_page.find('section', attrs={"class": ["img-content"]}).find("img").get('src')

        # 从图片地址获取文件名
        other_filename = ntpath.basename(other_img_src_list)
        with open('umei.cc/%s/%s' % (sub_page_id, other_filename), mode="wb") as f:
            f.write(requests.get(other_img_src_list).content)  # 这里 content 获取的二进制数据
            print(f'download image %s success.' % other_filename)
