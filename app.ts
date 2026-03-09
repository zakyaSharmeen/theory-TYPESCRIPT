function log<T>(value: T) {
  console.log(value);
}
log("har");

//
// genrics- here we can use any type of data and it will work without any error
// we can customize the type of data we want to use by using <T> and then we can use that type in the function

// interface User<T> {
//   name: string;
//   age: number;
//   key: T;
// }

// function abc(obj: User<number>) {}

// abc({ name: "har", age: 23, key: 123 });

////

class BottleMaker<T> {
  constructor(public key: T) {}
}
let b1 = new BottleMaker("har");
let b2 = new BottleMaker(123);
