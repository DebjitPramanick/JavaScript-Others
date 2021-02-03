// This is web Crawler to console log all the links of a site


let q = "JavaScript";
let links = document.links;
let href;

Array.from(links).forEach( e => {
    href = e.href;
    if(href.includes(q)){
        console.log(href);
    }
})