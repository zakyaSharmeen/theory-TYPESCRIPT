// class Person {
//   constructor(public _name: string) {}

//   get name() {
//     return this._name;
//   }
//   set name(value: string) {
//     this._name = value;
//   }
// }

// let Person2 = new Person("ram");
// console.log(Person2._name);
// console.log(Person2.name);
// Person2.name = "sita";
// console.log(Person2);

// function abc(name: string, age: number, cb: (arg: string) => void) {
//   cb("hii coming from inside");
// }
// abc("har", 12, (arg: string) => {
//   console.log("hii mitho");
// });

/////////////////
// function abc(
//   name: string,
//   age: number,
//   gender: string = "not to be disclosed",
// ) {
//   console.log({ name: name, age: age, gender: gender });
// }
// abc("har", 12);
// abc("sita", 22, "female");

/////////////////////////////////

// function sum(...arr: number[]) {
//   console.log(arr);
// }
// sum(1, 2, 3, 4, 5);

// function abc(...arr: string[]) {
//   console.log(arr);
// }
// abc("hii", "he;llo", "narayana");
