

is.num = value => typeof value === 'number' && !isNaN(value); // Checks if value is a number and not NaN
is.nan = value => Number.isNaN(value); // Checks if value is NaN
is.str = value => typeof value === 'string'; // Checks if value is a string
is.bool = value => typeof value === 'boolean'; // Checks if value is a boolean
is.undef = value => typeof value === 'undefined'; // Checks if value is undefined
is.def = value => typeof value !== 'undefined'; // Checks if value is defined
is.arr = value => Array.isArray(value); // Checks if value is an array
is.obj = value => value !== null && typeof value === 'object' && !Array.isArray(value); // Checks if value is a simple object or null
is.fun = value => typeof value === 'function'; // Checks if value is a function
is.truthy = value => !!value; // Checks if value is truthy
is.falsy = value => !value; // Checks if value is falsy

