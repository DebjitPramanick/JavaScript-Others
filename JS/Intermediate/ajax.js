// AJAX stands for Asynchronous JavaScript And XML
// Modern website uses JSON instead of XML


console.log("Let's learn AJAX.")


let fetchBtn = document.getElementById('fetch-btn');
const backupBtn = document.getElementById('backup-btn');

fetchBtn.addEventListener('click', getData) 
backupBtn.addEventListener('click', postData) 

// 	http://dummy.restapiexample.com/api/v1/create



function getData(){

    console.log("Button Clicked!")

    // Creating an xhr object
    const xhr = new XMLHttpRequest();

    // Opening the object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/', true);

    // What to do on progress
    xhr.onprogress = () => {
        console.log("On progress ....")
    }


    // What to do onload
    xhr.onload = () => {
        const obj = JSON.parse(xhr.responseText);
        console.log(obj)

        let list = document.getElementsByClassName("list")[0];
        str = " ";

        for(key in obj){
            str += `<p>${obj[key].title}</p>`
        }
        list.innerHTML = str
    }


    // Send the request
    xhr.send();
}



function postData(){
    console.log("Button Clicked!")

    // Creating an xhr object
    const xhr = new XMLHttpRequest();

    // Opening the object
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getAllResponseHeaders('Content-type','application/json')

    // What to do on progress
    xhr.onprogress = () => {
        console.log("On progress ....")
    }


    // What to do onload
    xhr.onload = () => {
        console.log(xhr.responseText);
    }


    // Send the request
    params = { "name": "test", "salary": "123", "age": "23" }
    xhr.send(params);
}