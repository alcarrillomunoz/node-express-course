let display = document.querySelector('div');
let productsButton = document.getElementById('productsButton'); 

productsButton.addEventListener('click', displayProducts);

function displayProducts() {
    //console.log('clicked');
    retrieveData();
}

function retrieveData() {
    fetch('http://localhost:3000/api/v1/products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Request failed');
        }
        return response.json();
    })
    .then(data => {
        const { products } = data; 
        console.log(products); 

        products.forEach((product) => {
            //console.log(product);
            let p = document.createElement('p');
            let description = document.createElement('p');
            p.innerHTML = `${product.name} - $${product.price}`;
            description.innerHTML = product.desc;
            display.appendChild(p); 
            display.appendChild(description); 
        })
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
}