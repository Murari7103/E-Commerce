const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 499,
    image: "/photo/tshirt.jpg"
  },
  {
    id: 2,
    name: "Headphones",
    price: 999,
    image: "/photo/headphone.jpg"
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 1999,
    name: "SmartWatch",
    image: "/photo/Smartwatch.jpeg"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 11999,
    name: "Refrigator",
    image: "/photo/Fridge.jpg"
  },
  {
    id: 5,
    name: "Table Fan",
    price: 999,
    name: "Table Fan",
    image: "/photo/Fan.jpg"
  },
  {
    id: 6,
    name: "Mobile Phone",
    price: "mat Dekho bhai",
    name: "Mobile Phone",
    image: "/photo/phone.jpg"
  }
  ,
  {
  id:7,
    name: "Shoes",
    price: "599",
    name: "Shoes",
    image: "/photo/Shoes.jpg"
  },
  {
  id:8,
    name: "Laptop",
    price: "55599",
    name: "Laptop",
    image: "/photo/Laptop.jpg"
  },
  {
  id:9,
    name: "Toys",
    price: "299",
    name: "Toy",
    image: "/photo/Toys.jpg"
  },
  {
  id:10,
    name: "Camera",
    price: "15999",
    name: "Camera",
    image: "/photo/Camera.jpeg"
  },
  {
  id:11,
    name: "Charger",
    price: "1599",
    name: "Mobile charger",
    image: "/photo/Charger.jpg"
  },
  {
  id:7,
    name: "Shoes",
    price: "599",
    name: "Mobile Phone",
    image: "/photo/Shoes.jpg"
  }
];

let cart = [];

function displayProducts() {
  const productGrid = document.getElementById('productGrid');
  products.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product');
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productGrid.appendChild(div);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const totalPrice = document.getElementById('totalPrice');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  totalPrice.textContent = total;
}

// Initial render
displayProducts();

// Modal functionality
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loginModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

