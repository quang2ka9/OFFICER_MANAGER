import OfficerManager from "../controllers/OfficerManager";
import Officer from "../model/Officer";

const readlineSync = require('readline-sync');

class OfficerView {
    private officerManager: OfficerManager = new OfficerManager();
    private menu: string = `
        1. Add Officer
        2. Find Officer by name
        3. Show list Officer
        4. Exit
    `
    public select() {
        let isLoop = true;
        while (isLoop) {
            console.log(this.menu);
            let choice;
            do {
                choice = +readlineSync.question("Enter your choice: ");
                if (choice < 1 || choice > 4) {
                    console.log("Wrong choice. Please try again");
                }
            } while (choice < 1 || choice > 4);
            switch (choice) {
                case 1: {
                    let officer: Officer = new Officer("Khai",18,"Nam", "Ha Noi");
                    this.officerManager.addOfficer(officer)
                    break;
                }
                case 2: {
                    let name = readlineSync.question("Who you want to find?");
                    console.table(this.officerManager.findByName(name));
                    break;
                }
                case 3: {
                    this.officerManager.showListOfficer();
                    break;
                }
                case 4: {
                    isLoop = false;
                    break;
                }
            }
        }

    }
}
export default OfficerView;