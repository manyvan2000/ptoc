Object.defineProperty(exports, "__esModule", { value: true });
// libs
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromEvent");
var ElectronEventService = (function () {
    function ElectronEventService() {
    }
    ElectronEventService.on = function (name) {
        return Observable_1.Observable.fromEvent(window, name);
    };
    return ElectronEventService;
}());
exports.ElectronEventService = ElectronEventService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU87QUFDUCw4Q0FBNkM7QUFDN0MseUNBQXVDO0FBSXZDO0lBQUE7SUFPQSxDQUFDO0lBTGUsdUJBQUUsR0FBaEIsVUFBaUIsSUFBWTtRQUMzQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFHSCwyQkFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBUFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGlic1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21FdmVudCc7XHJcblxyXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbGVjdHJvbkV2ZW50U2VydmljZSB7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgb24obmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLmZyb21FdmVudCh3aW5kb3csIG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gVE9ETzogYWRkIG1vcmUgaGVscGVycyBmb3IgbWVudSBzZXR1cCBhbmQgbW9yZS4uLiAgXHJcbn1cclxuIl19