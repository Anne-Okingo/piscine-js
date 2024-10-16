function filterValues(obj, callback) {
    const filteredEntries = Object.entries(obj).filter(([key, value]) => callback(value));
    return Object.fromEntries(filteredEntries);
  }
  
  function mapValues(obj, callback) {
    const mappedEntries = Object.entries(obj).map(([key, value]) => [key, callback(value)]);
    return Object.fromEntries(mappedEntries);
  }
  
  function reduceValues(obj, callback, initialValue) {
    return Object.values(obj).reduce(callback, initialValue);
  }
  
  const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };
  
  console.log(filterValues(nutrients, (nutrient) => nutrient <= 12));
  // Output: { carbohydrates: 12, fat: 5 }
  
  console.log(mapValues(nutrients, (v) => v + 1));
  // Output: { carbohydrates: 13, protein: 21, fat: 6 }
  
  console.log(reduceValues(nutrients, (acc, cr) => acc + cr, 0));
  // Output: 37
  