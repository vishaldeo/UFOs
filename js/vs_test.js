console.log("Vishal S")
 

// four variables are created and assigned in a single go,
// separated by commas
const myObj = {},
      str = 'myString',
      rand = Math.random(),
      anotherObj = {};

// Now, creating additional properties.
myObj.type              = 'Dot syntax for a key named type';
myObj['date created']   = 'This key has a space';
myObj[str]              = 'This key is in variable str';
myObj[rand]             = 'A random number is the key here';
myObj[anotherObj]       = 'This key is object anotherObj';
myObj['']               = 'This key is an empty string';

console.log(myObj);
console.log(myObj.myString);


// str = 'myString';
myObj[str] = 'This key is in variable str';

console.log(myObj.str); //[Log] undefined

console.log(myObj[str]); //[Log] This key is in variable str
console.log(myObj.myString); //[Log] This key is in variable str

const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

function showProps(obj, objName) {
    let result = '';
    for (const i in obj) {
      // obj.hasOwn is used to exclude properties from the object's prototype chain and only show "own properties"
      if (Object.hasOwn(obj, i)) {
        result += `${objName}.${i} = ${obj[i]}\n`;
      }
    }
    console.log(result);
  }

  showProps(myCar ,'myCar')

  function listAllProperties(myObj) {
    let objectToInspect = myObj;
    let result = [];
  
    while(objectToInspect !== null) {
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));
      objectToInspect = Object.getPrototypeOf(objectToInspect)
    }
  
    // return result;
    console.log(result);

  }  

  listAllProperties(myCar) 