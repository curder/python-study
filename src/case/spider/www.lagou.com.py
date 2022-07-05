"""
# 爬取 lagou.com 站的岗位信息

**注意：** Mac端电脑下载 [google chrome driver](https://chromedriver.storage.googleapis.com/index.html)，解压后将可执行包放在 `/usr/local/bin` （M1的电脑可以放在 `/opt/homebrew/bin`）目录下，并需要在电脑的 "系统偏好设置" -> "安全性与隐私" -> "通用" 中允许软件运行。

1. 使用 selenium 发送请求，从服务器获取到服务器
2. 使用正则匹配页面内容
3. 循环内容并保存到文件

pip3 install selenium
"""
import pprint
import time
import re
import json

from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

url = "https://www.lagou.com/"

# 创建浏览器
driver = Chrome()

# 打开浏览器，发送请求到目标网址
driver.get(url)

# 找到站点选择城市弹出层的关闭按钮，并点击
driver.find_element(by=By.ID, value='cboxClose').click()  # 通过元素 id 定位到元素
# driver.find_element(by=By.XPATH, value='//*[@id="cboxClose"]').click() # 通过元素的 xpath 定位到元素

# 延迟 1 秒钟执行
time.sleep(1)

# 找到搜索输入框，输入 "python" 并点击回车
driver.find_element(by=By.ID, value="search_input").send_keys('python', Keys.ENTER)
# driver.find_element(by=By.XPATH, value='//*[@id="search_input"]').send_keys('python', Keys.Enter)

# 延迟 1 秒钟执行
time.sleep(1)

# 从源代码中查找页面的职位列表
lagou_next_data = re.findall(pattern='<script id="__NEXT_DATA__" type="application/json">(.*?)</script>', string=driver.page_source)[0]

lagou_next_json = json.loads(lagou_next_data)
for job in lagou_next_json['props']['pageProps']['initData']['content']['positionResult']['result']:
    job_dict = {
        'position_name': job['positionName'],  # 职位名称
        'company_name': job['companyFullName'],  # 公司名称
        'company_address': job['positionAddress'],  # 公司地址
        'salary': job['salary'],  # 薪资待遇
        'work_year': job['workYear'],  # 工作年限
        'city': job['city'],  # 工作城市
        'education': job['education'],  # 学历要求
    }
    with open('lagou.txt', 'a') as f:
        f.write(json.dumps(job_dict))
        f.write("\n")
