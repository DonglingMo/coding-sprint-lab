# 2026 年 11 月计划（30 天）：Coding Sprint Lab + ChainPay-Lab
> 周期：2026-11-01（周日）至 2026-11-30（周一），D1 = 11/01，D30 = 11/30。
> 目标：用一个月建立可复用的多语言工程手感，并交付一个可运行、可测试、可演示的 ChainPay-Lab POC。
> 本月 POC 只聚焦一个小模块：ChainPay-Lab Agent 只读对账助手；UTA、DEX、传统支付和其他业务只保留为后续 backlog。

## 本月重点
- **主线语言**：Java、Go。Java 负责订单与账本，Go 负责链上/事件监听。
- **AI Agent 主线**：用 Python/TypeScript 实现受限工具调用、任务状态、上下文管理、结构化输出、权限控制、评估与可观测性；默认只读模拟数据，不接触真实资金。
- **本月 POC 单模块**：只实现 Agent 只读对账助手，读取订单、账本和差错池并生成结构化建议；其他 POC 方向不在本月并行实现。
- **辅助语言**：Python、TypeScript、Rust、C、C++。Python 负责对账、报表与 Agent 编排，TypeScript 负责管理台、工具适配与接口联调，Rust 负责安全并发，C/C++ 负责内存、编译与系统边界训练。
- **基础能力**：SQL、Shell、Docker Compose、PostgreSQL、Redis、CI、日志与指标。
- **链与合约探索**：Solidity，仅用于本地或测试网的模拟 ERC-20 事件；不接触真实资金。
- **每日投入**：约 2 小时：50 分钟语言训练，40 分钟 POC，20 分钟 Agent 实验或评估，10 分钟测试、Review 与记录。多语言基础语法练习从语言训练时段中抽取 20 至 30 分钟，入口见 `practice/language-basics/`。

## 30 天节奏（2026-11-01 至 2026-11-30）

### Week 1（D1-D7，11/01-11/07）：语言基础、Agent 原型与开发模板
对应 Milestone：**Week 1：基础语言训练**

| 天数 | 任务 | 当日交付 |
| --- | --- | --- |
| D1 | Java 集合与 LRU | 完成 practice/2026-11/java/day-01-lru，补边界测试 |
| D2 | Go map、接口与缓存 | 一个带过期策略的内存缓存及测试，放在 practice/2026-11/go/ |
| D3 | Python CLI、结构化输出与 Agent 基础 | 可读取账单文件并输出摘要的 CLI，以及一个确定性只读工具 |
| D4 | TypeScript async、HTTP、Agent tool adapter + Rust ownership | 类型安全的工具适配器、REST 客户端和一个通过编译检查的 Rust 小练习 |
| D5 | SQL schema + C 指针与内存 | ChainPay-Lab schema 和一个无泄漏的 C 小练习 |
| D6 | Shell 自动化 + C++ RAII/线程 | setup-dev.sh、test-all.sh 和一个 C++20 小练习 |
| D7 | Solidity Transfer 事件模拟 + 周复盘 | 多语言入口模板、最小 Agent 骨架、工具协议说明和周复盘 |

### Week 2（D8-D14，11/08-11/14）：并发、Agent 执行循环与数据一致性
对应 Milestone：**Week 2-3：并发与业务工程**

- D8-D9：Java Executor、并发容器、超时与取消；记录 Agent run 状态和取消原因。
- D10-D11：Go goroutine、channel、worker pool、优雅退出；封装一个模拟链上事件查询工具。
- D12：Python asyncio、批处理与失败重试；实现 Agent 任务循环、上下文压缩和结构化结果校验。
- D13：TypeScript Promise、并发工具调用、超时与错误边界；完成工具分发器。
- D14：SQL 事务、唯一约束、索引和幂等键；为 Agent 操作记录审计事件并完成一次周复盘。

辅助语言穿插：Rust 练习所有权、trait 和 async；C 练习指针、内存布局和 CMake；C++ 练习 RAII、STL 和并发库；Solidity 练习事件、权限和测试网隔离。

AI Agent 交付标准：工具白名单、输入/输出 schema、超时与重试策略、拒绝越权操作；每个并发练习都有成功、超时、重复执行和异常路径测试。

### Week 3（D15-D21，11/15-11/21）：服务工程、Agent 网关与基建
对应 Milestone：**Week 2-3：并发与业务工程**

