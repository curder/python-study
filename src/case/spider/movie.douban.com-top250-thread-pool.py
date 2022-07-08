"""
使用线程池获取豆瓣电影 Top 250

1. 获取页面 https://movie.douban.com/top250 源代码
2. 使用 re 正则模块获取需要信息：影片名、发布年份、国家、类型、评分、评价人数
3. 将需要的信息保存到csv文件

pip3 install requests
"""
import os
import re

import requests
import csv
from concurrent.futures import ThreadPoolExecutor


def fetch(url):
    """
    发送请求获取响应
    :param url:
    :return:
    """
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
                      "(KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36",
    }  # 请求头
    # 发送请求并获得响应内容
    response = requests.get(url, headers=headers)  # 发送请求，获取响应
    # 从响应中获取到字符集编码
    regex_result = re.compile('<meta http-equiv="Content-Type" content="text/html; charset=(?P<encoding>.*?)">',
                              re.S).search(response.text)
    response.encoding = regex_result.group('encoding')  # 设置响应字符集，避免乱码
    return response.text


def preg_match_movies(content):
    """
    使用正则匹配电影列表数据
    :param content:
    :return:
    """
    regex = r'<li>.*?<span class="title">' \
            r'(?P<name>.*?)</span>.*?<br>' \
            r'(?P<year>.*?)&nbsp;/&nbsp;' \
            r'(?P<country>.*?)&nbsp;/&nbsp;' \
            r'(?P<type>.*?)</p>.*?<span class="rating_num" property="v:average">' \
            r'(?P<rating>.*?)</span>.*?<span>' \
            r'(?P<participants>.*?)人评价</span>'  # 正则表达式
    regex_obj = re.compile(regex, re.S)  # 正则表达式预处理
    return regex_obj.finditer(content)


def write_to_file(csv_file_path, content):
    """
    保存数据到CSV文件中
    :param csv_file_path:
    :param content:
    :return:
    """
    field_names = ['影片名', '发布年份', '国家', '类型', '评分', '评价人数']
    if not os.path.exists(csv_file_path):
        with open(csv_file_path, mode='a', encoding='utf-8', newline='') as f:
            csv_writer = csv.DictWriter(f, fieldnames=field_names)
            csv_writer.writeheader()
    with open(csv_file_path, mode='a', encoding='utf-8', newline='') as f:

        for item in content:
            movie_dict = {
                "影片名": item.group('name'),
                "发布年份": item.group('year').strip(),
                "国家": item.group('country'),
                "类型": item.group('type').strip(),
                "评分": item.group('rating'),
                "评价人数": item.group('participants'),
            }
            csv_writer = csv.DictWriter(f, fieldnames=field_names)
            csv_writer.writerow(movie_dict)


def main(url, csv_file_path):
    """
    主入口函数，分析给定的URL，并将分析后的数据写入到CSV文件中
    :param url:
    :param csv_file_path:
    :return:
    """
    page_content = fetch(url)  # 发送请求并获得响应内容
    result = preg_match_movies(page_content)  # 使用正则匹配需要的内容
    write_to_file(csv_file_path=csv_file_path, content=result)  # csv文件保存位置


# 入口函数
if __name__ == '__main__':
    csv_file_path = './movie.douban.com-top250-tread-pool.csv'  # csv文件路径
    with ThreadPoolExecutor(50) as t:  # 创建线程池
        for page in range(0, 250, 25):
            print(f'Downloading at page: {int(page / 25) + 1}')
            t.submit(main(f'https://movie.douban.com/top250?start={page}', csv_file_path))  # 将任务交给线程池
    print('Done')
