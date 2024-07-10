const parentSecondsectionContent =document.getElementById("parentSecondsectionContent")
let count ;

fetch("https://fakestoreapi.com/products").then(data => data.json())
.then(success => {
    console.log(success);
    renderUI(success)
})
.catch(error => {
    console.log(error);
})












