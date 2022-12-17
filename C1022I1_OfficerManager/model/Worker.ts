import Officer from "./Officer";

class Worker_1 extends Officer{
    private level: number;
    
    constructor(name: string, age: number, gender: string, address:string, level:number){
        super(name, age, gender, address);
        this.level = level;
    }
    public getLevel():number{
        return this.level;
    }
    public setLevel(level: number):void{
        this.level = level;
    }
}

export default Worker_1;