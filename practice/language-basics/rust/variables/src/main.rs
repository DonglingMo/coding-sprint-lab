// file contains examples of variables in Rust
#![allow(unused_variables)]
const MAX_POINTS: u32 = 100_000;
fn main() {
    let apple = 50;
    let banana = 15 + 5;
    let total_fruit = apple + banana;

    println!("I have {} apples and {} bananas.", apple, banana);
    println!("In total, I have {0} fruits.", total_fruit);

    // default immutable variable
    // apple = 45;

    // mutable and immutable variables
    let mut orange = 20;
    println!("I have {} oranges.", orange);
    orange = 20;
    println!("Now I have {} oranges.", orange);

    // shadowing variable
    // same variable name can be used to declare a new variable, 
    // which shadows the previous variable
    let a = "30";
    let a = 30;
    let a = 30.00;

    // constants
    // complie-time constant, must be annotated with type
    const PI: f32 = 3.14;
    println!("The value of PI is {}.", PI);
    print!("The maximum points is {}.", MAX_POINTS);

    // type aliases
    type Kilometers = i32;
    let distance: Kilometers = 5;
    println!("The distance is {} kilometers.", distance);

    // complier directives
    // function-level attribute to suppress warnings about unused variables
    // #[allow(unused_variables)]
    let unused_variable = 10;
}
