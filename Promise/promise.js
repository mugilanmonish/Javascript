let p = new Promise((resolve,reject)=>{
    let value = false
    if (value) {
        resolve("Pass")
    } else {
        reject("Failed")
    }
});
p.then(result=>console.log("It is passed"),result=>console.log("It is failed"))