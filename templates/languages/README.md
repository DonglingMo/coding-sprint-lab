# 重点语言模板

这些模板服务于 ChainPay-Lab 的不同边界。复制对应目录后，先替换包名、端口和持久化配置，再接入 practice/ 或 poc/。

## 统一约定

- 目录：源码放 src/ 或 cmd/，测试放 tests/ 或 src/test/。
- 入口：README 必须写启动、测试、格式化和构建命令。
- 质量：每个模板至少包含一个 happy path 和一个失败路径测试。
- 提交：使用 Conventional Commits；每次练习保留可运行的最小增量。

## 模板清单

| 语言 | ChainPay-Lab 用途 | 推荐入口 | 验证 |
| --- | --- | --- | --- |
| Java | Order Service、Ledger Service、状态机、幂等 | src/main/java/App.java | mvn test |
| Go | Chain Watcher、区块扫描、worker pool | cmd/app/main.go | go test ./... |
| Python | 账单导入、对账、差异报告 | src/app/cli.py | pytest |
| TypeScript | 管理台、REST 客户端、并发请求 | src/index.ts | npm test |
| SQL | 订单、事件、账本、对账 schema | schema.sql | psql -f |
| Shell | 环境检查、启动、全量测试 | bin/run.sh | shellcheck |
| Rust | 安全并发、decoder、CLI | src/main.rs | cargo test |
| C | 指针、内存、ABI/FFI 小实验 | src/main.c | cc -std=c17 |
| C++ | RAII、STL、线程与性能实验 | src/main.cpp | cmake --build build |
| Solidity（可选） | 本地/测试网模拟 ERC-20 事件 | contracts/MockToken.sol | forge test |

## 接入顺序

1. 先用 SQL 模板建立事件、订单、账本和对账表。
2. 用 Go 或 Java 模板实现一个可测试的业务边界。
3. 用 Python 生成对账输入，用 TypeScript 调用 API。
4. 最后由 Shell 和基础设施模板统一启动、测试和观测。

Rust、C、C++ 用于安全并发、内存模型、ABI/FFI 与性能边界训练，不进入账务主链；Solidity 只生成本地或测试网模拟事件。各语言的最小骨架、命令和替换点见同目录下的 README 文件。
