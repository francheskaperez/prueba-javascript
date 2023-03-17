const ul = document.querySelector(".products");

async function apicall() {
  try {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const json = await res.json();

    console.log(json);
    render(json);
  } catch (error) {
    console.error(error.message);
  }
}

function clickHandler(e) {
  e.preventDefault();
  const product_like = e.target.closest(".product__like");
  if (product_like) {
    pintar(e);
  }
}

function pintar(e) {
  const product_like = e.target.closest(".product__like");
  const icono = product_like.firstElementChild;

  if (icono.className === "icon-heart-empty") {
    icono.className = "icon-heart";
  } else {
    icono.className = "icon-heart-empty";
  }
}

ul.addEventListener("click", clickHandler);

function render(productos) {
  let html = "";
  for (const producto of productos) {
    html += `<li class="product">
        <div class="product__image-container">
          <img src="${producto.image}" alt="${producto.title}" class="product__image" />
        </div>
        <div class="product__content">
          <header class="product__header">
            <h6 class="product__category">${producto.category}</h6>
            <h2 class="product__title">${producto.title}</h2>
            <p class="product__price">${producto.price}</p>
            <p class="product__description">${producto.description}</p>
          </header>
          <footer class="product__footer">
            <a href="#" data-id="${producto.id}" class="product__like"><i class="icon-heart-empty"></i></a>
            <a href="#" class="product__add-to-cart">Add to Cart</a>
          </footer>
        </div>
      </li>`;
  }

  ul.innerHTML = html;
}

apicall();
