"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Officer_1 = require("./Officer");
var Worker_1 = /** @class */ (function (_super) {
    __extends(Worker_1, _super);
    function Worker_1(name, age, gender, address, level) {
        var _this = _super.call(this, name, age, gender, address) || this;
        _this.level = level;
        return _this;
    }
    Worker_1.prototype.getLevel = function () {
        return this.level;
    };
    Worker_1.prototype.setLevel = function (level) {
        this.level = level;
    };
    return Worker_1;
}(Officer_1["default"]));
exports["default"] = Worker_1;
