//FetchData utils, return HTTPGET with data
// Require XMLHTTPRequest npm install xmlhttprequest --save
//FetchData  ==> Get Data from API

let XMLHttpRequest  = require('xmlhttprequest').XMLHttpRequest
const fetchData = (url_api) =>{
    return new Promise((resolve, reject) =>{
        const  xhhtp = new XMLHttpRequest() // Create for Microsoft Corp.
        xhhtp.open('GET', url_api, true) //true async activate in xmlhttprequest
        xhhtp.onreadystatechange = (() => { //5 states 
            if(xhhtp.readyState === 4){// 4 === complete
                (xhhtp.status === 200) // If ternario 
                    ? resolve(JSON.parse(xhhtp.responseText))
                    : reject(new Error('Error', url_api))
            }
        });
        xhhtp.send();
    });
}


module.exports = fetchData;