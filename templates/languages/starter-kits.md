# 语言 Starter Kits

这些是可直接复制的最小骨架；复制后先补测试，再接入 POC。Java 的服务模板在 java/README.md。

## Go：watcher / worker

~~~text
cmd/app/main.go
internal/watcher/
internal/watcher/watcher_test.go
go.mod
~~~

~~~go
package main

import "log"

func main() {
  log.Println("watcher template")
}
~~~

验证：go test ./...

## Python：对账 CLI

~~~text
pyproject.toml
src/app/cli.py
tests/test_smoke.py
~~~

~~~python
from pathlib import Path

def summarize(path: str) -> int:
    return len(Path(path).read_text().splitlines())

if __name__ == "__main__":
    print(summarize("input.csv"))
~~~

验证：pytest

## TypeScript：API 客户端 / 管理台

~~~text
package.json
tsconfig.json
src/index.ts
tests/index.test.ts
~~~

~~~ts
export async function getHealth(baseUrl: string): Promise<number> {
  const response = await fetch(baseUrl + "/health");
  return response.status;
}
~~~

验证：npm test；构建：npm run build

## SQL：事件、订单与账本

~~~sql
create table chain_events (
  event_id text primary key,
  block_number bigint not null,
  payload jsonb not null,
  created_at timestamptz not null default now()
);

create table ledger_entries (
  id bigserial primary key,
  event_id text not null references chain_events(event_id),
  account text not null,
  debit numeric(20,8) not null default 0,
  credit numeric(20,8) not null default 0,
  created_at timestamptz not null default now()
);
~~~

验证：psql DATABASE_URL -f schema.sql；为 event_id 建唯一约束，保证幂等。

## Shell：环境与测试入口

~~~bash
#!/usr/bin/env bash
set -euo pipefail

root_dir=$(cd "$(dirname "$0")/.." && pwd)
cd "$root_dir"

echo "running checks"
~~~

验证：shellcheck scripts/*.sh；bash -n scripts/*.sh

## Rust：安全并发 / decoder

~~~text
Cargo.toml
src/main.rs
src/lib.rs
tests/smoke.rs
~~~

~~~rust
pub fn decode_event(input: &[u8]) -> Result<usize, &'static str> {
    if input.is_empty() { return Err("empty event"); }
    Ok(input.len())
}
~~~

验证：cargo fmt --check；cargo test

## C：内存与 ABI/FFI

~~~text
CMakeLists.txt
src/main.c
include/app.h
tests/test_app.c
~~~

~~~c
#include <stdio.h>

int main(void) {
    puts("c memory template");
    return 0;
}
~~~

验证：cmake -S . -B build；cmake --build build；ctest --test-dir build

## C++：RAII / STL / 线程

~~~text
CMakeLists.txt
src/main.cpp
include/app.hpp
tests/test_app.cpp
~~~

~~~cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> samples{1, 2, 3};
    std::cout << samples.size() << "\n";
}
~~~

验证：cmake -S . -B build -DCMAKE_CXX_STANDARD=20；cmake --build build

## Solidity（可选）：模拟事件

用 Foundry 建立 contracts/MockToken.sol，仅在本地 Anvil 或测试网运行；测试应覆盖重复 transfer 事件和非预期收款人。
