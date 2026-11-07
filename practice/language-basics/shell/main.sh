#!/usr/bin/env bash
set -euo pipefail

summarize() {
    local count=0
    local total=0
    local value

    for value in "$@"; do
        if (( value >= 0 )); then
            count=$((count + 1))
            total=$((total + value))
        fi
    done

    printf 'count=%d total=%d\n' "$count" "$total"
}

summarize 12 -3 0 18
