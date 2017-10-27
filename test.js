'use strict';

const user = {
    firstName: 'Johnny',
    lastName: 'Hsu',
    cities: ['Tapei', 'New York', 'San Francisco'],
    // printName() {
    //     return this.cities.map((city) =>  {
    //         return 'Hello! ' + this.firstName + ' ' + this.lastName + '. He has lived in ' + city + '.';
    //     });
    //
    // }
    printName() {
        let results = [];
        for (let city of this.cities) {
            let result = 'Hello! ' + this.firstName + ' ' + this.lastName + '. He has lived in ' + city + '.';
            results.push(result);
        }
        return results;
    }
};

//  const main = () => {
//      console.log(user.printName());
//  };
// main();
