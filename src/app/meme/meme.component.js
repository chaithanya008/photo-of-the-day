"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var MemeComponent = /** @class */ (function () {
    function MemeComponent(http) {
        this.http = http;
        this.selectedFile = null;
    }
    MemeComponent.prototype.ngOnInit = function () { };
    MemeComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    MemeComponent.prototype.onUpload = function () {
        // this.http.post('')
        var a;
        var b = "leica";
        console.log(a, b);
    };
    MemeComponent.prototype.test = function () { };
    MemeComponent = __decorate([
        core_1.Component({
            selector: "app-meme",
            templateUrl: "./meme.component.html",
            styleUrls: ["./meme.component.scss"]
        })
    ], MemeComponent);
    return MemeComponent;
}());
exports.MemeComponent = MemeComponent;
