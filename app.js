const parentSecondsectionContent = document.getElementById("parentSecondsectionContent")

fetch("https://fakestoreapi.com/products").then(data => data.json())
    .then(success => {
        console.log(success);
        renderUI(success)
    })
    .catch(error => {
        console.log(error);
    })

const renderUI = items => {
    let count = 0;

    for (var product of items) {
        if (count >= 4) break;
        parentSecondsectionContent.innerHTML += `  <div class="col-lg-3 col-md-4 col-sm-12 mb-4">
                        <div class="card w-100 " >
                            <img src=${product.image} class="card-img-top" alt="...">
                            <br>
                            <hr>
                          <h5 class="card-title">${product.title.slice(0,38)}</h5>
                            
                          </div>`
        //   console.log(product.image);
        count++
        //    console.log(count);           
    }

}