- D15-D16：选择 Java 或 Go 作为主服务，完成 REST API、参数校验、统一错误响应和 Agent gateway 入口。
- D17：订单状态机、幂等写入、账本追加写和审计字段；定义 Agent 可读数据与需审批的写操作。
- D18：Dockerfile、Docker Compose、PostgreSQL、Redis 与健康检查；加入本地模型或 mock provider 配置。
- D19：Makefile、.env.example、本地一键启动与一键测试；统一 prompt、工具和运行配置。
- D20：GitHub Actions CI 模板，覆盖格式检查、单元测试、构建和 Agent 评估样例。
- D21：Prometheus/Grafana 指标草案、日志字段约定、Agent 延迟/失败/工具调用指标与周复盘。

交付标准：新环境只需复制 .env.example 并执行 make dev，即可启动依赖服务和 mock Agent；所有外部副作用默认关闭。

### Week 4（D22-D30，11/22-11/30）：ChainPay-Lab Agent 只读对账助手
对应 Milestone：**Week 4：POC 集成、测试和交付**

- D22-D23：准备固定 mock 订单、账本、差错池和事件数据；定义 Agent 只读工具 schema。
- D24：实现 Agent 读取订单、账本和差错池，并输出结构化差异摘要。
- D25：加入白名单、限额、超时、重试和人工确认边界；禁止写操作。
- D26：管理台只展示 Agent run、输入摘要、工具调用、建议和审批状态。
- D27：测试重复、乱序、超时、错误输出、上下文过长和权限拒绝。
- D28：记录 run id、工具耗时、失败原因和评估结果，补充故障恢复说明。
- D29：README、架构图、工具/API 示例、演示脚本与 Docker Compose 验收。
- D30：全量测试、Agent 评估集 Review、月度复盘和下月 POC 候选。

## 数据结构模板标记

LeetCode 题目和代码继续保存在 LeetCode。项目只维护一个轻量标记，用于确认已经接触过常见数据结构和算法模板，不复制题解。

- [ ] 数组、字符串和 HashMap
- [ ] 链表、栈和队列
- [ ] 双指针、滑动窗口和前缀和
- [ ] 二分查找、堆和区间
- [ ] 二叉树遍历、回溯和图搜索
- [ ] 拓扑排序、并查集和 Trie
- [ ] 贪心、动态规划和位运算
- [ ] LRU、限流队列和其他设计题

每次在 LeetCode 完成一组题目后，只在自己的复盘记录中勾选对应模板，并记下一条复杂度或边界条件。

## 每日完成定义

1. 有可运行的代码或配置，并放在对应目录。
2. 至少一个有意义的测试或验证命令通过。
3. 写下一个决策、一个问题和下一步动作。
4. 提交一次 Conventional Commit，例如 feat(java): add lru cache eviction。
5. Agent 相关任务必须保留输入、工具调用、结构化输出和评估结果；禁止默认执行未授权写操作。

## 月末验收清单

- [ ] Java、Go、Python、TypeScript、Rust、C、C++、SQL、Shell 模板均可复制运行；Solidity 模拟合约可测试。
- [ ] AI Agent 能通过白名单工具读取订单、账本和差错池，并输出结构化建议；写操作需要显式审批，默认不触碰真实资金。
- [ ] Agent 评估集覆盖成功任务、工具超时、错误输出、重复执行、权限拒绝和上下文过长。
- [ ] ChainPay-Lab 能在本地模拟数据上完成监听、订单、账本、对账闭环。
- [ ] 每笔账务凭证借贷平衡，历史分录追加写，不直接修改。
- [ ] 重复事件、乱序事件、超时、重试、重组和单边账均有测试。
- [ ] make dev 能启动本地依赖，make test 能执行核心验证。
- [ ] README 包含架构图、启动步骤、API 示例、Agent 演示、故障排查和演示脚本。
- [ ] 完成数据结构模板标记，并为每个模板留下复杂度或边界条件复盘。
- [ ] 完成一次月度复盘，并将未完成项转入下月 backlog。

## 推荐目录

practice/language-basics/ 保存共用语法练习，practice/2026-11/ 保存 11 月专项练习，practice/ai-agent/ 保存 Agent 原型与评估样例，poc/chainpay-lab/ 保存 POC，poc/chainpay-lab/agent/ 保存 Agent 工具与编排，templates/languages/ 和 templates/infrastructure/ 保存可复制模板，templates/agents/ 保存 Agent 模板，docs/ 保存路线图、架构与复盘。
