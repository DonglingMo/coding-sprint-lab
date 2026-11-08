#![allow(unused_variables)]
fn main() {
    // integer types, the default is i32
    let a = 10; // i32
    let a_eight: i8 = -128;
    let a_usigned: u16 = 65535;
    let b = 100_000;

    // usize and isize types, the size depends on the architecture of the machine
    let days: usize = 255;
    let max_value: isize = 100;

    // string types
    let name = "Alice"; // &str
    let name_string: String = String::from("Bob");
    // \t, \n, \r, \\, \", \', \0
    // string raw literal
    let raw_string = r#"This is a raw 
    string literal"#;
    print!("{}\n", raw_string);

    // method
    // need type annotation for the variable to use the method
    let value: i32 = -15;
    print!("{}\n", value.abs());

    // floating point types
    // float types are f32 and f64, the default is f64
    // float same as float and double in java, c, c++, c#, python, etc.
    let pi: f64 = 3.1415926; // f64
    print!("{}\n", pi.floor());
    print!("{}\n", pi.ceil());
    print!("{}\n", pi.round());
    // format specifier,round up
    print!("{:.4}\n", pi);

    // as casting, samall to large type is safe, but large to small type may cause overflow
    let x = 10;
    let y: i8 = x as i8;

    // math operations
    let sum = 5 + 10;
    let difference = 95.5 - 4.3;
    let product = 4 * 30;
    let quotient = 56.7 / 32.2;
    let remainder = 7 % 3;
    print!("{}\n", sum);
    print!("{}\n", difference);
    print!("{}\n", product);
    print!("{}\n", quotient);
    print!("{}\n", remainder);

    // assignment operations
    let mut year = 5;
    // rust support +=, -=, *=, /=, %= operators
    year += 1;
    // rust does not support ++ and -- operators
    print!("{}\n", year);

    // boolean type
    // bool is 8 bits, true is 1 and false is 0
    let is_rust_fun: bool = true;
    print!("{}\n", is_rust_fun);
    let age: i32 = 21;
    let young: bool = age < 35;
    println!("{young}");
    let not_young = !young;
    println!("{not_young}");

    // equal and not equal operators
    let is_equal = 5 == 5;
    let is_not_equal = 5 != 5;

    // logical operators
    let is_true = true && true;
    let is_false = true || false;

    // character type
    let letter: char = 'A';
    println!("{}", letter.is_alphabetic());

    // array with same type and fixed length
    let numbers: [i32; 5] = [1, 2, 3, 4, 5];
    let first = numbers[0];

    // type inference, the type of the array is inferred from the elements
    // unknown length array, the length is inferred from the elements
    let mut fruits = ["Apple", "Banana", "Cherry"];
    println!("The first fruit is: {}", fruits[0]);
    println!("The second fruit array length is: {}", fruits.len());
    // mutable array, the elements can be changed
    fruits[1] = "Blueberry";
    println!("The second fruit is: {}", fruits[1]);

    // Display traits, can be used to format the output of the array
    // std::fmt::Display
    // println!("The fruits array is: {}", fruits);
    // std::fmt::Debug trait is implemented for arrays, so we can use {:?} to format the output of the array
    println!("The fruits array is: {:?}", fruits);
    // std::fmt::Debug trait is implemented for arrays, so we can use {:#?} to format the output of the array with pretty print
    println!("The fruits array is: {:#?}", fruits);

    // debug
    dbg!("The fruits array is: {:?}", fruits);
    dbg!(2 + 2);

    // tuple type
    let person = ("Molly", 5, "Marketing");
    println!("Name: {}, Age: {}, Department: {}", person.0, person.1, person.2);
    println!("{person:#?}");
    let (name, age, department) = person;
    println!("Name: {name}, Age: {age}, Department: {department}");

    // range type
    let months = 1..=12; // inclusive range
    let months_days = 1..31; // exclusive range
    println!("{months:?}");
    println!("{months_days:?}");

    for number in months {
        println!("Month: {}", number);
    }

    // generic type, the type of the variable is determined by the type of the value assigned to it
    let generic_variable = 10; // i32
    // Type and value boxed
    

}

