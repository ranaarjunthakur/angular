///////We can stop and resume this type of functions using yield keyword and denote by (*)//////////

function* getCarBrands() {
  const americanCarBrands = ['Ford', 'Chevrolet', 'Tesla'];
  const italianCarBrands = ['Fiat', 'Lancia', 'Alfa Romeo'];
  const germanCarBrands = ['Volkswagen', 'BMW', 'Mercedes'];
  yield 1
  return [...americanCarBrands, ...italianCarBrands, ...germanCarBrands];
  yield 2
}


let res = getCarBrands()
console.log(res.next())  => { value: 1, done: false }
console.log(res.next()) 
console.log(res.next())   => { value: undefined, done: true }


///output//
{ value: 1, done: false }
{
  value: [
    'Ford',       'Chevrolet',
    'Tesla',      'Fiat',
    'Lancia',     'Alfa Romeo',
    'Volkswagen', 'BMW',
    'Mercedes'
  ],
  done: true
}

{ value: undefined, done: true }


//////////////////////////////////////////////////////////////////////////


 function *anotherGenerator(name) {
        yield `From Another Generator, ${name}`
    }

    function *myGenerator(name) {
        yield `Hi ${name}`;
        yield* anotherGenerator(name)
        yield 'Bye!'
    }

    let gen = myGenerator('shiv')
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
