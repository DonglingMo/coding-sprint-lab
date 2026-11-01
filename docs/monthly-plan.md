# 30 天月度计划：Coding Sprint Lab + ChainPay-Lab

> 目标：用一个月建立可复用的多语言工程手感，并交付一个可运行、可测试、可演示的 ChainPay-Lab POC。

## 本月重点

- **主线语言**：Java、Go。Java 负责订单与账本，Go 负责链上/事件监听。
- **辅助语言**：Python、TypeScript。Python 负责对账与报表，TypeScript 负责管理台与接口联调。
- **基础能力**：SQL、Shell、Docker Compose、PostgreSQL、Redis、CI、日志与指标。
- **可选探索**：Solidity，仅用于本地或测试网的模拟 ERC-20 事件。
- **每日投入**：约 2 小时：60 分钟语言训练，40 分钟 POC，20 分钟测试、Review 与记录。

## 30 天节奏

### Week 1（D1-D7）：语言基础与开发模板

对应 Milestone：**Week 1：基础语言训练**

| 天数 | 任务 | 当日交付 |
| --- | --- | --- |
| D1 | Java 集合与 LRU | 完成 practice/java/day-01-lru，补边界测试 |
| D2 | Go map、接口与缓存 | 一个带过期策略的内存缓存及测试 |
| D3 | Python CLI、文件与异常 | 可读取账单文件并输出摘要的 CLI |
| D4 | JavaScript/TypeScript async、HTTP | 一个可调用 REST 接口的最小客户端 |
| D5 | SQL 表设计、JOIN、索引 | ChainPay-Lab 订单、事件、账本基础 schema |
| D6 | Shell 参数、退出码、日志 | setup-dev.sh、test-all.sh 的最小版本 |
| D7 | 周复盘与模板整理 | 每种重点语言至少有一个可复制的模板和 README |

### Week 2（D8-D14）：并发、事件与数据一致性

对应 Milestone：**Week 2-3：并发与业务工程**

- D8-D9：Java Executor、并发容器、超时与取消。
- D10-D11：Go goroutine、channel、worker pool、优雅退出。
- D12：Python asyncio、批处理与失败重试。
- D13：TypeScript Promise、并发请求、超时与错误边界。
- D14：SQL 事务、唯一约束、索引和幂等键；完成一次周复盘。

交付标准：每个并发练习都有成功、超时、重复执行和异常路径测试。

### Week 3（D15-D21）：服务工程与基建

对应 Milestone：**Week 2-3：并发与业务工程**

- D15-D16：选择 Java 或 Go 作为主服务，完成 REST API、参数校验和统一错误响应。
- D17：订单状态机、幂等写入、账本追加写和审计字段。
- D18：Dockerfile、Docker Compose、PostgreSQL、Redis 与健康检查。
- D19：Makefile、.env.example、本地一键启动与一键测试。
- D20：GitHub Actions CI 模板，覆盖格式检查、单元测试和构建。
- D21：Prometheus/Grafana 指标草案、日志字段约定与周复盘。

交付标准：新环境只需复制 .env.example 并执行 make dev，即可启动依赖服务。

### Week 4（D22-D30）：ChainPay-Lab 集成、可靠性与交付

对应 Milestone：**Week 4：POC 集成、测试和交付**

- D22-D23：Go watcher 消费模拟区块事件，记录游标、确认数和原始事件。
- D24：Java Order/Ledger Service，将事件转成订单并完成借贷平衡的记账。
- D25：Python 对账任务，输出差异报告和补偿建议。
- D26：TypeScript 管理台，展示订单、流水和差错池。
- D27：重复事件、乱序、超时、重试、重组、单边账测试。
- D28：日志、指标、故障演练和数据恢复说明。
- D29：README、架构图、API 示例、演示脚本与 Docker Compose 验收。
- D30：全量测试、Review、复盘和下月 backlog。

## 每日完成定义

1. 有可运行的代码或配置，并放在对应目录。
2. 至少一个有意义的测试或验证命令通过。
3. 写下一个决策、一个问题和下一步动作。
4. 提交一次 Conventional Commit，例如 feat(java): add lru cache eviction。

## 月末验收清单

- [ ] Java、Go、Python、TypeScript、SQL、Shell 模板均可复制运行。
- [ ] ChainPay-Lab 能在本地模拟数据上完成监听、订单、账本、对账闭环。
- [ ] 每笔账务凭证借贷平衡，历史分录追加写，不直接修改。
- [ ] 重复事件、乱序事件、超时、重试、重组和单边账均有测试。
- [ ] make dev 能启动本地依赖，make test 能执行核心验证。
- [ ] README 包含架构图、启动步骤、API 示例、故障排查和演示脚本。
- [ ] 完成一次月度复盘，并将未完成项转入下月 backlog。

## 推荐目录

practice/ 保存每日练习，poc/chainpay-lab/ 保存 POC，templates/languages/ 和 templates/infrastructure/ 保存可复制模板，docs/ 保存路线图、架构与复盘。
