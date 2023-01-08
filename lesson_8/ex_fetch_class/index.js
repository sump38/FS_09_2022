
const template = (productData) => {
    const productDiv = document.createElement("div");
    const productImg = document.createElement("img");
    const productTitle = document.createElement("h2");
    productImg.src = productData.thumbnail;
    productTitle.innerHTML = productData.title;
    productDiv.appendChild(productImg);
    productDiv.appendChild(productTitle);
    const productsContainer = document.getElementById("products_container");
    productsContainer.appendChild(productDiv) ;
}

fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(json => template(json))


// todo: loop to get the first 10 products
// use css to make it look good