"use strict";
exports.__esModule = true;
var Worker_2 = require("./Model/Worker");
var officerList = [];
var worker1 = new Worker_2["default"]("Khai", 18, "Nam", "HaNoi", 2);
var worker3 = new Worker_2["default"]("Khai1", 18, "Nam", "HaNoi", 3);
officerList.push(worker1);
officerList.push(worker3);
var worker2 = officerList[0];
var worker4 = officerList[1];
console.log(worker2.getLevel());
console.log(worker4.getLevel());