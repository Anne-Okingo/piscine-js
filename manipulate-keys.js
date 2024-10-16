function filterKeys(obj, callback) {
    const filteredEntries = Object.entries(obj).filter(([key]) => callback(key));
    return Object.fromEntries(filteredEntries);
  }
  
  function mapKeys(obj, callback) {
    const mappedEntries = Object.entries(obj).map(([key, value]) => [callback(key), value]);
    return Object.fromEntries(mappedEntries);
  }
  
  function reduceKeys(obj, callback, initialValue = '') {
    const keys = Object.keys(obj);
    return keys.reduce(callback, initialValue);
  }
  

  
  const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };
  
  console.log(filterKeys(nutrients, (key) => /protein/.test(key)));

  console.log(mapKeys(nutrients, (k) => `-${k}`));
  
  console.log(reduceKeys(nutrients, (acc, cr) => acc.concat(', ', cr)));
  
  const nutritionDB = {
    tomato:  { calories: 18, protein: 0.9, carbs: 3.9, sugar: 2.6, fiber: 1.2, fat: 0.2 },
    vinegar: { calories: 20, protein: 0.04, carbs: 0.6, sugar: 0.4, fiber: 0, fat: 0 },
    oil:     { calories: 48, protein: 0, carbs: 0, sugar: 123, fiber: 0, fat: 151 },
    onion:   { calories: 0, protein: 1, carbs: 9, sugar: 0, fiber: 0, fat: 0 },
    garlic:  { calories: 149, protein: 6.4, carbs: 33, sugar: 1, fiber: 2.1, fat: 0.5 },
    paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1, fiber: 0, fat: 12.89 },
    sugar:   { calories: 387, protein: 0, carbs: 100, sugar: 100, fiber: 0, fat: 0 },
    orange:  { calories: 49, protein: 0.9, carbs: 13, sugar: 12, fiber: 0.2, fat: 0.1 },
  };
  
  console.log(filterKeys(nutritionDB, (key) => /o/.test(key)));

  console.log(mapKeys(nutritionDB, (k) => `food_${k}`));
  
  console.log(reduceKeys(nutritionDB, (acc, cr) => acc.concat(', ', cr)));
