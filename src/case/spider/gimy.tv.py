"""
剧迷站 下载 "越狱" 第一季

1. 从视频播放页获取源代码，分析出m3u8地址
  1.1 视频播放页地址：https://gimy.tv/ep-8Lmab-6-1.html
  1.2 m3u8地址：https://dy3.yle888.vip/20220705/Mpy9Swvf/index.m3u8
2. 下载 m3u8 文件内容，转而下载另一个目标 m3u8 文件
    2.1 第一个 m3u8 下载地址（从视频播放页源代码的JS中获取）：https://dy3.yle888.vip/20220705/Mpy9Swvf/index.m3u8
    2.2 第二个 m3u8 下载地址（从第一个 m3u8 响应中分析得到）：https://dy3.yle888.vip/20220705/Mpy9Swvf/1500kb/hls/index.m3u8
3. 下载视频
4. 下载视频需要的密钥
5. 对下载的视频进行解密操作
6. 合并所有下载的视频 ts 片段到一个 mp4 文件
"""