let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done"), 3000);


});

promise.then(
    result => console.log(result), error => console.log("error")
);
