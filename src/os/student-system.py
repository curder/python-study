# 学员信息增删改查

import os

# 文件所在地址
file_name = './students.txt'


# 主函数
def main():
    while True:
        menu()
        choose = int(input("请选择："))
        if choose in [0, 1, 2, 3, 4, 5, 6, 7]:
            if choose == 0:
                answer = input("您确定要退出吗？Y/n")
                if answer == 'Y' or answer == 'y':
                    print("感谢使用")
                    break
                else:
                    continue
            elif choose == 1:
                create()  # 录入学员信息
            elif choose == 2:
                index()  # 查找学员信息
            elif choose == 3:
                destroy()  # 删除学员信息
            elif choose == 4:
                update()  # 更新学员信息
            elif choose == 5:
                sort()  # 更新排序
            elif choose == 6:
                total()  # 统计总人数
            elif choose == 7:
                show()  # 显示所有学生信息
            else:
                print('错误的输入')


# 主菜单
def menu():
    print("=" * 20, "学生信息管理系统", "=" * 20)
    print('-' * 24, "功能菜单", '-' * 24)
    print('1. 录入学生信息'.center(50))
    print('2. 查找学生信息'.center(50))
    print('3. 删除学生信息'.center(50))
    print('4. 修改学生信息'.center(50))
    print('5. 排序'.center(46))
    print('6. 统计学员总数'.center(50))
    print('7. 显示所有学生信息'.center(51))
    print('0. 退出系统'.center(48))
    print('-' * 58)


# 创建学员信息
def create():
    students = []
    while True:
        id = input('请输入学员ID（如1001）：')
        if not id:
            break
        name = input('请输入学员姓名（如张三）：')
        if not name:
            break
        try:
            english = int(input("请输入英语成绩："))
            python = int(input("请输入Python成绩："))
            golang = int(input("请输入GoLang成绩："))
        except:
            print('输入无效，请重新输入')
            continue
        # 将学员信息存入到字典中
        student = {'id': id, 'name': name, 'english': english, 'python': python, 'golang': golang}
        students.append(student)
        again = input('是否继续添加？ Y/n\n')
        if again == 'Y' or again == 'y':
            continue
        else:
            break

    # 调用save函数
    store(students)
    print('学员信息录入完毕')


# 学员信息
def index():
    while True:
        id = name = ''
        if os.path.exists(file_name):
            mode = input('按ID查找输入1，按姓名查找输入2：')

            if mode == '1':
                id = input('请输入学员ID：')
            elif mode == '2':
                name = input('请输入学员姓名：')
            else:
                print('输入有误，请重新输入：')
                index()

            student_list = []
            with open(file_name, 'r', encoding='utf-8') as txt:
                students = txt.readlines()
                for student in students:
                    d = dict(eval(student))
                    if id != '':
                        if d['id'] == id:
                            student_list.append(d)
                    elif name != '':
                        if d['name'] == name:
                            student_list.append(d)

            show_student(student_list)  # 显示查询结果
            student_list.clear()  # 清空查询列表
            again = input('是否继续查询？Y/n')
            if again == 'Y' or again == 'y':
                continue
            else:
                break
        else:
            print('学员信息不存在')
        return


# 删除学员信息
def destroy():
    while True:
        student_id = input("请输入学员ID：")
        if student_id != '':
            if os.path.exists(file_name):
                with open(file_name, 'r', encoding='utf-8') as txt:
                    origin_students = txt.readlines()
            else:
                origin_students = []
            flag = False  # 标记学员信息是否删除
            if origin_students:
                with open(file_name, 'w', encoding='utf-8') as txt:
                    for student in origin_students:
                        d = dict(eval(student))
                        if d['id'] != student_id:
                            txt.write(str(d) + '\n')
                        else:
                            flag = True
                    if flag:
                        print(f'ID为{student_id}的学员信息被删除')
                    else:
                        print(f'ID为{student_id}的学员信息不存在')
            else:
                print('暂无学员信息')
                break

            show()
            again = input("是否继续删除？Y/n")
            if again == 'y' or again == 'Y':
                continue
            else:
                break


