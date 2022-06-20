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
     In otherwords there should be seperation of concerns within the entire 
     program in order to be able to achieve loose coupling and encourage
     more cohesion.
     This will involve dependent and independent classes which relate 
     through composition.
*/
class Keyboard{
    inputDatafromKeyboard(data:any){
        console.log("input from keyboard: .... " );
    }
}

class Mouse{
    inputDatafromMouse(data:any){
        console.log("input from Mouse: .... " );
    }
}

class Harddrive{
    // data
    memory:Array<any> = []
    storeDataToInMemory(data:any){
        this.memory.push(data)
        console.log(data)
    }
}

class Flashdrive{
    // data
    memory:Array<any> = []
    storeDataToInMemory(data:any){
        this.memory.push(data)
        console.log(data)
    }
}

class Monitor{
    // data
    memory:Array<any> = []
    retrieveData(data:any){
        this.memory.pop()
        console.log(data)
    }
}

/*
High-cohesion: how focused the class is?
*/

class Computer {
    // methods
    input(){
     let inputMethod = new Keyboard();
     inputMethod.inputDatafromKeyboard("")
     let inputMethod2 = new Mouse()
     inputMethod2.inputDatafromMouse("")
    }

    storeData(){
        let storeMethod = new Harddrive();
        storeMethod.storeDataToInMemory("")
        console.log("stored data on the Harddrive")
        let storeMethod2 = new Flashdrive();
        storeMethod2.storeDataToInMemory("")
        console.log("stored data on the Flashdrive")
    }

    retrieveData(){
        let retrieveMethod = new Monitor();
        retrieveMethod.retrieveData("")
        console.log("data has been retrieved on the Monitor")

    }

    processData(data:any){
        console.log("Process..." + data)
    }
    
    displayDataonMonitor(data:any){
        console.log("Displaying:  " + data)
    }

    handlingErrors(error:any){
        console.log("Error:  " + error)
    }
}
let computer = new Computer()
computer.input()
computer.storeData();
console.log(computer.retrieveData());
computer.processData("balens phillip");
computer.handlingErrors("undefined property");
computer.displayDataonMonitor("I am displayed");