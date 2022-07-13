"""
计算开始和结束范围的所有日期

输入开始日期：`2022-04-28`
输入结束日期：`2022-05-03`

输出：['2022-04-28', '2022-04-29', '2022-04-30', '2022-05-01', '2022-05-02', '2022-05-03']
"""
import datetime


def get_range_dates(start_date, end_date):
    """
    :param start_date: 开始日期
    :param end_date: 结束日期
    :return: 在开始日期和结束如期的范围日期列表
    """
    format_date = '%Y-%m-%d'
    date_list = []
    while start_date <= end_date:  # 比较两个时间的大小
        date_list.append(start_date)  # 将符合条件的日期添加到列表
        start_date_object = datetime.datetime.strptime(start_date, format_date)  # 获取开始时间日期对象
        start_date = (start_date_object + datetime.timedelta(days=1)).strftime(format_date)  # 将开始时间添加一天并格式日期字符串

    return date_list


if __name__ == '__main__':
    start_date = '2022-04-28'
    end_date = '2022-05-03'
    date_list = get_range_dates(start_date, end_date)
    print(date_list)
