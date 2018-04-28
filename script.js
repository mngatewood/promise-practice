const testNum = (num) => {
  new Promise((resolve, reject) => {
    if (typeof num === 'number') {
      setTimeout(() => {
        resolve(num); 
      }, 1000);
    } else {
      setTimeout(() => {
        reject(num); 
      }, 1000);
    }
  })
    .then((num) => {
      if (num === 10) {
        console.log('10 is equal to 10');
      } else if (num > 10) {
        console.log(`${num} is greater than to 10, success!`);
      } else {
        console.log(`${num} is less 10, error!`)
      }
    })
    .catch((error) => {
      console.log(`${num} is not a number!`)

    });
}

testNum(12);

const makeAllCaps = (array) => {
  new Promise((resolve, reject) => {
    const isString = (element) => {
      return typeof element === 'string';
    };

    if (array.every(isString)) {
      const upperCaseArray = array.map(element => {
        return element.toUpperCase();
      });

      setTimeout(() => {
        resolve(upperCaseArray); 
      }, 1000);
    } else {
      setTimeout(() => {
        reject(array); 
      }, 1000);
    }
  })
    .then(upperCaseArray => console.log(upperCaseArray))
    .catch(error => console.log(`No, the array you passed in contained an element that was not a string!`));
};

makeAllCaps(['wowow', 'pants', 'bird']);

const sortWords = (array) => {
  new Promise((resolve, reject) => {
    const isString = (element) => {
      return typeof element === 'string';
    };

    if (array.every(isString)) {
      const sortedArray = array.sort((a, b) => {
        return b < a;
      });

      setTimeout(() => {
        resolve(sortedArray); 
      }, 1000);
    } else {
      setTimeout(() => {
        reject(array); 
      }, 1000);
    }
  })
    .then(sortedArray => console.log(sortedArray))
    .catch(error => console.log(`No, the array you passed in contained an element that was not a string!`));
};

sortWords(['wowow', 'pants', 'bird']);