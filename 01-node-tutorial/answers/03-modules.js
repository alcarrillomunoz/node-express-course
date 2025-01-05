const names = require("./04-names.js");
const greeting = require("./05-utils.js");
const data = require("./06-alternative-flavor.js");
require("./07-mind-grenade.js");

greeting(names.arnold); 
greeting(names.sam); 
greeting("Helga");
console.log(data); 
greeting(data.onePerson.name);