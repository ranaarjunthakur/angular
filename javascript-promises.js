function findDataById(id) {
  return new Promise(function (resolve, reject) {
    let sampleData = [1, 2, 3, 4, 5];
    if (sampleData[id]) {
      resolve(sampleData[id]);
    } else {
      reject(new Error('Invalid id'));
    }
  });
}
findDataById(4)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (err) {
    console.error(err);
  })
  .finally(function () {
    console.log('Promise completed');
  });
  
 o/p => 5 Promise completed
 
 /////////////////////////////////////////////////////////
 
 const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);

///////////////////////////////////////////////////////

function dieToss() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log('1');
var promise = new RSVP.Promise(function(fulfill, reject) {
  var n = dieToss();
  if (n === 6) {
    fulfill(n);
  } else {
    reject(n);
  }
  console.log('2');
});

promise.then(function(toss) {
  console.log('Yay, threw a ' + toss + '.');  
}, function(toss) {
  console.log('Oh, noes, threw a ' + toss + '.');  
});
console.log('3');
