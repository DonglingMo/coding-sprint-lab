.PHONY: dev observability down logs health test

COMPOSE := docker compose --env-file .env -f templates/infrastructure/docker-compose.dev.yml

# 启动 PostgreSQL 和 Redis
dev:
	$(COMPOSE) up -d postgres redis

# 启动依赖和 Prometheus/Grafana
observability:
	$(COMPOSE) --profile observability up -d

down:
	$(COMPOSE) down

logs:
	$(COMPOSE) logs -f --tail=100

health:
	$(COMPOSE) ps
	redis-cli -h localhost ping

test:
	@echo "Replace this target with project-wide unit and integration tests"
