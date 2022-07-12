"""
统计每个兴趣的学生人数

有如下文件内容：
小张 篮球,羽毛球
小王 篮球,乒乓球
小李 篮球,台球
小赵 篮球,足球,台球
小马 乒乓球,台球
小钱 羽毛球,足球
小孙 乒乓球,台球
小强 羽毛球

第一列为人名，第二列为对应人名喜欢的球。

计算不同类型的球类型喜欢的人数
"""

data = """小张 篮球,羽毛球
小王 篮球,乒乓球
小李 篮球,台球
小赵 篮球,足球,台球
小马 乒乓球,台球
小钱 羽毛球,足球
小孙 乒乓球,台球
小强 羽毛球"""

if __name__ == '__main__':
    link_mapping = {}
    for line in data.split('\n'):
        _, links = line.split(" ")
        like_list = links.split(',')
        for link in like_list:
            if link not in link_mapping:
                link_mapping[link] = 0
            link_mapping[link] += 1
    print(link_mapping)  # {'篮球': 4, '羽毛球': 3, '乒乓球': 3, '台球': 4, '足球': 2}
