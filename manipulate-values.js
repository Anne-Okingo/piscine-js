function filterValues(obj, callback) {
    const filteredEntries = Object.entries(obj).filter(([key, value]) => callback(value));
    return Object.fromEntries(filteredEntries);
  }
  
  function mapValues(obj, callback) {
    const mappedEntries = Object.entries(obj).map(([key, value]) => [key, callback(value)]);
    return Object.fromEntries(mappedEntries);
  }
  
  function reduceValues(obj, callback, initialValue = 0) {
    const values = Object.values(obj);
    return values.reduce(callback, initialValue);
  }
  
  // Example Usage:
  
  const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };
  
  console.log(filterValues(nutrients, (nutrient) => nutrient <= 12)); // Output: { carbohydrates: 12, fat: 5 }
  console.log(mapValues(nutrients, (v) => v + 1)); // Output: { carbohydrates: 13, protein: 21, fat: 6 }
  console.log(reduceValues(nutrients, (acc, cr) => acc + cr, 0)); // Output: 37
  
  // Example groceries cart with expected sum of 572
  const groceriesCart = {
    rice: 200, // Example values
    beans: 100,
    sugar: 150,
    salt: 50,
    apple: 30,
    banana: 42
  };
  
  // Ensure this sums to 572
  console.log(reduceValues(groceriesCart, (acc, cr) => acc + cr)); // Output: 572 (if values add up correctly)
  
  // Additional test case if needed
  const additionalCart = {
    carbohydrates: 200,
    protein: 100,
    fat: 50,
    vitamins: 222
  };
  
  console.log(reduceValues(additionalCart, (acc, cr) => acc + cr)); // Output: 572 (for this cart)
  