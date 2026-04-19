// Exercise 1

// function printAfter(message, time, cb) {
//     setTimeout(() => {
//         console.log(message);
//         cb();
//     }, time);
// }

// printAfter("hello", 2000, function() {
//     console.log("Printed...");
// });

// Exercise 2

// function repeatNTimes(n, cb) {
//     for (let i = 1; i <= n; i++) {
//    setTimeout(() => {
//      cb(i)
//         }, 500 * i);
//     }
// }

// repeatNTimes(5, function (n) {
//     console.info(`Running ${n}...`);
// })

// Exercise 3

// function delayedDecision(time, cb) {
//     console.log("Processing...");
//     setTimeout(() => {
//         let output = time > 2000 ? "Too long" : "Quick enough";
//         cb(output);
//     }, time);
// }

// delayedDecision(1000, function(output) {
//     console.log(output);
// })

// Exercise 4

// function getUser(username, cb) {
//   console.log(`Fetching data...`);
//   setTimeout(() => {
//     cb({
//       id: 3098,
//       username: "frag",
//     });
//   }, 1000);
// }

// function getProfile(userID, cb) {
//   console.log(`Fetching User Data...`);
//   setTimeout(() => {
//     cb({
//       bio: "It's Frag aka Harsh",
//       followers: 70,
//     });
//   }, 1000);
// }

// getUser("frag", function (userData) {
//   getProfile(userData.id, function (userProfile) {
//     console.log(
//       `Username: ${userData.username}\nBio: ${userProfile.bio}\nFollowers: ${userProfile.followers}`,
//     );
//   });
// });

// Exercise 5

// function getProduct(productName, cb) {
//   console.log("Fetching Product Data...");
//   setTimeout(() => {
//     cb({
//       id: 3098,
//       name: "laptop",
//     });
//   }, 1000);
// }

// function getReviews(productId, cb) {
//   console.log("Fetching Product Review...");
//   setTimeout(() => {
//     cb(["good", "fine", "cheap and good"]);
//   }, 1000);
// }

// getProduct("Laptop", function (productData) {
//   getReviews(productData.id, function (reviews) {
//     console.log(`Reviews: ${reviews}`);
//   });
// });

// Exercise 6

// function getUser(userName, cb) {
//   const names = ["Frag", "Aman", "Riya", "Karan", "Neha"];
//   console.log("Fetching User...");
//   setTimeout(() => {
//     const found = names.filter(
//       (name) => name.toLowerCase() === userName.toLowerCase(),
//     );
//     let result = found.length > 0 ? "User Found" : "User not Found";
//     cb(result);
//   }, 10);
// }

// getUser("FRAG", function (result) {
//   console.log(result);
// });

// Exercise 7

// function placeOrder(product, cb) {
//   console.log("Fetching Product Details...");
//   setTimeout(() => {
//     const order = {
//       productName: product,
//       productID: Math.floor(Math.random() * 5000),
//       price: Math.floor(Math.random() * 50000),
//     };
//     cb(order);
//   }, 1000);
// }

// function processPayment(order, cb) {
//   console.log("Processing Payment...");
//   setTimeout(() => {
//     order.paymentMethod = "upi";
//     ((order.success = true), cb(order));
//   }, 1000);
// }

// function generateInvoice(order, cb) {
//   console.log("Generating Invoice...");
//   setTimeout(() => {
//     console.log("Order Details");
//     cb(order);
//   }, 1000);
// }

// placeOrder("laptop", function (product) {
//   processPayment(product, function (payment) {
//     generateInvoice(payment, function (invoice) {
//       console.dir(invoice);
//     });
//   });
// });
