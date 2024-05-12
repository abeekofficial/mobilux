// Function to parse price strings with different formats


function parsePrice(price: string): number {
  const cleanedPrice = price.replace(/[^0-9.,]/g, '');

  const standardizedPrice = cleanedPrice.replace(',', '.');

  return parseFloat(standardizedPrice);
}

export default parsePrice