// AJAX stands for Asynchronous JavaScript And XML
// Modern website uses JSON instead of XML


console.log("Let's learn AJAX.")


let fetchBtn = document.getElementById('fetch-btn');

fetchBtn.addEventListener('click', () => {

    console.log("Button Clicked!")

    // Creating an xhr object
    const xhr = new XMLHttpRequest();

    // Opening the object
    xhr.open('GET', 'https://randomuser.me/api/', true);

    // What to do on progress
    xhr.onprogress = () =>{
        console.log("On progress ....")
    }
    
    
    // Send the request
    xhr.send();


    // What to do onload
    xhr.onload = () =>{
        console.log(this.response);
    }


    
})