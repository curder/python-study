"""
统计英文文章中每个单词出现次数

"""

if __name__ == '__main__':
    word_count = {}  # 定一个空字典，准备存储 单词:出现次数

    with open('./python-get-started.txt', mode='r', encoding='utf-8') as f:
        for line in f:
            line = line[:-1]  # 去掉末尾的换行符
            if line == '':
                continue
            words = line.split()
            # 判断当前单词是否存在于字典中，如果不存在则将其设置为1，否则+1
            for word in words:
                strip_word = word.strip(',!.?')

                if strip_word not in word_count:
                    word_count[strip_word] = 0
                word_count[strip_word] += 1

        print(word_count)  # 打印出单词和出现次数对应的字典
        print(
            sorted(word_count.items(), key=lambda k: k[1], reverse=True)[:10]  # 获取出现次数排序前10的单词列表
        )
