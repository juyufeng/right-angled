System.register(['angular2/core', './ngListService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ngListService_1;
    var E2E4LoadButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ngListService_1_1) {
                ngListService_1 = ngListService_1_1;
            }],
        execute: function() {
            E2E4LoadButton = (function () {
                function E2E4LoadButton(ngListService) {
                    this.ngListService = ngListService;
                }
                E2E4LoadButton.prototype.loadData = function () {
                    debugger;
                    this.ngListService.normalizedService.reloadData();
                };
                E2E4LoadButton = __decorate([
                    core_1.Component({
                        selector: 'e2e4-load-button',
                        template: "<input type=\"button\" class=\"btn btn-success\" value=\"Load data\" (click)=\"loadData()\" />"
                    }), 
                    __metadata('design:paramtypes', [ngListService_1.NgListService])
                ], E2E4LoadButton);
                return E2E4LoadButton;
            }());
            exports_1("E2E4LoadButton", E2E4LoadButton);
        }
    }
});
//# sourceMappingURL=e2e4LoadButton.js.map