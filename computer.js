/*
computer
    -inputs data through the Keyboard
    -stores data to in-memory
    -processes data in the CPU
    -retrieve data from in-memory
    -displaying information on a monitor
    -handles errors and exceptions
*/
/*
SRP: A class should have only one reaseon for change or one task to serve.
*/
var Keyboard = /** @class */ (function () {
    function Keyboard() {
    }
    Keyboard.prototype.inputDatafromKeyboard = function (data) {
        console.log("input from keyboard: .... ");
    };
    return Keyboard;
}());
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    Mouse.prototype.inputDatafromMouse = function (data) {
        console.log("input from Mouse: .... ");
    };
    return Mouse;
}());
var Harddrive = /** @class */ (function () {
    function Harddrive() {
        // data
        this.memory = [];
    }
    Harddrive.prototype.storeDataToInMemory = function (data) {
        this.memory.push(data);
        console.log(data);
    };
    return Harddrive;
}());
var Flashdrive = /** @class */ (function () {
    function Flashdrive() {
        // data
        this.memory = [];
    }
    Flashdrive.prototype.storeDataToInMemory = function (data) {
        this.memory.push(data);
        console.log(data);
    };
    return Flashdrive;
}());
/*
High-cohesion: how focused the class is?
*/
var Computer = /** @class */ (function () {
    function Computer() {
    }
    // methods
    Computer.prototype.input = function () {
        var inputMethod = new Keyboard();
        inputMethod.inputDatafromKeyboard("");
        var inputMethod2 = new Mouse();
        inputMethod2.inputDatafromMouse("");
    };
    Computer.prototype.storeData = function () {
        var storeMethod = new Harddrive();
        storeMethod.storeDataToInMemory(".........");
        console.log("stored data on the Harddrive");
        var storeMethod2 = new Flashdrive();
        storeMethod2.storeDataToInMemory(".........");
        console.log("stored data on the Flashdrive");
    };
    Computer.prototype.retrieveDataFromInMemory = function (data) {
        //    return this.memory
    };
    Computer.prototype.processData = function (data) {
        console.log("Process..." + data);
    };
    Computer.prototype.displayDataonMonitor = function (data) {
        console.log("Displaying:  " + data);
    };
    Computer.prototype.handlingErrors = function (error) {
        console.log("Error:  " + error);
    };
    return Computer;
}());
var computer = new Computer();
computer.input();
computer.storeData();
console.log(computer.retrieveDataFromInMemory(""));
computer.processData("balens phillip");
computer.handlingErrors("undefined property");
computer.displayDataonMonitor("I am displayed");
