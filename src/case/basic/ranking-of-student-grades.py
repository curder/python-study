"""
实现学生成绩排序

学生成绩列表包含字段或元组，给定如下数据：

[
    {"student_number": 101, "student_name": "小张", "student_grade": 88},
    {"student_number": 102, "student_name": "小王", "student_grade": 77},
    {"student_number": 103, "student_name": "小李", "student_grade": 99},
    {"student_number": 104, "student_name": "小赵", "student_grade": 66},
]
"""

student_scores = [
    {"student_number": 101, "student_name": "小张", "student_grade": 88},
    {"student_number": 102, "student_name": "小王", "student_grade": 77},
    {"student_number": 103, "student_name": "小李", "student_grade": 99},
    {"student_number": 104, "student_name": "小赵", "student_grade": 66},
]

if __name__ == '__main__':
    sorted_student_scores = sorted(
        student_scores,
        key=lambda x: x['student_grade'],
        reverse=True,  # 倒序排序
    )

    print(f'原始数据：{student_scores}')
    print()
    print(f'排序后的数据：{sorted_student_scores}')  # 99 88 77 66
