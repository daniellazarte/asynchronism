//Working with promises &  Ecmascript 6
const swh = () =>{
    return  new Promise((resolve, reject) => {
        if(true){
            resolve('Fuck Yeah'); // its OK

        }else {
            reject('WTF :('); // fucking problem
        }
    });
}

swh()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const swh2 = () => {
    return new Promise((resolve,reject) =>{
        if(true){
            setTimeout(() => {
                resolve('True');
            },3000)
        }else{
            const erorr = new Error('buahhh ¬;¬');
            reject(erorr);
        }

    });
}

swh2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

//Run  2 and more promises in ECs
    Promise.all([swh(),swh2()])
        .then( response => {
            console.log('Array of results', response);

        })
        .catch(err => {
            console.error(err);

        });