console.log("Callback function.")

const developers = [
    { student: "Debjit", field: "MERN Stack" },
    { name: "Rohan", field: "Docker" }
]
const enlistDeveloper = (developer, callback) => {
    setTimeout(() => {
        developers.push(developer);
        console.log("New developer is enlisted.")
        callback();
    }, 2000)
}
const getDeveloperList = () => {
    setTimeout(() => {
        developers.forEach((developer) => {
            console.log(developer)
        })
    }, 2000)

}



console.log("Enlisting develoepr.....")
const data = {
    name: "Deba",
    field: "Android"
}
enlistDeveloper(data, getDeveloperList);