"""
获取 51job.com 站点的 Python 岗位招聘信息

**注意：** Mac端电脑下载 [google chrome driver](https://chromedriver.storage.googleapis.com/index.html)，解压后将可执行包放在 `/usr/local/bin` （M1的电脑可以放在 `/opt/homebrew/bin`）目录下，并需要在电脑的 "系统偏好设置" -> "安全性与隐私" -> "通用" 中允许软件运行。

1. 使用 selenium 发送请求到51job的首页
2. 点击进入到职位列表页
2. 找到职位列表中需要的字段'职位名称', '公司名称', '薪资待遇', '发布日期'
3. 循环内容并保存到 ./51job.com.csv 文件
"""
import csv
import time

from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By

index_url = 'https://www.51job.com'  # 首页URL
file_path = './51job.com.csv'

driver = Chrome()  # 创建浏览器
driver.get(index_url)
driver.maximize_window()  # 将屏幕最大化
driver.find_element(by=By.XPATH, value='//*[@id="topIndex"]/div/p/a[2]').click()  # 点击职位搜索超链接
time.sleep(3)
driver.find_element(by=By.XPATH,
                    value='/html/body/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]').click()  # 点击"全部城市"，呼出选择城市的弹出层
driver.find_element(by=By.CLASS_NAME, value='ttag').click()  # 将51job默认定位的地区移除
driver.find_element(by=By.XPATH, value='//*[@id="popop"]/div/div[3]/span').click()  # 关闭弹出层

time.sleep(1)
driver.find_element(by=By.XPATH, value='//*[@id="keywordInput"]').send_keys('python')  # 选择搜索职位输入框并输入python
driver.find_element(by=By.XPATH, value='//*[@id="search_btn"]').click()  # 点击搜索按钮

time.sleep(1)
with open(file_path, mode='a', encoding='utf-8', newline='') as f:
    # 准备好要写入的 csv 文件
    field_names = ['职位名称', '公司名称', '薪资待遇', '发布日期']
    csv_writer = csv.DictWriter(f, fieldnames=field_names)
    csv_writer.writeheader()

    while True:
        els = driver.find_element(by=By.CLASS_NAME, value='j_joblist').find_elements(by=By.CLASS_NAME, value='e')

        for el in els:
            # el.get_attribute('innerHTML') # 打印元素html源代码
            dict = {
                '职位名称': el.find_element(by=By.CLASS_NAME, value='jname').text,
                '公司名称': el.find_element(by=By.CLASS_NAME, value='cname').text,
                '薪资待遇': el.find_element(by=By.CLASS_NAME, value='sal').text,
                '发布日期': el.find_element(by=By.CLASS_NAME, value='time').text,
            }
            csv_writer.writerow(dict)

        driver.find_element(by=By.XPATH,
                            value='/html/body/div[2]/div[3]/div/div[2]/div[4]/div[2]/div/div/div/ul/li[last()]/a').click()

        time.sleep(1)
