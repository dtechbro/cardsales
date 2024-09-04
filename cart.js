let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsDiv = document.querySelector('.cart-items');
const totalPriceSpan = document.getElementById('total-price');

function renderCart() {
    cartItemsDiv.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        totalPrice += item.price * item.quantity;

        cartItemsDiv.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h6>${item.name}</h6>
                    <p>$${item.price}</p>
                    <div class="quantity-controls">
                        <button onclick="changeQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity(${index}, 1)">+</button>
                    </div>
                    <button onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
        `;
    });

    totalPriceSpan.innerText = totalPrice.toFixed(2);
}

function changeQuantity(index, delta) {
    if (cart[index].quantity + delta > 0) {
        cart[index].quantity += delta;
    } else {
        cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

renderCart();