const crosePriceFormat = (price, crose_rate) => {
  return new Intl.NumberFormat("tr-TR", {
    maximumSignificantDigits: 3,
  }).format(crose_rate === 0 ? price : price - (price * crose_rate) / 100);
};

const priceFormat = (price) => {
  return new Intl.NumberFormat("tr-TR", {
    maximumSignificantDigits: 3,
  }).format(price);
};

export { crosePriceFormat, priceFormat };
