"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeCache = {};
function type(label) {
    if (typeCache[label]) {
        throw new Error("Action type \"" + label + "\" is not unqiue\"");
    }
    typeCache[label] = true;
    return label;
}
exports.type = type;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvdXRpbHMvdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVVBLElBQUksU0FBUyxHQUFpQyxFQUFFLENBQUM7QUFDakQsY0FBd0IsS0FBYTtJQUNuQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQWdCLEtBQUssdUJBQWtCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsU0FBUyxDQUFTLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztJQUVoQyxNQUFNLENBQUksS0FBSyxDQUFDO0FBQ2xCLENBQUM7QUFSRCxvQkFRQyIsImZpbGUiOiJhcHAvbW9kdWxlcy9jb3JlL3V0aWxzL3R5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVGhpcyBmdW5jdGlvbiBjb2VyY2VzIGEgc3RyaW5nIGludG8gYSBzdHJpbmcgbGl0ZXJhbCB0eXBlLlxyXG4gKiBVc2luZyB0YWdnZWQgdW5pb24gdHlwZXMgaW4gVHlwZVNjcmlwdCAyLjAsIHRoaXMgZW5hYmxlc1xyXG4gKiBwb3dlcmZ1bCB0eXBlY2hlY2tpbmcgb2Ygb3VyIHJlZHVjZXJzLlxyXG4gKiBcclxuICogU2luY2UgZXZlcnkgYWN0aW9uIGxhYmVsIHBhc3NlcyB0aHJvdWdoIHRoaXMgZnVuY3Rpb24gaXRcclxuICogaXMgYSBnb29kIHBsYWNlIHRvIGVuc3VyZSBhbGwgb2Ygb3VyIGFjdGlvbiBsYWJlbHNcclxuICogYXJlIHVuaXF1ZS5cclxuICovXHJcblxyXG5sZXQgdHlwZUNhY2hlOiB7IFtsYWJlbDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbmV4cG9ydCBmdW5jdGlvbiB0eXBlPFQ+KGxhYmVsOiBUIHwgJycpOiBUIHtcclxuICBpZiAodHlwZUNhY2hlWzxzdHJpbmc+bGFiZWxdKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEFjdGlvbiB0eXBlIFwiJHtsYWJlbH1cIiBpcyBub3QgdW5xaXVlXCJgKTtcclxuICB9XHJcblxyXG4gIHR5cGVDYWNoZVs8c3RyaW5nPmxhYmVsXSA9IHRydWU7XHJcblxyXG4gIHJldHVybiA8VD5sYWJlbDtcclxufVxyXG4iXX0=
