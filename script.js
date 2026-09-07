let cart = [];


// Add product to cart
function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    displayCart();
}


// Display cart
function displayCart() {

    const cartItems = document.getElementById("cartItems");
    const totalElement = document.getElementById("total");

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

        totalElement.textContent = "0";

        return;
    }


    let total = 0;


    cart.forEach(function(item, index) {

        total = total + item.price;


        const cartItem = document.createElement("div");

        cartItem.classList.add("cart-item");


        cartItem.innerHTML = `
            <span>
                ${item.name} - ₹${item.price}
            </span>

            <button
                class="remove-button"
                onclick="removeFromCart(${index})">
                Remove
            </button>
        `;


        cartItems.appendChild(cartItem);

    });


    totalElement.textContent = total;
}


// Remove item from cart
function removeFromCart(index) {

    cart.splice(index, 1);

    displayCart();
}


// Add a new product for selling
function addProduct() {

    const name =
        document.getElementById("productName").value;

    const price =
        document.getElementById("productPrice").value;

    const condition =
        document.getElementById("productCondition").value;


    if (name === "" || price === "" || condition === "") {

        alert("Please fill all the fields!");

        return;
    }


    const productList =
        document.getElementById("productList");


    const product =
        document.createElement("div");

    product.classList.add("product");


    product.innerHTML = `

        <div class="product-image">
            📦
        </div>

        <h3>${name}</h3>

        <p>Second-hand product</p>

        <p class="condition">
            Condition: ${condition}
        </p>

        <strong>₹${price}</strong>

        <button onclick="addToCart('${name}', ${price})">
            Buy Now
        </button>

    `;


    productList.prepend(product);


    // Clear input fields

    document.getElementById("productName").value = "";

    document.getElementById("productPrice").value = "";

    document.getElementById("productCondition").value = "";
}


// Search products
document
    .getElementById("searchInput")
    .addEventListener("input", function() {

        const searchValue =
            this.value.toLowerCase();


        const products =
            document.querySelectorAll(".product");


        products.forEach(function(product) {

            const productName =
                product.querySelector("h3")
                .textContent
                .toLowerCase();


            if (productName.includes(searchValue)) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });


// Checkout
function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    alert("🎉 Order placed successfully!");


    cart = [];

    displayCart();
}