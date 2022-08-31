# 图鉴打码平台

图鉴打码平台主要的优点是价格便宜，常规验证码比如数字或数字+字母等价格低至 `2` 厘/次，也就是 `500` 次/元。

如果要识别的验证码是其他类型，比如：点选、拼图等，可以在[这里](http://www.ttshitu.com/price.html)查看他们的定价方案。

下面结合图鉴平台提供的 Python 示例代码做为演示。目标是识别出图鉴平台的[登录页面](http://www.ttshitu.com/login.html)验证码内容。

## 流程分析

1. 通过浏览器抓取验证码相关的网络请求可以筛选出接口地址：[/captcha_v2](http://admin.ttshitu.com/captcha_v2) 对应的响应中的 "img" 就是要获取的验证码图片base64编码内容。

2. 分析官方提供的 [Python 示例代码](https://www.ttshitu.com/docs/python.html)，可以分析出接口需要入参中包含的就是上面接口中返回的验证码图片base64编码内容，再拼接上用户名，密码和对应识别的类型。

3. 发送 HTTP 请求给图鉴平台获取验证码结果

## 代码流程

1. 发送请求获取验证码，并获取验证码图片base64编码内容
2. 将编码内容发送给图鉴平台获取验证码结果

## 示例代码

```python
import requests
import base64


class TjCaptcha(object):
    def __init__(self, username, password):
        """
        初始化用户名和密码，在图鉴平台注册的用户名和密码
        :param username: 用户名
        :param password: 密码
        """
        self.base_params = {'username': username, 'password': password, }
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                          "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
        }

    def check(self, base64, type_id):
        """
        获取base64验证码对应的结果内容
        :param base64: 图片验证码 base64 字符串
        :param type_id: 验证码类型ID，类型参数可以查看这里：https://www.ttshitu.com/docs/index.html
        :return: 返回二维码识别的响应JSON数据
        """
        params = {'typeid': type_id, 'image': base64, }
        params.update(self.base_params)

        return requests.post("http://api.ttshitu.com/predict", json=params, headers=self.headers) \
            .json()

    def account_info(self):
        """
        获取用户信息，更多信息查看：http://www.ttshitu.com/docs/index.html
        :return: 返回请求的响应JSON数据
        """
        return requests.get('http://api.ttshitu.com/queryAccountInfo.json', params=self.base_params).json()


if __name__ == '__main__':
    # 1. 发送请求获取验证码 base64 数据
    r = requests.get('http://admin.ttshitu.com/captcha_v2').json()
    image_base64 = r.get('img')

    # 为了测试结果，可以将图片存储到本地，人工校验是否正确
    with open('captcha.jpg', mode='wb') as f:
        f.write(base64.b64decode(image_base64)) # 将接口响应的base64字符转换成二进制并存储到文件
    # 注意：如果在本地已经存在图片，则可以使用 base64.b64encode() 方法将图片转换成base64字符传递给验证码接口使用
    

    # 图鉴平台的用户名和密码数据
    username = 'your_ttshitu_platform_username'
    password = 'your_ttshitu_platform_password'

    # 查看账户信息
    # tj_captcha = TjCaptcha(username, password)
    # print(tj_captcha.account_info())

    # 2. 构建请求识别验证码
    tj_captcha = TjCaptcha(username, password)
    result = tj_captcha.check(image_base64, 1001)
    if result['success']:
        print(result["data"]["result"])
    else:
        print(result["message"])
```


> 注意将上面的 `username` 和 `password` 变量的值替换为您在平台注册的用户名和密码。