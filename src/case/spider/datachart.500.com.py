"""
爬取500彩票网双色球近100期的开奖信息历史数据

1. 使用 requests 发送请求，从服务器获取响应，请求地址：https://datachart.500.com/ssq/history/newinc/history.php?limit=100&sort=0
2. BeautifulSoup 解析整个页面的源代码，获取想要的数据
3. 初始化 csv 对象
4. 保存到 500.com-history.csv 文件中

pip3 install requests
pip3 install beautifulsoup4

时间：2022-07-04
"""

import requests
from bs4 import BeautifulSoup
import csv

encoding = 'utf-8'
url = 'https://datachart.500.com/ssq/history/newinc/history.php?limit=100&sort=0'
headers = {
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36"
}

response = requests.get(url, headers=headers)
response.encoding = encoding  # 设置响应体字符集

main_page = BeautifulSoup(response.text, 'html.parser')  # 解析HTML内容，获取数据

tr_list = main_page.find("tbody", attrs={'id': 'tdata'}).find_all('tr', attrs={'class',
                                                                               't_tr1'})  # 通过find()方法查找一个元素, find_all() 方法查找所有匹配的元素

# 准备对应的CSV文件，准备写入
f = open('./500.com-history.csv', mode='a', encoding=encoding, newline='')  # 打开csv文件
fieldnames = ["期号", "红球1", "红球2", "红球3", "红球4", "红球5", "蓝球", "奖池奖金(元)", "一等奖注数", "一等奖奖金", "二等奖注数", "二等奖奖金", "总投注额",
              "开奖日期"]  # 表头
csv_writer = csv.DictWriter(f, fieldnames=fieldnames)
csv_writer.writeheader()  # 写入表头

for tr in tr_list:
    # 获取红球号码
    red_balls = []
    for item in tr.find_all('td', attrs={'class': 't_cfont2'}):
        red_balls.append(item.text)

    print(','.join(red_balls))

    # 拼接要保存的数据到字典
    dict = {
        "期号": tr.find('td').text,
        "红球1": red_balls[0],
        "红球2": red_balls[1],
        "红球3": red_balls[2],
        "红球4": red_balls[3],
        "红球5": red_balls[4],
        "蓝球": tr.find('td', attrs={'class': 't_cfont4'}).text,
        "奖池奖金(元)": tr.find_all('td')[9].text.replace(',', ''),
        "一等奖注数": tr.find_all('td')[10].text,
        "一等奖奖金": tr.find_all('td')[11].text.replace(',', ''),
        "二等奖注数": tr.find_all('td')[12].text,
        "二等奖奖金": tr.find_all('td')[13].text.replace(',', ''),
        "总投注额": tr.find_all('td')[14].text.replace(',', ''),
        "开奖日期": tr.find_all('td')[15].text,
    }
    print(dict)
    csv_writer.writerow(dict)

f.close()  # 关闭文件
