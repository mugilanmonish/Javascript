let p = new Promise((resolve, reject) => {
    console.log("Login to application");
  
    let value = true
    if (value) {
        resolve(`Logged in`)
    }
    else{
        reject(`fail`)
    }
   
})
p.then(result => console.log(result),error=> console.log(error))
    .catch(error => console.log(error))
    p.then(() => {
    let p1 = new Promise((resolve, reject) => {
        console.log(`click on shoes`);
        setTimeout(() => {
            resolve(`shoes displayed`)
            reject(`unable find`)
        }, 4000);
    })
    p1.then(result => console.log(result))
        .catch(result => console.log(error))
        .finally(() => console.log(`Promisesed`))
})