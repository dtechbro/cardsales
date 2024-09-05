let listProductHTML = document.querySelector('.template-wrapper');
let listProduct = [];


const addDataToHTML = () => {
  listProductHTML.innerHTML = '';
  if(listProduct.length > 0){
    listProduct.forEach(product => {
      let newProduct = document.createElement('div');
      newProduct.classList.add('product');
      newProduct.innerHTML = `
        <img class="card-design" src="${product.image}" alt="card-template-design">

        <div>
          <h6 class="card-name">Black saphire</h6>
          <div class="price-div">
            <p>$30</p>
            <button class="add-cart">Add to cart</button>
          </div>
        </div>
      `;
      listProductHTML.appendChild(newProduct)
    })
  }
}

const initApp = () => {
  //get data from json
  fetch('product.json')
  then(response => response.json())
  then(data => {
    listProduct = data
    addDataToHTML()
  })
}
initApp();