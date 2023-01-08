/*brand
: 
"Apple"
category
: 
"smartphones"
description
: 
"An apple mobile which is nothing like apple"
discountPercentage
: 
12.96
id
: 
1
images
: 
(5) ['https://i.dummyjson.com/data/products/1/1.jpg', 'https://i.dummyjson.com/data/products/1/2.jpg', 'https://i.dummyjson.com/data/products/1/3.jpg', 'https://i.dummyjson.com/data/products/1/4.jpg', 'https://i.dummyjson.com/data/products/1/thumbnail.jpg']
price
: 
549
rating
: 
4.69
stock
: 
94
thumbnail
: 
"https://i.dummyjson.com/data/products/1/thumbnail.jpg"
title
: 
"iPhone 9"
*/


const template = (productData)=>{
    const prodDiv = document.createElement("div");
    prodDiv.classList.add("product-data");
    const prodImg = document.createElement("img");
    prodImg.src = productData.thumbnail;
    const prodName = document.createElement("h2");
    prodName.innerHTML = productData.brand;
    prodDiv.appendChild(prodImg);
    prodDiv.appendChild(prodName);
    const productsContainer = document.getElementById("productsContainer");
    productsContainer.appendChild(prodDiv);





}


const fetchWarper = (url)=>{
fetch(url)
.then(res => res.json())
.then(json => template(json))
}
for(let i = 1; i<10;i++){
    fetchWarper(`https://dummyjson.com/products/${i}`)
}

// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => template(json))

// fetch('https://dummyjson.com/products/2')
// .then(res => res.json())
// .then(json => template(json))
// fetch('https://dummyjson.com/products/3')
// .then(res => res.json())
// .then(json => template(json))
// fetch('https://dummyjson.com/products/4')
// .then(res => res.json())
// .then(json => template(json))
// fetch('https://dummyjson.com/products/5')
// .then(res => res.json())
// .then(json => template(json))