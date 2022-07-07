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

## 获取 51job.com 站点的 Python 岗位招聘信息

**注意：** Mac端电脑下载 [google chrome driver](https://chromedriver.storage.googleapis.com/index.html)，解压后将可执行包放在 `/usr/local/bin` （M1的电脑可以放在 `/opt/homebrew/bin`）目录下，并需要在电脑的 "系统偏好设置" -> "安全性与隐私" -> "通用" 中允许软件运行。

1. 使用 selenium 发送请求到51job的首页
2. 点击进入到职位列表页
2. 找到职位列表中需要的字段'职位名称', '公司名称', '薪资待遇', '发布日期'
3. 循环内容并保存到 ./51job.com.csv 文件

## 豆瓣电影 Top 250

1. 获取页面 https://movie.douban.com/top250 源代码
2. 使用 re 正则模块获取需要信息：影片名、发布年份、国家、类型、评分、评价人数
3. 将需要的信息保存到csv文件

使用库：
- `requests` 使用 `pip3 install requests` 命令下载
- `re` 内置
- `csv` 内置
- `os` 内置

## [获取 17k小说网 我的书架图书列表](./www.17k.com.py)

1. 初始化一个session会话
2. 使用会话登录
3. 再次使用会话获取我的书架图书列表

目的：由于获取我的书架上的图片列表数据需要用户登录后再进行实际操作，所以需要我们在登录前后使用的是同一个会话。