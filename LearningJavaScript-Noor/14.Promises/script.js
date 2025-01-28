const promise = new Promise((resolve, reject) => {
    // Asynchronous operation
    const success = true; // Simulating success or failure
  
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    }
  });
  
  // Consuming the Promise
  promise
    .then((result) => {
      console.log(result); // Output: "Operation successful!"
    })
    .catch((error) => {
      console.error(error); // If rejected, this will run
    })
    .finally(() => {
      console.log("Promise is settled."); // Runs regardless of success or failure
    });
  