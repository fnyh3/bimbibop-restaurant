function showMenu() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}

let cart = [];
let totalPrice = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    totalPrice += itemPrice;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price}`;
        cartItems.appendChild(li);
    });

    document.getElementById('total-price').textContent = `Total: Rp ${totalPrice}`;
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Keranjang Anda kosong! Silakan tambahkan item sebelum memesan.");
        return;
    }
    document.getElementById('menu').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('order-success').style.display = 'block'
}
function resetOrder() {
    // Mengosongkan keranjang dan total harga
    cart = [];
    totalPrice = 0;
    updateCart();
    // Menampilkan kembali menu dan menyembunyikan pesan sukses
    document.getElementById('order-success').style.display = 'none';
    document.getElementById('home').style.display = 'none'; // Sembunyikan halaman awal jika ada
    document.getElementById('menu').style.display = 'block'; // Tampilkan menu
}