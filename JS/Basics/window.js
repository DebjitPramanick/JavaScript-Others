let a = window;

console.log(a);

if(confirm("Reload this page?")){
    a.location.href = 'https://www.hackerrank.com/dashboard';
}
else{
    a.history.go(-1)
}

// history.go(-1) takes you to just one step backward