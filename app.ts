// type aliases- custom name to type means
// type ID = string; // now id means a string u can put id instead of string listeraaly oin the dt types name section

// class Device {
//   name = "harsh";
//   price = 1200;
//   category = "digital";
// }
// let d1 = new Device();
// let d2 = new Device();
// console.log(d1);
// console.log(d2);

class BottleMaker {
  constructor(
    public brand: string,
    public price: number,
  ) {
    console.log("hii crrt");
  }
}
let b1 = new BottleMaker("milton", 1200);
