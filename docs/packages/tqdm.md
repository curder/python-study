# 进度条 tqdm

[tqdm](https://github.com/tqdm/tqdm) 允许任何可迭代的对象使用进度条的形式展示，它可以协助监测程序运行的进度，只需要封装可迭代对象即可。

## 安装

使用 `pip3` 包管理工具直接进行安装，命令如下：

```bash
pip3 install tqdm  # 安装 tqdm 扩展包

pip3 show tqdm # 检测 tqdm 模块是否可用
```

## 常用参数

`tqdm` 构造函数的参数众多，可以在[这里查看更多](https://github.com/tqdm/tqdm#parameters)，下面列举常用参数：

- `iterable`: 最常用的参数，表示使用这个迭代对象来初始化 `tqdm` 对象，如果手动更新进度条的话该参数可以为 `None`
- `desc`: 进度条的描述信息
- `total`: 进度条总格子数量
- `leave`: 布尔值, 迭代完成后是否保留进度条
- `file`: 输出指向位置, 默认是终端, 一般不需要设置
- `ncols`: 调整进度条宽度, 默认是根据环境自动调节长度, 如果设置为 `0`, 就没有进度条, 只有输出的信息
- `miniters`: `int`或可选。迭代过程中进度显示的最小更新间隔。
- `unit`: `str`或可选。定义每个迭代的单元。默认为 `it`，即每个迭代，在下载或解压时，设为"B"，代表每个“字节”。
- `unit_scale`: `bool`或者`int`或者`float`或者可选。默认为 `False`，如果设置为 `1` 或者 `True`，会自动根据国际单位制进行转换 (kilo, mega, etc.) 。比如，在下载进度条的例子中，如果为 `False`，数据大小是按照字节显示，设为 `True` 之后转换为Kb、Mb。

## 自动控制进度

- 将 `tqdm()` 应用在任意迭代器

    ```python
    from tqdm import tqdm
    import time

    for i in tqdm(range(1000)):
        time.sleep(0.01)

    # 100%|██████████████████████████████████████████████████| 1000/1000 [00:11<00:00, 86.71it/s]
    ```

- 使用 `trange` 代替 `tqdm(range(xxx))`
    ```python
    from tqdm import trange
    import time

    for i in trange(1000):
        time.sleep(0.01)

    # 100%|██████████████████████████████████████████████████| 1000/1000 [00:11<00:00, 86.51it/s]
    ```

- 添加描述

    ```python
    from tqdm import tqdm
    import time

    for i in tqdm(range(1000), desc="My tqdm:"):
        time.sleep(0.01)

    # My tqdm:: 100%|████████████████████████████████████████| 1000/1000 [00:11<00:00, 86.26it/s]
    ```
    > 上述进度条中会添加描述

- 调用 `set_description` 设置描述

    使用 `set_description()` 方法在进度条前面添加描述性内容，动态设置描述可以让其看起来更加的人性化。

    ```python
    from tqdm import tqdm
    from time import sleep

    pbar = tqdm(range(10))
    for char in pbar:
        pbar.set_description('Processing %d' % char)
        sleep(0.5)
    pbar.close()

    # Processing 9: 100%|█████████████████████████████████████████████████████████████████████████████████████████████████████████| 10/10 [00:05<00:00,  1.71it/s]
    ```

## 手动控制进度

手动运行时 `tqdm` 对象不需要迭代器作为初始化参数，但需要指定最大长度 `total` 的值，使用 `update` 方法自定义进度条比例，例如将 100 进度任务分为 5 次进度展示。：

```python
from tqdm import tqdm
import time

with tqdm(total=100) as pbar:
    for i in range(1, 5):
        time.sleep(1)
        pbar.update(10 * i)

# 10%|████████▏                                                                         | 10/100 [00:01<00:09, 10.00it/s]True
# 30%|████████████████████████▌                                                         | 30/100 [00:02<00:04, 15.83it/s]True
# 60%|█████████████████████████████████████████████████▏                                | 60/100 [00:03<00:01, 22.25it/s]True
#100%|█████████████████████████████████████████████████████████████████████████████████| 100/100 [00:04<00:00, 29.19it/s]True
#100%|█████████████████████████████████████████████████████████████████████████████████| 100/100 [00:04<00:00, 24.91it/s]
```

通过 `with` 语法管理上下文，在循环体之外由编译器自动结束其生命周期。
