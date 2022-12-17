import Officer from "../model/Officer";

class OfficerManager {
    private officerList: Officer[] = [];

    constructor() {
        let officer: Officer = new Officer("KhaiNgo", 19, "Nam", "Ha Noi");
        this.officerList.push(officer);
    }

    public addOfficer(officer: Officer): void {
        this.officerList.push(officer);
    }
    public findByName(name: string): Officer[] {
        let result: Officer[] = [];
        // for(let i = 0; i < this.officerList.length; i++){
        //     if(this.officerList[i].getName().includes(name)){
        //         result.push(this.officerList[i]);
        //     }
        // }
        this.officerList.forEach((item, index) => {
            if (item.getName().includes(name)) {
                result.push(item);
            }
        })
        return result;
    }
    public showListOfficer() {
        console.table(this.officerList);
    }
}
export default OfficerManager;