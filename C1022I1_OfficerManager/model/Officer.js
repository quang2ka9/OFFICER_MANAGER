"use strict";
exports.__esModule = true;
var Officer = /** @class */ (function () {
    function Officer(name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
    Officer.prototype.getName = function () {
        return this.name;
    };
    Officer.prototype.setName = function (name) {
        this.name = name;
    };
    Officer.prototype.getAge = function () {
        return this.age;
    };
    Officer.prototype.setAge = function (age) {
        this.age = age;
    };
    Officer.prototype.getGender = function () {
        return this.gender;
    };
    Officer.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    Officer.prototype.getAddress = function () {
        return this.address;
    };
    Officer.prototype.setAddress = function (address) {
        this.address = address;
    };
    return Officer;
}());
exports["default"] = Officer;
