import Officer from "./Officer";

class Employee extends Officer{
    private work: string;

    constructor(name: string, age: number, gender: string, address:string, work:string){
        super(name, age, gender, address);
        this.work = work;
    }
    public getWork(): string{
        return this.work;
    }
    public setWork(work: string):void{
        this.work = work;
    }
}

export default Employee;