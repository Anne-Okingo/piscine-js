function filterValues(obj, callback) {
    const filteredEntries = Object.entries(obj).filter(([key, value]) => callback(value));
    return Object.fromEntries(filteredEntries);
  }
  
  function mapValues(obj, callback) {
    const mappedEntries = Object.entries(obj).map(([key, value]) => [key, callback(value)]);
    return Object.fromEntries(mappedEntries);
  }
  
  function reduceValues(obj, callback, initialValue) {
    const values = Object.values(obj);
    if (values.length === 0) return initialValue; // Return initialValue if no values present
    return values.reduce(callback, initialValue);
  }
  
  // Example Usage:
  
  const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };
  
  console.log(filterValues(nutrients, (nutrient) => nutrient <= 12));
  // Output: { carbohydrates: 12, fat: 5 }
  
  console.log(mapValues(nutrients, (v) => v + 1));
  // Output: { carbohydrates: 13, protein: 21, fat: 6 }
  
  console.log(reduceValues(nutrients, (acc, cr) => acc + cr, 0));
  // Output: 37
  
  const groceriesCart = {
    apple: 52,
    banana: 89,
    orange: 47,
    grapes: 69,
    watermelon: 30,
    lemon: 29,
    fat: 5,
    carbohydrates: 12
  };
  
  console.log(reduceValues(groceriesCart, (acc, cr) => acc + cr, 0)); // Ensure you use an appropriate initial value
  