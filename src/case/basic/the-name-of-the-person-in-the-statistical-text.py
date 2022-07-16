"""
统计文本中的人名

需要结巴分词库支持 pip install jieba
需要pandas支持 pip install pandas
"""

import jieba.posseg as posseg
import pandas as pd

# content = '李明喜欢韩梅梅，他俩早恋了'
with open('./lu-ding-ji.txt', mode='r', encoding='utf-8') as f:
    content = f.read()

names = []
for word, flag in posseg.cut(content):
    if flag == 'nr':
        names.append(word)

print(pd.Series(names).value_counts()[:20])
