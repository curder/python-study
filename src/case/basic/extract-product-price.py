"""
提取商品价格

获取购买的数量、种类和价格
"""
import re

if __name__ == '__main__':
    str = '''
小明去买菜
买了1斤黄瓜花了8元；
买了2斤葡萄花了13.5元；
买了3斤白菜花了6.6元；  
'''
    result = re.compile(r"买了(?P<weight>.*?)斤(?P<type>.*?)花了(?P<price>.*?)元", re.S).finditer(str)
    for item in result:
        print(item.group('weight'), '\t', item.group('type'), '\t', item.group('price'))
