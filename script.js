
const getData =() => {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhttp.onload = () => {
        console.log(xhttp.responseText);
    }
    xhttp.send();
}