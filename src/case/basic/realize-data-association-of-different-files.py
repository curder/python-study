"""
实现不同文件的数据关联

文件一：包含课程和老师姓名的表
文件二：包含课程、学生编号，学生姓名和成绩的表
"""

course_teachers_file_path = './course-teachers-input.txt'  # 课程和老师对应的文件
course_scores_file_path = './course-scores-input.txt'  # 课程和学生分数对应的文件

course_teachers_map = {}  # 准备字典准备存储可能和老师姓名之间的关联关系

with open(course_teachers_file_path, mode='r', encoding='utf-8') as f:
    for line in f:
        line = line[:-1]  # 删除末尾的换行符
        course, teacher = line.split(',')  # 使用逗号分割课程和老师
        course_teachers_map[course] = teacher  # 将课程和老师写入到字典

with open(course_scores_file_path, mode='r', encoding='utf-8') as f:
    for line in f:
        line = line[:-1]  # 删除末尾换行符
        course, student_number, student_name, score = line.split(',')
        teacher = course_teachers_map.get(course)  # 通过课程获取老师的姓名
        print(course, teacher, student_number, student_name, score)
