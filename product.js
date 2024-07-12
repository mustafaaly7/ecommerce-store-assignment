const allProducts = document.getElementById("allProducts")

fetch("https://fakestoreapi.com/products").then(data=> data.json())
.then(success => {
console.log(success);
showUI(success)

})
.catch(error =>{
console.log(error);
})




const showUI = (items) =>{
    for(const product of items){
    allProducts.innerHTML += `  <div class="col-lg-3 col-md-4 col-sm-12 mb-4">
            <div class="card all item" style="width: 18rem;">
                <img src=${product.image} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${product.title.slice(0,15)}</h5>
                  <p class="card-text">${product.description.slice(0,80)}</p>
                  <a href="#" class="btn btn-primary">Add to cart</a>
                  <a href="#" class="btn btn-primary">Buy Now!</a>
                </div>
              </div>
              </div>`

            }
}