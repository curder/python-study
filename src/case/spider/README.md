# 爬虫练习

## [优美图库](./www.umei.cc.py)

爬取 [优美图库](https://umei.cc) 站 `美女图片` -> `美女写真` 栏目下的图片并保存到本地。

使用库：
- `requests`
- `BeautifulSoup`


## 爬取 [lagou.com](https://lagou.com) 站的岗位信息

**注意：** Mac端电脑下载 [google chrome driver](https://chromedriver.storage.googleapis.com/index.html)，解压后将可执行包放在 `/usr/local/bin` 目录下，并需要在电脑的 "系统偏好设置" -> "安全性与隐私" -> "通用" 中允许软件运行。

1. 使用 selenium 发送请求，从服务器获取到服务器
2. 使用正则匹配页面内容
3. 循环内容并保存到文件

## 爬取彩票网彩票数据

爬取500彩票网双色球近100期的开奖信息历史数据，页面地址：https://datachart.500.com/ssq/history/history.shtml

1. 使用 requests 发送请求，从服务器获取响应。请求地址：https://datachart.500.com/ssq/history/newinc/history.php?limit=100&sort=0
2. BeautifulSoup 解析整个页面的源代码，获取想要的数据
3. 初始化 csv 对象
4. 保存到 500.com-history.csv 文件中

## 分析500彩票网数据

1. 获取csv文件中的需要的列
2. 获取对应列的号码出现的总数
3. 将红球和蓝球出现的次数反映在图表上

步骤：
1. 使用上一节 [爬取彩票网彩票数据](./datachart.500.com.py) 生成的数据
2. 使用 pandas 对红球和蓝球出现的对应数字出现次数进行统计
3. 使用 matplotlib.pyplot 对统计的结果进行画图展示