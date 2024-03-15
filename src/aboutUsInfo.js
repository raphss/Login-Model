function createAboutUs() {
  const aboutUsDiv = document.createElement('div');
  aboutUsDiv.classList.add('aboutUsDiv');

  const h1 = document.createElement('h1');
  h1.textContent = 'About Us';

  const p1 = document.createElement('p');

  p1.textContent =
    'Our company is dedicated to providing innovative ' +
    'and high-quality solutions to meet the needs of ' +
    'our clients. With a highly skilled and experienced ' +
    'team, we are focused on delivering exceptional ' +
    'services at every stage, from conception to ' +
    'implementation and ongoing support. We are ' +
    'committed to fostering strong and lasting ' +
    'relationships with our customers, partners, ' +
    'and communities, while continuing to drive ' +
    'growth and success in a dynamic and ' +
    'ever-evolving market.';

  const p2 = document.createElement('p');

  p2.textContent =
    'At our company, we continuously strive for excellence in everything we do. ' +
    'From our dedication to the highest standards of quality to our commitment to ' +
    'innovation and sustainability, we are dedicated to making a positive impact ' +
    'in all aspects of our business. With a customer-centric culture and a proactive ' +
    'approach to addressing challenges, we are poised to meet the needs of our clients ' +
    'and exceed expectations in an increasingly competitive landscape.';

  aboutUsDiv.appendChild(h1);
  aboutUsDiv.appendChild(p1);
  aboutUsDiv.appendChild(p2);

  return aboutUsDiv;
}

function aboutUsInfo() {
  const content = document.querySelector('.divContent');
  content.textContent = '';
  content.appendChild(createAboutUs());
}

export default aboutUsInfo;
