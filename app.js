let listProductHTML = document.querySelector('.template-wrapper');
let listProduct = [];


const addDataToHTML = () => {
  listProductHTML.innerHTML = '';
  if(listProduct.length > 0){
    listProduct.forEach(product => {
      let newProduct = document.createElement('div');
      newProduct.classList.add('product');
      newProduct.innerHTML = `
        <img src="./Frame 3.png" alt="">
        <h2>NAME PRODUCT</h2>
        <div clas
      `;
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