# 对象拷贝

## 浅拷贝 `copy` {#copy}

拷贝时，对象所包含的子对象内容不拷贝，因此源对象与拷贝对象会引用同一个子对象。

```python {20}
import copy

class Cpu:
    pass


class Disk:
    pass


class Computer:
    def __init__(self, cpu, disk):
        self.cpu = cpu
        self.disk = disk

cpu = Cpu()
disk = Disk()
computer = Computer(cpu=cpu, disk=disk)

computer2 = copy.copy(computer)

print(id(computer), id(computer.cpu), id(computer.disk))     # 4333306352 4333506032 4333733296
print(id(computer2), id(computer2.cpu), id(computer2.disk))  # 4333955584 4333506032 4333733296
```

## 深拷贝 `deepcopy` {#deepcopy}

拷贝时，递归拷贝对象中包含的子对象，源对象和拷贝对象所有的子对象也不相同。

```python {20}
import copy

class Cpu:
    pass


class Disk:
    pass


class Computer:
    def __init__(self, cpu, disk):
        self.cpu = cpu
        self.disk = disk

cpu = Cpu()
disk = Disk()
computer = Computer(cpu=cpu, disk=disk)

computer3 = copy.deepcopy(computer)

print(id(computer), id(computer.cpu), id(computer.disk))  # 4338827760 4339027440 4339254704
print(id(computer3), id(computer3.cpu), id(computer3.disk))  # 4341286608 4341425824 4341425968
```