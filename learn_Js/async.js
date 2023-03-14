/*
const weather = true;

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

async function myDate () {
    try {
        let dateDetails = await date
        let message = await orderUber(dateDetails)
        console.log(message)
    } catch(error){
        console.log(error.message)
    }
}
(async () => {
    await myDate()
})();
*/
//todo
/*async function fetchUsers(endpoint){
    const res = await fetch(endpoint)
    let data = await res.json()

    data = data.map(user => user.username)
    console.log(data)
}

fetchUsers(`http://jsonplaceholder.typicode.com/users`)
*/

//todo
/*
async function fetchUsers(endpoint){
    const res = await fetch(endpoint)
    if (!res.ok){
        throw new Error(res.status)
    }
    let data = await res.json()

    return data
}

fetchUsers(`http://jsonplaceholder.typicode.com/users`)
    .then(data => console.log(data.map(user => user.username)))
    .catch(err => console.log(`Oop, error`, err.message))
    */