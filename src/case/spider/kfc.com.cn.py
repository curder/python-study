"""
KFC餐厅查询

一直获取下一页数据，直到达到边界值再退出获取

页面源地址：http://www.kfc.com.cn/kfccda/storelist/index.aspx
AJAX POST请求地址：http://www.kfc.com.cn/kfccda/ashx/GetStoreList.ashx?op=keyword

pip3 install requests
"""

import requests


def main():
    url = 'http://www.kfc.com.cn/kfccda/ashx/GetStoreList.ashx?op=keyword'
    headers = {
        "Referer": "http://www.kfc.com.cn/kfccda/storelist/index.aspx",
        'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                      "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
    }

    page_index = 1

    body = {
        "cname": "南昌",
        "pid": "",
        "keyword": "",
        "pageIndex": page_index,
        "pageSize": "10"
    }

    while True:
        body["pageIndex"] = page_index
        response = requests.post(url=url, data=body, headers=headers)
        response.encoding = 'utf-8'

        result = response.json()

        # 当返回的数据为空时，则停止查询
        if len(result.get('Table1')) == 0:
            break

        for store in result.get('Table1'):
            print(store)

        page_index += 1


if __name__ == '__main__':
    main()
