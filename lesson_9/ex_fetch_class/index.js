
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
    productDiv.style.order = productData.id;
}

// productDiv.style.order = productData.id;


// todo: loop to get the first 10 products
// use css to make it look good

for(let i = 1; i < 10; i++){
    fetch(`https://dummyjson.com/products/${i}`)  //fetch('https://dummyjson.com/products/'+i)
    .then(res => res.json())
    .then(json => template(json))
}