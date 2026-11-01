# 基建模板

这组模板提供本地开发、依赖服务、健康检查和 CI 的统一入口，适合直接复制到 ChainPay-Lab 或其他 POC。

## 文件

- docker-compose.dev.yml：PostgreSQL、Redis、Prometheus、Grafana。
- .env.example：端口、凭据和服务地址的非敏感默认值。
- Makefile：make dev、make down、make logs、make test。
- github-actions-ci.yml：Java、Go、Python、Node 的 CI 示例，可复制到 .github/workflows/ci.yml。

## 启动

从仓库根目录执行：

~~~bash
cp templates/infrastructure/.env.example .env
make -f templates/infrastructure/Makefile dev
make -f templates/infrastructure/Makefile health
# 可选：启动 Prometheus 和 Grafana
make -f templates/infrastructure/Makefile observability
~~~

## 约定

- 数据库是账务最终事实来源，Redis 只做幂等键和缓存。
- 所有服务提供健康检查；应用依赖就绪后再启动消费者。
- 密钥只放在本地 .env 或 GitHub Actions Secrets，不提交真实值。
- 指标至少覆盖请求数、延迟、错误数、消费游标和对账差异数。

## ChainPay-Lab 接入点

1. PostgreSQL 建立 orders、chain_events、ledger_entries、reconciliation_results。
2. Redis 保存 event_id 幂等键、短期锁和缓存，不写入账务最终结果。
3. Go watcher 记录消费游标，Java 服务用事务完成订单和账本写入。
4. Python 对账任务和 TypeScript 管理台复用同一组 API 与只读查询。

## CI 示例

~~~yaml
name: ci
on: [push, pull_request]
jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: make test
~~~
