import Officer from "./Officer";

class Engineer extends Officer{
    private major: string;
    
    constructor(name: string, age: number, gender: string, address:string, major:string){
        super(name, age, gender, address);
        this.major = major;
    }
    public getMajor(): string{
        return this.major;
    }
    public setMajor(major: string):void{
        this.major = major;
    }
}

export default Engineer;