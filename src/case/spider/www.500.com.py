"""
分析500彩票网数据
1. 获取csv文件中的需要的列
2. 获取对应列的号码出现的总数
3. 将红球和蓝球出现的次数反应在图表上


pip3 install pandas
pip3 install matplotlib.pyplot

"""

import pandas as pd
import matplotlib.pyplot as plt

# 引入表头并处理行索引
df = pd.read_csv('./500.com-history.csv', index_col=0)

# 获取红球号
red_ball = df.loc[:, '红球1':'红球5']  # , 左侧尾行 右侧为列

# 获取蓝球号
blue_ball = df.loc[:, '蓝球']

# 统计每个号码出现次数
red_ball_count = pd.value_counts(red_ball.values.flatten())  # 使用 .values.flatten() 取出数据并将其设置为一唯数据
blue_ball_count = pd.value_counts(blue_ball)

# 可视化展示，制作成图表
fig, ax = plt.subplots(1, 1)  # 一次创建多个图表, 两行一列

# 选择饼图展示
# print(red_ball_count.index) # 获取索引，即
ax.pie(red_ball_count, labels=red_ball_count.index, radius=1, wedgeprops={"width": 0.3})
ax.pie(blue_ball_count, labels=blue_ball_count.index, radius=0.4, wedgeprops={"width": 0.2})

plt.show()  # 展示图表
