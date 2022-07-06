"""
统计学生成绩最高分、最低分和平均分

输入文件：

语文,101,小张,94
语文,102,小王,64
语文,103,小李,62
语文,104,小赵,55
语文,105,小强,91
数学,101,小张,53
数学,102,小王,82
数学,103,小李,86
数学,104,小赵,93
数学,105,小强,72
英语,101,小张,92
英语,102,小王,80
英语,103,小李,73
英语,104,小赵,93
英语,105,小强,51

输出不同课程的最高分，最低分和平均分分值
"""

course_grades = {}  # 键为课程，值为学生分数列表

with open('./course-scores-input.txt', mode='r', encoding='utf-8') as f:
    for line in f:
        line = line[:-1]  # 去掉末尾的换行符
        course, student_number, student_name, score = line.split(',')  # 使用逗号区分每列
        if course not in course_grades:  # 当第一次遍历到课程时新建当前课程的列表
            course_grades[course] = []
        course_grades[course].append(int(score))  # 将课程对应的分数写入到列表

for course, scores in course_grades.items():  # 使用 items 方法获取字典的键值对
    print(f"{course}的最高分为：{max(scores)}，最低分为：{min(scores)}，平均分为：{sum(scores) / len(scores)}")
