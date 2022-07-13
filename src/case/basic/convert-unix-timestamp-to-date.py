"""
将Unix时间戳转换为日期
"""
import datetime

if __name__ == '__main__':
    unin_time = 1657678580
    formate_datetime = '%Y-%m-%d %H:%M:%S'
    covert_datetime = datetime.datetime.fromtimestamp(unin_time)  # 将unix时间戳转换为 datetime 对象
    print(covert_datetime.strftime(formate_datetime))  # 格式化 datetime 对象为字符串
