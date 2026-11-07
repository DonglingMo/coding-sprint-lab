# 多语言基础语法练习

这个目录由 11 月新增，后续月份可以复用。它不替换 Java、Go、Agent 和 ChainPay-Lab 主线，也不记录外部题解。每天用 20 至 30 分钟把同一个小问题分别写成几种语言，用来熟悉变量、函数、条件、循环、集合和输出的基本写法。

## 统一练习

给定金额 `[12, -3, 0, 18]`，只保留非负金额，计算保留项的数量和总和。程序输出下面一行。

```text
count=3 total=30
```

先自己补一个最小测试，再运行示例。建议每天只选一种语言，周末再挑两种语言比较相同逻辑的表达方式。

## 目录

| 语言 | 示例入口 | 本地运行 | 重点 |
| --- | --- | --- | --- |
| Java | `java/Main.java` | `javac Main.java && java Main` | 类型、数组、方法、增强 for |
| Go | `go/main.go` | `go run main.go` | 切片、函数、for、条件 |
| Python | `python/main.py` | `python3 main.py` | 列表、函数、for、条件 |
| JavaScript | `javascript/main.js` | `node main.js` | 数组、函数、for...of |
| TypeScript | `typescript/main.ts` | `node --experimental-strip-types main.ts` 或 `tsc main.ts && node main.js` | 类型标注、数组、函数 |
| Rust | `rust/main.rs` | `rustc main.rs -o main && ./main` | Vec、函数、借用与迭代 |
| C | `c/main.c` | `cc -std=c17 -Wall -Wextra main.c -o main && ./main` | 数组、函数、指针边界 |
| C++ | `cpp/main.cpp` | `c++ -std=c++20 -Wall -Wextra main.cpp -o main && ./main` | vector、函数、范围 for |
| SQL | `sql/main.sql` | `sqlite3 < main.sql` | CTE、过滤、聚合 |
| Shell | `shell/main.sh` | `bash main.sh` | 数组、循环、条件、函数 |
| Solidity | `solidity/LanguageBasics.sol` | `forge test` 或 `solc` | 固定数组、循环、纯函数 |

每条命令都从对应语言子目录执行。编译型语言生成的临时二进制文件可以删除，也可以把输出文件放进个人的临时目录。SQL 示例使用 SQLite 内存数据库，不需要安装服务。Solidity 示例不打印文本，调用 `summarize()` 应返回 `(3, 30)`。

## IDE 和工具链

可以通过不同 IDE 运行不同语言，但 IDE 负责编辑、调试和调用命令，真正执行代码的是语言自己的 JDK、编译器、解释器或运行时。只安装 IDE 不能替代这些工具链。

低成本方案是使用一个 VS Code 工作区，再按需安装 Java、Go、Python、C/C++、Rust、SQL 和 ESLint 等扩展，直接用集成终端执行上表命令。VS Code 的语言支持由扩展提供，扩展可以提供补全、跳转、调试和格式化。Java 可以使用 IntelliJ IDEA Community，Go 可以使用 GoLand，也可以继续在 VS Code 中完成。

开始前先检查本机工具链。

```bash
java -version
go version
python3 --version
node --version
rustc --version
cc --version
c++ --version
sqlite3 --version
```

缺少某个运行时不会影响其他语言练习。当天只运行已经安装的入口，并把缺少的工具链写进当天复盘。

TypeScript 示例只使用可擦除的类型标注。Node.js 22.6 及更高版本可以直接运行这类文件，但这种方式不会做类型检查。需要类型检查时安装 TypeScript 并执行 `tsc --noEmit main.ts`，或使用项目已有的构建工具。

## 每天的完成定义

1. 读懂当天语言的入口文件，并手写一遍核心函数。
2. 至少补充一个边界输入，例如空列表、全为负数或包含两个零。
3. 运行成功并记录命令、输出和一个新语法点。
4. 每周选两种语言写同一题，比较变量声明、循环、错误处理和测试写法。

## 和 11 月主线的关系

这组练习只占用原计划语言训练时段的一小部分。当天仍按 [2026 年 11 月计划](../../docs/monthly-plan-2026-11.md) 完成 POC、Agent、测试和复盘。数据结构模板只在月度计划中做标记，题目代码继续保存在个人使用的平台。
