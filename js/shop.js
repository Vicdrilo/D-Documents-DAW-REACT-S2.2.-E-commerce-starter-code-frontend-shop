// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    let productSelected;
    let alreadyAdded = false;
    let totalProducto = 0;
    // 1. Loop for to the array products to get the item to add to cart
    for (let product of products){
        if(product.id === id){
            productSelected = product;
        }
    }

    //Adding one more product to the quantity property
    for (let product of cart){
        if(product.id === productSelected.id){
            product.quantity ++;
            productSelected.total += productSelected.price;
            alreadyAdded = true;
        }
    }

    // 2. Add found product to the cart array
    if(!alreadyAdded){
        productSelected.quantity = 1;
        totalProducto += (productSelected.quantity * productSelected.price);
        productSelected.total = totalProducto;
        cart.push(productSelected);
        console.log(cart);
    }
    applyPromotionsCart();

    console.log('EJERCICIO 1. Añadido producto al carrito:');
    console.log(cart);

}

// Exercise 2
function cleanCart() {
    cart.splice(0, cart.length);
    let bodyTable = document.getElementById('cart_list').innerHTML = "";
    let total_price = document.getElementById('total_price').textContent = 0;
    console.log('EJERCICIO 2. Carrito vacío: '+cart.toString());
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let total_price = document.getElementById('total_price');
    let totalCart;
    if(cart.length!==0){
        totalCart = 0;
    }
    
    for(let product of cart){
        if(product.subtotalWithDiscount === undefined){
            totalCart += product.total;
        }else{
            totalCart += product.subtotalWithDiscount;
        }
        
    }
    total_price.textContent = totalCart;
    console.log('EJERCICIO 3. Precio total del carrito: '+cart.toString());
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let subtotalWithDiscount;
    let totalWithoutDiscount;
    for(let product of cart){
        if(product.offer){
            if((product.id === 1 && product.quantity >= product.offer.number)||((product.id === 3 && product.quantity >= product.offer.number))){
                totalWithoutDiscount = product.quantity * product.price;
                subtotalWithDiscount = totalWithoutDiscount-(totalWithoutDiscount*(product.offer.percent / 100));
                product.subtotalWithDiscount = subtotalWithDiscount;
                console.log('EJERCICIO 4. Ejercicio de descuento: '+cart.toString());
            }
        }
    }

}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let bodyTable = document.getElementById('cart_list');
    let stringRowProducteCart = '<tr>';
    //let total_price = document.getElementById('total_price').textContent = 0;
    

    for(let product of cart){
        stringRowProducteCart += '<th scope="row">'+product.name+'</th>';
        stringRowProducteCart += '<td>'+product.price+'</td>';
        stringRowProducteCart += '<td>'+product.quantity+'</td>';
        if(product.subtotalWithDiscount === undefined){
            stringRowProducteCart += '<td>$'+product.total+'</td></tr>';
        }else{
            stringRowProducteCart += '<td>$<span style="text-decoration-line: line-through;">'+product.total+'</span> ($'+product.subtotalWithDiscount+')</td></tr>';
        }

        //He decidido resetear la lista de productos para que cuando 
        //estemos usandola se cree la lista de lo que nosotros cliquemos 
        //en tiempo de ejecución
        bodyTable.innerHTML = stringRowProducteCart;
        
    }
    calculateTotal();
    console.log(bodyTable.innerHTML);
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}