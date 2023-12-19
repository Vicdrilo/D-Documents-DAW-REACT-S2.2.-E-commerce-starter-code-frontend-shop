// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
//import products from './products.json' assert{type: 'json'};


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

    console.log(cart);

}

// Exercise 2
function cleanCart() {
    cart.splice(0, cart.length);
    document.getElementById('cart_list').innerHTML = "";
    document.getElementById('total_price').textContent = 0;
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let total_price = document.getElementById('total_price');
    let totalCart;
    totalCart = 0;
    /*
    if(cart.length!==0){
        totalCart = 0;
    }
    */
    for(let product of cart){
        if(product.subtotalWithDiscount === undefined){
            totalCart += product.total;
        }else{
            totalCart += product.subtotalWithDiscount;
        }
        
    }
    total_price.textContent = totalCart;
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
            }
        }
    }

}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let bodyTable = document.getElementById('cart_list');
    let stringRowProducteCart = '';
    

    for(let product of cart){
        stringRowProducteCart += '<tr><th scope="row">'+product.name+'</th>';
        stringRowProducteCart += '<td>'+product.price+'</td>';
        stringRowProducteCart += '<td>'+product.quantity+'</td>';
        if(product.subtotalWithDiscount === undefined){
            stringRowProducteCart += '<td>$'+product.total+'</td>';
        }else{
            stringRowProducteCart += '<td>$<span style="text-decoration-line: line-through;">'+product.total+'</span> ($'+product.subtotalWithDiscount+')</td>';
        }
        stringRowProducteCart += '<td><button type="button" onclick="removeFromCart('+product.id+')" class="btn btn-outline-dark"><i class="fa-solid fa-trash-can"></i></button></td></tr>'

        console.log(stringRowProducteCart);        
    }
    bodyTable.innerHTML = stringRowProducteCart;

    calculateTotal();
    console.log(bodyTable.innerHTML);
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    for(let product of cart){
        if(product.id === id){
            product.quantity--; //restamos una unidad

            if(product.subtotalWithDiscount === undefined){
                product.total = product.quantity * product.price;
            }else{
                if(product.quantity >= product.offer.number){
                    product.total = product.quantity * product.price;
                    product.subtotalWithDiscount = product.total - (product.total*(product.offer.percent/100).toFixed(2));
                }else{
                    product.subtotalWithDiscount = undefined;
                    product.total = product.quantity * product.price;
                }
            }
            
            console.log('Indice del producto dentro de cart: '+cart.indexOf(product));
            if(product.quantity === 0){ //si llega a valor 0 lo eliminamos del array cart
                cart.splice(cart.indexOf(product),1);
            }
            

            printCart(); //al hacer cambios en la lista de productos se debe hacer un nuevo printCart()
        }
    }
}

function open_modal() {
    printCart();
}