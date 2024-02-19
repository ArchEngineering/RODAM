console.log("Script loaded");
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

  const displayArea = document.getElementById('displayArea');
  const unitAreaPriceDisplay = document.getElementById('unitAreaPriceDisplay');
  const areaPriceDisplay = document.getElementById('areaPriceDisplay');
  const displayfacadeArea = document.getElementById('displayfacadeArea');
  const displayUnitFacadeAreaPrice = document.getElementById('displayUnitFacadeAreaPrice');
  const facadePriceCell = document.getElementById('facadePrice');
  const displaySum = document.getElementById('displaySum');

  const optionNumbers = {
    '1': 26,
    '2': 33,
    '3': 38,
    '4': 44
  };

  const unitAreaPrice = 10000;
  const unitFacadeAreaPrice = 250;

  let areaPrice = 0;  // Declare areaPrice in a broader scope
  let facadePrice = 0; // Declare facadePrice in a broader scope

  // Set initial Maling row values based on default facade option
  const defaultFacadeOption = facadeSelect.options[facadeSelect.selectedIndex].value;
  const malingRow = document.querySelectorAll('#facadePrice, #displayUnitFacadeAreaPrice, #displayfacadeArea');

  if (defaultFacadeOption === '1') { // Check if "Natur træ" is default
    // Set Maling row to 0
    malingRow.forEach(cell => cell.textContent = 0);
    calculateAndSetAreaPrice(0); // Calculate and set values for the row above
  } else {
    // Set initial values based on Sort
    const initialSelectedOption = sizeSelect.options[sizeSelect.selectedIndex].value;
    const initialNumber = optionNumbers[initialSelectedOption] || 0;
    displayArea.textContent = initialNumber;
    unitAreaPriceDisplay.textContent = unitAreaPrice;
    calculateAndSetAreaPrice(initialNumber);
  }

  // Billeder
  updateImageSource(1, 1);
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

  // #002 Areal
  const initialSelectedOption = sizeSelect.options[sizeSelect.selectedIndex].value;
  const initialNumber = optionNumbers[initialSelectedOption] || 0;
  displayArea.textContent = initialNumber;

  function calculateAndSetAreaPrice(selectedNumber) {
    areaPrice = unitAreaPrice * selectedNumber;
    areaPriceDisplay.textContent = areaPrice;

    const displayfacadeAreaValue = selectedNumber * 5;
    displayfacadeArea.textContent = displayfacadeAreaValue;

    facadePrice = displayfacadeAreaValue * displayUnitFacadeAreaPrice.textContent;
    facadePriceCell.textContent = facadePrice;

    calculateAndDisplaySum();
  }

  calculateAndSetAreaPrice(initialNumber);

  sizeSelect.addEventListener('change', function () {
    updateImageSource(parseInt(sizeSelect.value), parseInt(facadeSelect.value));

    // Dette er også til farven
    const selectedIndex = sizeSelect.selectedIndex;
    const selectedOption = sizeSelect.options[selectedIndex].value;
    const selectedNumber = optionNumbers[selectedOption] || 0;

    displayArea.textContent = selectedNumber;

    calculateAndSetAreaPrice(selectedNumber);
  });

  unitAreaPriceDisplay.textContent = unitAreaPrice;

  // #003 Farve
  displayfacadeArea.textContent = initialNumber * 5;
  displayUnitFacadeAreaPrice.textContent = unitFacadeAreaPrice;

  const facadePriceValue = displayfacadeArea.textContent * displayUnitFacadeAreaPrice.textContent;
  facadePriceCell.textContent = facadePriceValue;

  facadeSelect.addEventListener('change', function () {
    const selectedFacadeOption = facadeSelect.options[facadeSelect.selectedIndex].value;

    if (selectedFacadeOption === '1') { // Check if "Natur træ" is selected
      // Set Maling row to 0
      malingRow.forEach(cell => cell.textContent = 0);
      calculateAndSetAreaPrice(0); // Calculate and set values for the row above
    } else {

      const selectedNumber = optionNumbers[sizeSelect.value] || 0;
      calculateAndSetAreaPrice(selectedNumber);
    }
  });

  function calculateAndDisplaySum() {
    const sum = totalPrice + areaPrice + facadePrice;
    displaySum.textContent = sum;
  }


});
