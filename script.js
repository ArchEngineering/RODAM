// Konstanter
document.addEventListener('DOMContentLoaded', function () {
  const sizeSelect = document.getElementById('size');
  const facadeSelect = document.getElementById('facade');
  const combinationImage = document.getElementById('combinationImage');
  const price1 = 40000;
  const price2 = 40000;
  const price3 = 20000;
  const price1Cell = document.getElementById('price1');
  const price2Cell = document.getElementById('price2');
  const price3Cell = document.getElementById('price3');
  const totalPriceCell = document.getElementById('totalPrice');



// Billeder
  updateImageSource(1, 1);

  sizeSelect.addEventListener('change', function () {
    updateImageSource(parseInt(sizeSelect.value), parseInt(facadeSelect.value));
  });

  facadeSelect.addEventListener('change', function () {
    updateImageSource(parseInt(sizeSelect.value), parseInt(facadeSelect.value));
  });

  function updateImageSource(size, facade) {
    const combinationKey = size + '_' + facade;
    const imageSources = {
      '1_1': 'https://rodam-home.dk/wp-content/uploads/2022/01/design-dit-eget-anneks-26-m2.jpg',
      '2_1': 'https://rodam-home.dk/wp-content/uploads/2022/01/anneks-30-40-m2-RODAM-33m2.jpg',
      '3_1': 'https://rodam-home.dk/wp-content/uploads/2022/01/Anneks-rodam-home-03-38-m2-ude.jpg',
      '4_1': 'https://rodam-home.dk/wp-content/uploads/2022/01/design-dit-eget-anneks-44-m2.jpg',
      '1_2': 'https://rodam-home.dk/wp-content/uploads/2022/01/anneks-20-30-m2-RODAM-26m2-sort-trae.jpg',
      '2_2': 'https://rodam-home.dk/wp-content/uploads/2022/01/anneks-30-40-m2-RODAM-33m2-sort.jpg',
      '3_2': 'https://rodam-home.dk/wp-content/uploads/2022/01/Anneks-rodam-home-03-38-m2-sort.jpg',
      '4_2': 'https://rodam-home.dk/wp-content/uploads/2022/01/anneks-40-50-m2-RODAM-44-m2-sort.jpg'
    };

    const currentImageSource = imageSources[combinationKey] || 'https://rodam-home.dk/wp-content/uploads/2022/01/design-dit-eget-anneks-26-m2.jpg';
    combinationImage.src = currentImageSource;
  }



// #001 Faste omkostninger 
    price1Cell.textContent = price1;
  price2Cell.textContent = price2;
  price3Cell.textContent = price3;

  const totalPrice = price1 + price2 + price3;
  totalPriceCell.textContent = totalPrice;
});
