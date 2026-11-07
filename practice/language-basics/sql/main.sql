-- Run with: sqlite3 < main.sql
WITH inputs(value) AS (
    VALUES (12), (-3), (0), (18)
), summary AS (
    SELECT
        COUNT(*) FILTER (WHERE value >= 0) AS count,
        COALESCE(SUM(value) FILTER (WHERE value >= 0), 0) AS total
    FROM inputs
)
SELECT 'count=' || count || ' total=' || total
FROM summary;
