let number = 42; //let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.
var obj = { key: 'value' }; //var variables are globally scoped or function scoped based on context and can be updated and re-declared.
const pi = 3.14159; //const variables are block-scoped, much like variables defined using the let keyword. The value of a const variable cannot be changed once it is defined.

// We can access all these variables here.
console.log('number:', number);
console.log('obj:', obj);
console.log('pi:', pi);