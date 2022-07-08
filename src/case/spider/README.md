# 爬虫练习

## [优美图库](./www.umei.cc.py)

爬取 [优美图库](https://umei.cc) 站 `美女图片` -> `美女写真` 栏目下的图片并保存到本地。

使用库：
- `requests`
- `BeautifulSoup`

## [优美图库 - 使用协程获取图片](./www.umei.cc-coroutine.py)

1. 使用 asyncio 创建协程并添加下载任务

2. 使用 aiohttp 模块发送请求，异步读取响应，并使用 aiofiles 异步写入到文件

- `pip3 install asyncio`

- `pip3 install aiohttp`

- `pip3 install aiofiles`

## [爬取 lagou.com 站的岗位信息](./www.lagou.com.py)

**注意：** Mac端电脑下载 [google chrome driver](https://chromedriver.storage.googleapis.com/index.html)，解压后将可执行包放在 `/usr/local/bin` 目录下，并需要在电脑的 "系统偏好设置" -> "安全性与隐私" -> "通用" 中允许软件运行。

1. 使用 selenium 发送请求，从服务器获取到服务器
2. 使用正则匹配页面内容
3. 循环内容并保存到文件

## [爬取彩票网彩票数据](./www.datachart.500.com.py)

爬取500彩票网双色球近100期的开奖信息历史数据，页面地址：https://datachart.500.com/ssq/history/history.shtml

1. 使用 requests 发送请求，从服务器获取响应。请求地址：https://datachart.500.com/ssq/history/newinc/history.php?limit=100&sort=0
2. BeautifulSoup 解析整个页面的源代码，获取想要的数据
3. 初始化 csv 对象
4. 保存到 500.com-history.csv 文件中


## [分析500彩票网数据](./www.500.com.py)

1. 获取csv文件中的需要的列
2. 获取对应列的号码出现的总数
3. 将红球和蓝球出现的次数反映在图表上

步骤：
1. 使用上一节 [爬取彩票网彩票数据](./datachart.500.com.py) 生成的数据
2. 使用 pandas 对红球和蓝球出现的对应数字出现次数进行统计
3. 使用 matplotlib.pyplot 对统计的结果进行画图展示

## [获取 51job.com 站点的 Python 岗位招聘信息](./www.51job.com.py)

**注意：** Mac端电脑下载 [google chrome driver](https://chromedriver.storage.googleapis.com/index.html)，解压后将可执行包放在 `/usr/local/bin` （M1的电脑可以放在 `/opt/homebrew/bin`）目录下，并需要在电脑的 "系统偏好设置" -> "安全性与隐私" -> "通用" 中允许软件运行。

1. 使用 selenium 发送请求到51job的首页
2. 点击进入到职位列表页
2. 找到职位列表中需要的字段'职位名称', '公司名称', '薪资待遇', '发布日期'
3. 循环内容并保存到 ./51job.com.csv 文件

## [豆瓣电影 Top 250](./movie.douban.com-top250.py)

1. 获取页面 https://movie.douban.com/top250 源代码
2. 使用 re 正则模块获取需要信息：影片名、发布年份、国家、类型、评分、评价人数
3. 将需要的信息保存到csv文件

使用库：
- `requests` 使用 `pip3 install requests` 命令下载
- `re` 内置
- `csv` 内置
- `os` 内置

## [豆瓣电影 Top 250 使用线程池](./movie.douban.com-top250-thread-pool.py)

1. 获取页面 https://movie.douban.com/top250 源代码
2. 使用 re 正则模块获取需要信息：影片名、发布年份、国家、类型、评分、评价人数
3. 使用线程池下载分页数据
4. 将需要的信息保存到csv文件

使用库：
- `requests` 使用 `pip3 install requests` 命令下载
- `re` 内置
- `csv` 内置
- `os` 内置
- `concurrent.futures` 内置

## [获取 17k小说网 我的书架图书列表](./www.17k.com.py)

1. 初始化一个session会话
2. 使用会话登录
3. 再次使用会话获取我的书架图书列表

目的：由于获取我的书架上的图片列表数据需要用户登录后再进行实际操作，所以需要我们在登录前后使用的是同一个会话。

## [梨视频 pearvideo.com 视频下载](./pearvideo.com.py)

1. 视频详情页面地址：https://pearvideo.com/video_1764629
2. 获取到contID
3. 拼接请求参数从接口 `/videoStatus.jsp` 处获取到视频URL，参数有countID和随机的时间参数
4. 下载视频

分析视频详情页，服务端没有第一时间返回视频地址，需要请求页面的 `/videoStatus.jsp` 的响应会生成一个临时的视频地址和系统时间，通过参数拼接将系统时间替换为 cont_ + 地址栏的 contID 参数。
其中，在请求 `/videoStatus.jsp` 接口时需要注意在请求头中传递 Referer 参数，否则会返回异常结果。

## [获取百度小说中"西游记"](./dushu.baidu.com.py)

1. 使用同步请求 `/getCatalog` 获取对应小说的所有章节
2. 使用异步请求 `/getChapterContent` 获取文章内容并下载到本地
3. 使用异步 aiofiles 将内存存储到文本

- 初始页面URL：https://dushu.baidu.com/pc/detail?gid=4306063500  点击页面章节中"查看更多"按钮可以看到所有章节URL
- 所有章节URL：https://dushu.baidu.com/api/pc/getCatalog?data={"book_id":"4306063500"} 点击任意章节可以看到对应章节内容URL
- 章节内容URL：https://dushu.baidu.com/api/pc/getChapterContent?data={"book_id":"4306063500","cid":"4306063500|1569782244","need_bookinfo":1}

> ```bash
> pip3 install asyncio
> pip3 install aiofiles
> pip3 install aiohttp
> ```
 
## [获取 91看剧 - 超级播视频源](./www.91kanju.com-chaojibo.py)

流程：
1. 访问视频播放页获取源代码，比如：http://91kanju.com/vod-play/63125-1-1.html
2. 从源代码中获取 m3u8 的请求地址
3. 下载 m3u8 文件到本地
4. 读取并分析 m3u8 文件，下载视频到本地
5. 合并视频碎片为 mp4 文件

pip3 install requests
pip3 install asyncio
pip3 install aiofiles
pip3 install aiohttp 