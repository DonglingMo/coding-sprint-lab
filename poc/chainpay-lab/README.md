# ChainPay-Lab

ChainPay-Lab 是一个本地可运行的支付基础设施实验室。它从链上入金闭环出发，逐步扩展到 Web3 支付合约 UTA、DEX、传统支付和 Agent 支付转型。所有场景只使用 mock 数据、本地链或测试网，不接触真实资金。

## POC Focus

1. **Web3 支付合约 UTA**：模拟账户、授权、ERC-20/Permit、结算、手续费、多链事件、幂等和合约安全边界。
2. **DEX**：模拟报价、路由、流动性池、Swap、滑点、价格影响、手续费和风险测试。
3. **传统支付**：覆盖订单、支付路由、PSP 适配、账本、对账、退款、拒付和结算。
4. **Agent 支付转型**：让 Agent 解析支付意图，通过白名单工具生成支付方案；限额、风控、人工审批、执行回执和审计全部保留。
5. **业务扩展槽位**：跨境/FX、订阅计费、发票融资、资金管理、身份与合规、工资/报销和微支付。

## Monthly Scope Rule

每个月只选择一个可在 30 天内验收的小模块。四条主线和扩展业务是长期 backlog，不在同一个月并行实现。

**当前月模块**：ChainPay-Lab Agent 只读对账助手。范围只包括固定 mock 订单、账本、差错池的读取、结构化差异摘要、权限边界、评估和演示；UTA、DEX、传统支付写入链路留到后续月份。

## Shared Kernel

四条主线共享同一个可替换内核，避免为每个 POC 重复建设：

- 领域模型：账户、订单、支付意图、报价、交易、结算、退款和差错。
- 事件模型：统一事件 envelope、版本、幂等键、来源、确认数和审计字段。
- 账务内核：复式记账、追加写、借贷平衡、对账和补偿。
- 可靠性：幂等、重试、超时、游标、重组、死信和恢复。
- Sandbox：mock provider、本地链、虚拟余额、测试夹具和可重复演示数据。
- 安全边界：权限、限额、审批、密钥隔离、威胁模型和只读默认值。

## Architecture

~~~text
                         +----------------------+
                         | Shared Payment Core  |
                         | domain/events/ledger |
                         +----------+-----------+
                                    |
       +----------------+-----------+------------+----------------+
       |                |                        |                |
 Web3 UTA             DEX                Traditional        Agent Payments
 contracts            quote/swap         PSP/ledger         intent/tools
       |                |                        |                |
       +----------------+-----------+------------+----------------+
                                    |
                    Cross-track orchestration
          routing / reconciliation / risk / audit / demo
~~~

## Roadmap

### Phase 1：共享内核

先完成领域模型、事件 schema、账本、幂等、sandbox、测试夹具、审计和统一演示入口。

### Phase 2：四个垂直 POC

按 Web3 UTA、DEX、传统支付、Agent 支付四条主线分别完成最小闭环，每个闭环都能独立测试和演示。

### Phase 3：跨轨编排

实现传统支付、Web3 支付、DEX 和 Agent 之间的路由、报价比较、风险检查、结算对账和人工审批编排。

## POC Tracks

### Web3 Payment Contract UTA

- 模拟账户、授权、Permit、ERC-20 转账和结算。
- 记录链上事件、确认数、重组、手续费和多链来源。
- 测试重放、伪造事件、权限绕过、精度和余额边界。

### DEX

- 模拟报价、路由、流动性池和 Swap 事件。
- 计算滑点、价格影响、手续费和最小成交量。
- 测试报价过期、流动性不足、乱序事件、失败交易和价格异常。

### Traditional Payments

- 订单、支付路由、PSP adapter、授权、扣款、退款和拒付。
- 复用账本、对账、结算批次和差错池。
- 测试重复扣款、路由失败、部分退款、拒付和结算不一致。

### Agent Payments

- 将自然语言支付意图转换为结构化支付请求。
- 通过白名单工具读取余额、订单、报价和风险信息。
- 默认只读；写操作必须经过限额、风控和人工确认。
- 保存 plan、tool call、approval、execution receipt 和 audit trail。
- 测试越权工具、提示注入、模型输出错误、重复执行和审批拒绝。

## Planned Modules

- core/：领域模型、事件、账本、幂等、审计和 sandbox
- shared/：mock provider、测试夹具、配置和跨轨协议
- web3-uta/：合约、链上事件、结算和安全测试
- dex/：报价、路由、流动性、Swap 和风险测试
- traditional-payments/：支付路由、PSP、退款、拒付和结算
- agent-payments/：意图、工具、审批、执行回执和评测
- services/chain-watcher/：Go 链上监听
- services/order-service/：Java 订单状态机与幂等
- services/ledger-service/：Java 复式账本
- services/reconciliation/：Python 对账与差异报告
- services/admin-web/：TypeScript 管理台
- contracts/：可选 Solidity 模拟合约
- migrations/：SQL 数据模型与迁移
- tests/、scripts/、docs/

## POC Acceptance

每个垂直 POC 都必须具备：

1. README、架构图、API/事件流和启动步骤。
2. mock 数据、可重复的测试夹具和演示脚本。
3. 成功、超时、重试、重复、乱序和异常路径测试。
4. 权限、限额、密钥隔离和威胁模型说明。
5. 账务平衡、幂等、对账和恢复验证。

## Local Goals

1. 重复推送同一事件不会重复入账。
2. 扫描中断后可从持久化游标恢复。
3. 能识别区块重组并执行冲正 / 补偿。
4. 每笔凭证借贷平衡，历史分录不可覆盖。
5. 不一致订单自动进入差错池。
6. 四类支付 POC 都能使用同一套 mock、账本和审计能力。
7. Docker Compose 启动后测试和演示可重复运行。

## Status

当前提交建立共享内核、四条 POC 主线和扩展方向；服务实现、架构图、评测集和 CI 将按月度计划逐步添加。
