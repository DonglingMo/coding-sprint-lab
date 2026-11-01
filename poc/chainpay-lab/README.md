# ChainPay-Lab

ChainPay-Lab 是一个本地可运行的模拟支付 / 链上入金 POC。它监听 EVM 测试链或 mock 区块事件，把链上转账转换为业务订单，并完成幂等入账、复式记账、差异对账和异常补偿。仅使用测试网或本地模拟数据，不接触真实资金。

## Architecture

```text
EVM / Mock Blockchain
        |
Chain Watcher (Go): block scanning, confirmations, reorg handling
        |
+-------------------+------------------+
| Order Service     | Ledger Service   |
| Java state machine| Java double-entry|
+-------------------+------------------+
        |
Reconciliation (Python): order / chain event / ledger comparison
        |
Admin Dashboard (TypeScript): orders, transactions, error pool, metrics
```

## Planned Modules

- services/chain-watcher/ — Go 链上监听
- services/order-service/ — Java 订单状态机与幂等
- services/ledger-service/ — Java 复式账本
- services/reconciliation/ — Python 对账与差异报告
- services/admin-web/ — TypeScript 管理台
- contracts/ — 可选 Solidity 模拟 ERC-20 合约
- migrations/ — SQL 数据模型与迁移
- tests/、scripts/、docs/

## Local Goals

1. 重复推送同一事件不会重复入账。
2. 扫描中断后可从持久化游标恢复。
3. 能识别区块重组并执行冲正 / 补偿。
4. 每笔凭证借贷平衡，历史分录不可覆盖。
5. 不一致订单自动进入差错池。
6. Docker Compose 启动后测试可重复运行。

## Status

当前提交只建立 POC 说明和目录边界；服务实现、架构图和 CI 将按月度计划逐步添加。
