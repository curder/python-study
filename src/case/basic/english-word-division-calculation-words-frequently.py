"""
英文分词计算词频

使用正则表达式将文章中出现的 , / ( ) ? . 等特殊符号匹配掉
"""
import re

if __name__ == '__main__':
    word_counts = {}  # # 定一个空字典，准备存储 单词:出现次数
    with open('./python-get-started.txt', mode='r') as f:
        content = f.read()
        words = re.split(r'[\s.()-?/,]+', content)  # 使用正则表达式模式进行拆分
        # 判断当前单词是否存在于字典中，如果不存在则将其设置为1，否则+1
        for word in words:
            strip_word = word.strip(',!.?')

            if strip_word not in word_counts:
                word_counts[strip_word] = 0
            word_counts[strip_word] += 1

    print(word_counts)  # 打印出单词和出现次数对应的字典
    print(
        sorted(word_counts.items(), key=lambda k: k[1], reverse=True)[:10]  # 获取出现次数排序前10的单词列表
    )
