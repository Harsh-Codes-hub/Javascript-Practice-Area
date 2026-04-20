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

// Exercise 8

// function readFile(file, cb) {
//   console.log("Reading file...");
//   setTimeout(() => {
//     const document = {
//       fileName: file,
//       fileCreatedBY: "User",
//       fileCreatedOn: new Date(),
//       fileStatus: "notUpdated",
//       fileData: {
//         name: "frag",
//         age: 22,
//         gender: "male",
//       },
//     };
//     cb(document);
//   }, 1000);
// }

// function processFile(document, city, cb) {
//   console.log("Processing file...");
//   setTimeout(() => {
//     document.fileData.city = city;
//     document.fileStatus = "Updated";
//     cb(document);
//   }, 1000);
// }

// function saveFile(document, cb) {
//   console.log("Saving file...");
//   setTimeout(() => {
//     document.isSaved = true;
//     const saved = JSON.stringify(document);
//     localStorage.setItem("file", saved)
//     cb(saved);
//   });
// }

// readFile("myIntro", function (fileData) {
//     processFile(fileData, "Chittorgarh", function (updatedFile) {
//         saveFile(updatedFile, function (savedFile) {
//             console.log(savedFile);
//         })
//     })
// })

// Exercise 9

// function getUser(userName, cb) {
//   console.log("Fetching User...");
//   setTimeout(() => {
//     let found = Math.random() > 0.3 ? true : false;
//     cb(found);
//   }, 1000);
// }

// function getSettings(username, cb) {
//   console.log("Fetching User Settings...");
//   setTimeout(() => {
//     let found = Math.random() > 0.3 ? true : false;
//     cb(found);
//   }, 1000);
// }

// function printResults(userFound, userSettingsFound) {
//   console.log("Validating...");
//   setTimeout(() => {
//     const result = userFound && settingsFound ? "USER FOUND" : "USER NOT FOUND";
//     console.log(result);
//   }, 1000);
// }

// let userFound = undefined;
// let settingsFound = undefined;

// function check(param) {
//   if (userFound !== undefined && settingsFound !== undefined)
//     printResults(userFound, settingsFound);
// }

// getUser("frag", function (result) {
//   userFound = result;
//   check();
// });

// getSettings("frag", function (result) {
//   settingsFound = result;
//   check();
// });

// Exercise 10

// function loginUser(userName, cb) {
//   console.log("Logging in...");
//   setTimeout(() => {
//     const userDetails = {
//       userName: userName,
//       isLoggedIn: true,
//     };
//     console.log("User Logged In...");
//     cb(userDetails);
//   }, 1000);
// }

// function getUserDetails(userDetails, cb) {
//   console.log("Fetching User Details...");
//   setTimeout(() => {
//     userDetails.age = 22;
//     userDetails.gender = "Male";
//     cb(userDetails);
//   }, 1000);
// }

// function getUserPosts(userDetails, cb) {
//   console.log("Fetching User Posts...");
//   setTimeout(() => {
//     userDetails.allPosts = {
//       post1: {
//         postId: 1,
//         postName: "HEY",
//         comments: ["HEY MAN", "YO BUDDY", "HELLO BUD"],
//       },
//       post2: {
//         postId: 2,
//         postName: "Its me Again",
//         comments: ["GOOD TO SEE YOU AGAIN", "HELLO MATE"],
//       },
//       post3: {
//         postId: 3,
//         postName: "I AM BACK",
//         comments: ["YO MAN WHATS UP", "GOOD TO SEE YOU MATE"],
//       },
//     };
//     cb(userDetails);
//   }, 1000);
// }

// function getCommentsForPost(userDetails, postNumber, cb) {
//   console.log(`Fetching Post No. ${postNumber} Comment...`);
//   setTimeout(() => {
//     let postToSee = postNumber;
//     let allPosts = JSON.parse(JSON.stringify(userDetails.allPosts));
//     for (const key in allPosts) {
//       const element = allPosts[key];
//       if (element.postId === postNumber) {
//         cb(element.comments);
//         return;
//       }
//     }
//   }, 1000);
// }

// loginUser("Frag", function (userDetails) {
//   getUserDetails(userDetails, function (userDetails) {
//     getUserPosts(userDetails, function (userDetails) {
//       getCommentsForPost(userDetails, 3, function (comments) {
//         console.log(comments);
//       });
//     });
//   });
// });
