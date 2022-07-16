"""
中文内容分词

安装结巴分词 pip install jieba

"""
import re
import jieba

content = '''
春姑娘悄悄地来到了我们的校园！
绿油油的小草争着抢着从地下探出了头，东张西望地看着四周。
池塘边的柳树，抽出了新的柳枝和柳叶，微风轻轻一吹，柳树就晃动着自己的秀发。
花园里各种各样的花儿都开了，
有艳红的玫瑰花、粉色的桃花、白色的梨花……五颜六色，美不胜收。
'''

if __name__ == '__main__':
    content = re.sub(r'[\n！…、。，]', '', content)  # 使用正则表达式删除一些特殊的标点符号字符

    word_list = jieba.cut(content)
    print(list(word_list))
