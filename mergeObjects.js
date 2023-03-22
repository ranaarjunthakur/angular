const object1 = {
  name: 'Flavio'
}

const object2 = {
  age: 35
}

const object3 = {...object1, ...object2 }


/////////////////////////////////////////////////

const defaultOptions = {
  option1: 'value1',
  option2: 'value2'
};

const userOptions = {
  option1: 'overriddenValue1',
  option3: 'newValue3'
};

const mergedOptions = {
  ...defaultOptions,
  ...userOptions
};

console.log(mergedOptions);


//////////////////////////////////////////

const defaultOptions = {
  option1: 'value1',
  option2: 'value2'
};

const userOptions = {
  option1: 'overriddenValue1',
  option3: 'newValue3'
};

const mergedOptions = Object.assign({}, defaultOptions, userOptions);

console.log(mergedOptions);
