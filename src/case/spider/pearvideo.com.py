"""
梨视频 pearvideo.com 视频下载

1. 视频详情页面地址：https://pearvideo.com/video_1764629
2. 获取到contID
3. 拼接请求参数从接口 /videoStatus.jsp 处获取到视频URL，参数有countID和随机的时间参数
4. 下载视频

分析视频详情页，服务端没有第一时间返回视频地址，需要请求页面的 /videoStatus.jsp 的响应会生成一个临时的视频地址和系统时间，通过参数拼接将系统时间替换为 cont_ + 地址栏的 contID 参数
其中，在请求 /videoStatus.jsp 接口时需要注意在请求头中传递 Referer 参数，否则会返回异常结果。

pip3 install requests
"""

import requests


def get_video_response(url, referrer):
    """
    发送HTTP请求，获取视频响应
    :param url: 请求资源URL
    :param referrer: 请求Referrer
    :return: 响应结果，通过.json()方法获取JSON响应，.text 获取文本响应，.content 获取二进制响应
    """
    headers = {
        'Referer': referrer,  # 需要添加Referer请求头，避免对方服务返回错误
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'
                      ' AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36'
    }
    response = requests.get(url, headers=headers)
    response.encoding = 'utf-8'
    return response


def get_cont_id(url):
    """
    通过给定的URL，获取URL参数中的cont值
    :param url: 给定梨视频详情页URL
    :return: contId
    """
    return url.split('_')[1]


def generate_video_status_url(cont_id):
    """
    生成视频状态URL
    :param cont_id: 从详情页地址栏获取的cont_id值
    :return: 视频状态URL的API接口
    """
    return f'https://pearvideo.com/videoStatus.jsp?contId={cont_id}&mrd=0.9963371830555043'


def generate_video_src(video_src, cont_id, system_time):
    """
    生成视频下载URL
    :param video_src: 接口返回的视频地址
    :param cont_id: 详情页地址栏获取的cont_id值
    :param system_time: 接口返回的系统时间
    :return:
    """
    return video_src.replace(system_time, f'cont-{cont_id}')


def download_video(path, src):
    """
    下载视频，保存在指定路径
    :param path: 视频保存路径+文件名
    :param src: 待下载的视频地址
    :return: None
    """
    with open(path, mode='wb') as f:
        f.write(get_video_response(src, src).content)


def main():
    video_detail_url = 'https://pearvideo.com/video_1764629'
    count_id = get_cont_id(video_detail_url)
    video_info = get_video_response(url=generate_video_status_url(count_id), referrer=video_detail_url).json()
    video_src_url = video_info['videoInfo']['videos']['srcUrl']
    system_time = video_info['systemTime']
    video_url = generate_video_src(video_src_url, count_id, system_time)

    download_video('./%s' % video_url.split('/')[-1], video_url)
    print('Done')


if __name__ == '__main__':
    main()
