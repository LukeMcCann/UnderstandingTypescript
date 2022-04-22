interface Task{
    name: String; //property
    run(arg: any):void; //method
}

class MyTask implements Task{
    name: String;
    constructor(name: String) {
        this.name = name;
    }

    run(arg: any): void {
        console.log(`running: ${this.name}, arg: ${arg}`);
    }
}

let myTask: Task = new MyTask('someTask');
myTask.run("test");
