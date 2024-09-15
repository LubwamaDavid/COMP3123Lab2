const capitalizeFirstLetter = ([first, ...rest]) => first.toUpperCase() + rest.join('');
console.log(capitalizeFirstLetter('hello')); 
