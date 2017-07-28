"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var testing_1 = require("@angular/common/testing");
function TEST_LOCATION_PROVIDERS() {
    return [
        { provide: common_1.Location, useClass: testing_1.SpyLocation },
        { provide: common_1.LocationStrategy, useClass: testing_1.MockLocationStrategy },
        { provide: common_1.APP_BASE_HREF, useValue: '/' }
    ];
}
exports.TEST_LOCATION_PROVIDERS = TEST_LOCATION_PROVIDERS;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvdGVzdGluZy9wcm92aWRlcnMvcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMENBQTRFO0FBQzVFLG1EQUE0RTtBQUU1RTtJQUVFLE1BQU0sQ0FBQztRQUNMLEVBQUMsT0FBTyxFQUFFLGlCQUFRLEVBQUUsUUFBUSxFQUFFLHFCQUFXLEVBQUM7UUFDMUMsRUFBQyxPQUFPLEVBQUUseUJBQWdCLEVBQUUsUUFBUSxFQUFFLDhCQUFvQixFQUFDO1FBQzNELEVBQUUsT0FBTyxFQUFFLHNCQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtLQUMxQyxDQUFDO0FBQ0osQ0FBQztBQVBELDBEQU9DIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2NvcmUvdGVzdGluZy9wcm92aWRlcnMvcm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxyXG5pbXBvcnQgeyBMb2NhdGlvbiwgTG9jYXRpb25TdHJhdGVneSwgQVBQX0JBU0VfSFJFRiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFNweUxvY2F0aW9uLCBNb2NrTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi90ZXN0aW5nJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBURVNUX0xPQ0FUSU9OX1BST1ZJREVSUygpOiBBcnJheTxhbnk+IHtcclxuXHJcbiAgcmV0dXJuIFtcclxuICAgIHtwcm92aWRlOiBMb2NhdGlvbiwgdXNlQ2xhc3M6IFNweUxvY2F0aW9ufSxcclxuICAgIHtwcm92aWRlOiBMb2NhdGlvblN0cmF0ZWd5LCB1c2VDbGFzczogTW9ja0xvY2F0aW9uU3RyYXRlZ3l9LFxyXG4gICAgeyBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLCB1c2VWYWx1ZTogJy8nIH1cclxuICBdO1xyXG59XHJcbiJdfQ==
