/*
const weather = false;

const date = new Promise((resolve, reject) => {
    if (weather) {
        const dateDetails = {
            name: "Chanyut Dongthana",
            location: "30/1 nongchaiwan",
            table: 5
        }
        resolve(dateDetails)
    }else {
        reject(new Error("Bad weather, can not go to dinner."));
    }

})

const orderUber = dateDetails => {
    return new Promise((resolve, reject) => {
        const message = `Get me an Uber ASAP to ${dateDetails.location}, we are going to a dinner.`
        resolve(message)
    })
}

const myDate = () => {
    date
        .then(orderUber)
        .then(done => {
            console.log(`we are going on a dinner.`)
            console.log(done)

        })
        .catch(error =>{
            console.log(error.message)
        })
}
myDate()
*/
