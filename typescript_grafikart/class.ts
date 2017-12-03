namespace Typescript_Grafikart {

    // Variable only accessible form the namespace
    // let demo;

    export class Demo {

        // public || private || protected
        private _element;
        private options: DemoOption;

        constructor(options: DemoOption) {
            this.options = options;
        }

        public public_demo() {
            console.log("In a public method.");
        }

        // A static method is a method directly in the class level
        // static static_demo() {
        //     console.log("In a static method.");
        // }

        // Define the accessors
        set element(value: string) { this._element = value; }
        get element() : string { return this._element; }
    }

}

// It's not an interface as we could know with Java or PHP
// It's not appearing during the compilation
interface DemoOption {

    auto_play: boolean
    x?: number
    success: (data: string) => void

}



// class Demo2 extends Demo {
//
//     public test() {
//         console.log("In test function.");
//     }
// }

// Initialize a new Demo object
// let d = new Demo();
// let d2 = new Demo2();
// let d = new Demo({
//     auto_play: true,
//     x: 2,
//     success: function (data) {
//
//     }
// });
let d = new Typescript_Grafikart.Demo({
    auto_play: true,
    x: 2,
    success: function (data) {
        console.log(data);
    }
});

// Call a specific and public function of the Demo class
// d.public_demo();

// Set and get an element using accessors
d.element = 'Hello';
console.log(d.element);
// console.log(d2.test());

// Access to a static function
// console.log(Demo.static_demo());

// Call to an external component
// import My_component from './component';
// My_component....