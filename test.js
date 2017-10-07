'use strict';
// scopeTest( );

const a = { a: 1,
            hello() {
                let self = this;
                console.log(self);
                function world() {
                    console.log(self);
                }
                world();
            }


        };


a.hello();
// b();
// // call the function defined above
