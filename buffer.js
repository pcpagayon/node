let buffer = new Buffer(10);
console.log(buffer);

// let buffer = new Buffer("I'm a string", "utf-8");
// console.log(buffer)

buffer.write("Hello", "ascii")