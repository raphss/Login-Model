function createOurProducts() {
  const ourProductsDiv = document.createElement('div');
  ourProductsDiv.classList.add('ourProductsDiv');

  const h1 = document.createElement('h1');
  h1.textContent = 'Our Products';

  const p1 = document.createElement('p');
  p1.textContent =
    'Introducing our latest line of innovative products, meticulously crafted to elevate ' +
    'your everyday experiences. From sleek designs to cutting-edge technology, ' +
    'our products are engineered to exceed expectations and enhance your lifestyle. ' +
    'Discover the perfect blend of style and functionality with our premium collection.';

  const p2 = document.createElement('p');
  p2.textContent =
    'Explore our diverse range of solutions designed to meet the unique needs of modern living. ' +
    'Whether you’re looking to streamline your workflow or elevate your entertainment experience, ' +
    'our products are tailored to deliver exceptional performance and versatility. ' +
    'Discover how our innovative technology can transform your home and simplify your life.';

  ourProductsDiv.appendChild(h1);
  ourProductsDiv.appendChild(p1);
  ourProductsDiv.appendChild(p2);

  return ourProductsDiv;
}

function ourProductsInfo() {
  const content = document.querySelector('.divContent');
  content.textContent = '';
  content.appendChild(createOurProducts());
}

export default ourProductsInfo;
