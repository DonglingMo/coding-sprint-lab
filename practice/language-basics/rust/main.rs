fn summarize(values: &[i32]) -> (usize, i32) {
    let mut count = 0;
    let mut total = 0;

    for value in values {
        if *value >= 0 {
            count += 1;
            total += *value;
        }
    }

    (count, total)
}

fn main() {
    let values = [12, -3, 0, 18];
    let (count, total) = summarize(&values);
    println!("count={} total={}", count, total);
}
