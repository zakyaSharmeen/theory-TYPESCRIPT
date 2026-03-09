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
var BottleMaker = /** @class */ (function () {
    function BottleMaker(brand, price) {
        this.brand = brand;
        this.price = price;
        console.log("hii crrt");
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("milton", 1200);
