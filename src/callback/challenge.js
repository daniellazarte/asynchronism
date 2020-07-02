//API Implementation
// Require XMLHTTPRequest npm install xmlhttprequest --save
//FetchData  ==> Get Data from API

let XMLHttpRequest  = require('xmlhttprequest').XMLHttpRequest
const API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback){
    let  xhhtp = new XMLHttpRequest() // Create for Microsoft Corp.
    xhhtp.open('GET', url_api, true) //true async activate in xmlhttprequest
    xhhtp.onreadystatechange = function(event){ //5 states 
        if(xhhtp.readyState === 4){// 4 === complete
            if(xhhtp.status === 200){ // 200 status OK
                callback(null, JSON.parse(xhhtp.responseText)); // the response xhhtp is Text 

            }else{
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }

        }

    }

    xhhtp.send();
}

//Multiple callbacks using Javascript callbacks
//This is the famous... Callback Hell, bad practice
fetchData(API,function(error1, data1){
    if(error1) return  console.error(error1); 
    fetchData(API + data1.results[0].id, function (error2,data2){
        if(error2) return  console.error(error2); 
        fetchData(data2.origin.url, function(error3, data3){
            if(error3) return  console.error(error3); 
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});