const colors = ['red', 'green', 'blue'];

const capitalizeFirstLetter = ([first, ...rest]) => first.toUpperCase() + rest.join('');

const capitalizedColors = colors.map(color => capitalizeFirstLetter(color));

console.log(capitalizedColors); 