# 更新学员信息
def update():
    show()
    if os.path.exists(file_name):
        with open(file_name, 'r', encoding='utf-8') as txt:
            origin_students = txt.readlines()
    else:
        return
    student_id = input('请输入待修改的学员ID：')
    with open(file_name, 'w', encoding='utf-8') as txt:
        for student in origin_students:
            d = dict(eval(student))
            if d['id'] == student_id:
                print('找到学员信息，可以修改')
                while True:
                    try:
                        d['name'] = input('请输入学员姓名：')
                        d['english'] = int(input("请输入英语成绩："))
                        d['python'] = int(input("请输入Python成绩："))
                        d['golang'] = int(input("请输入GoLang成绩："))
                    except:
                        print('输入有误，请重新输入')
                    else:
                        break
                txt.write(str(d) + '\n')
                print('修改成功！！')
            else:
                txt.write(str(d) + '\n')

        again = input('是否需要修改其他学员信息？Y/n')
        if again == 'Y' or again == 'y':
            update()


# 排序所有学员信息
def sort():
    show()
    student_ordered = []
    if os.path.exists(file_name):
        with open(file_name, 'r', encoding='utf-8') as txt:
            student_list = txt.readlines()
        for student in student_list:
            d = dict(eval(student))
            student_ordered.append(d)
    else:
        return
    asc_or_desc_bool = False
    asc_or_desc = input("请选排序规则（1升序 2降序）：")
    if asc_or_desc == '1':
        asc_or_desc_bool = False
    elif asc_or_desc == '2':
        asc_or_desc_bool = True
    else:
        print('排序规则输入有误，请重新输入')
        sort()

    mode = input('请选择排序方法（1 按英语成绩排序 2 按Python成绩排序 3 按GoLang成绩排序 4 按总成绩排序）：')
    if mode == '1':
        student_ordered.sort(key=lambda x: int(x['english']), reverse=asc_or_desc_bool)
    elif mode == '2':
        student_ordered.sort(key=lambda x: int(x['python']), reverse=asc_or_desc_bool)
    elif mode == '3':
        student_ordered.sort(key=lambda x: int(x['golang']), reverse=asc_or_desc_bool)
    elif mode == '4':
        student_ordered.sort(key=lambda x: int(x['english'] + x['python'] + x['golang']), reverse=asc_or_desc_bool)
    else:
        print('排序方法选择有误')
        sort()
    show_student(student_ordered)


# 统计学员总数
def total():
    if os.path.exists(file_name):
        with open(file_name, 'r', encoding='utf-8') as txt:
            students = txt.readlines()
            if students:
                print(f'总共有{len(students)}个学员')
            else:
                print('当前没有学员信息')
    else:
        print('没有学员信息')


# 展示所有学员信息
def show():
    student_list = []
    if os.path.exists(file_name):
        with open(file_name, 'r', encoding='utf-8') as txt:
            students = txt.readlines()
            for student in students:
                student_list.append(eval(student))
            if student_list:
                show_student(student_list)
    else:
        print('当前没有学员信息')


# 将学员信息存入到文件
def store(students):
    with open(file_name, 'a', encoding='utf-8') as txt:
        for student in students:
            txt.write(str(student) + '\n')


# 渲染学员信息列表
def show_student(students):
    if len(students) == 0:
        print('抱歉，您查询的学员信息不存在')
        return
    header = '{:^6}\t{:^12}\t{:^8}\t{:^10}\t{:^10}\t{:^8}'  # 格式
    print(header.format('ID', '姓名', '英语成绩', 'Python成绩', 'Go成绩', '总成绩'))
    for student in students:
        body = '{:^6}\t{:^14}\t{:^8}\t{:^12}\t{:^16}\t{:^8}'
        print(
            body.format(
                student.get('id'),
                student.get('name'),
                student.get('english'),
                student.get('python'),
                student.get('golang'),
                student.get('golang') + student.get('python') + student.get('english'),
            )
        )


if __name__ == '__main__':
    main()
