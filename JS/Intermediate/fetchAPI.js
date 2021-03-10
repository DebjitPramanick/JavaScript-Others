console.log("Fetch API...")

const myBtn = document.getElementById("myBtn");
const myBtn2 = document.getElementById("myBtn2");
const myContent = document.getElementById("myContent");

myBtn.addEventListener('click',async ()=>{
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(res => {
        return res.json()
    })

    console.log(result)
})



myBtn2.addEventListener('click', () => {
    let url = 'http://dummy.restapiexample.com/api/v1/create';
    let data = '{ "name": "debjit", "salary": "12003", "age": "23" }';
    params = {
        method: 'post',
        
        body: data
    }
    fetch(url,params)
    .then(res => res.json())
    .then(data => console.log(data))
})