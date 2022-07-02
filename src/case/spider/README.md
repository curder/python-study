# 爬虫练习

## [优美图库](./www.umei.cc.py)

爬取 [优美图库](https://umei.cc) 站 `美女图片` -> `美女写真` 栏目下的图片并保存到本地。

使用库：
- `requests`
- `BeautifulSoup`


# 爬取 [lagou.com](https://lagou.com) 站的岗位信息

**注意：** Mac端电脑下载 [google chrome driver](https://chromedriver.storage.googleapis.com/index.html)，解压后将可执行包放在 `/usr/local/bin` 目录下，并需要在电脑的 "系统偏好设置" -> "安全性与隐私" -> "通用" 中允许软件运行。

1. 使用 selenium 发送请求，从服务器获取到服务器
2. 使用正则匹配页面内容
3. 循环内容并保存到文件
