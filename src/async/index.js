//Working with Async / Await
const doAsync = () => {
    return new Promise((resolve, reject) =>{
        (true)
            ?setTimeout(() => resolve ('Do Something Async pappaa'),3000)
            :reject(new Error('Test Error'))

    });
}

const doSmtimes = async () => {
    const something = await doAsync();
    console.log(something);
}

console.log('Before...');
doSmtimes();
console.log('After...');

const anof = async() => {
    try{
        const something = await doSmtimes();
        console.log(something);

    }catch (error){
        console.error(error);
    }
}

console.log('Before...1');
anof();
console.log('After...1');