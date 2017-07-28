Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleInitialState = {
    names: []
};
// selects specific slice from sample state
function getNames(state$) {
    return state$.select(function (state) { return state.names; });
}
exports.getNames = getNames;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLnN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2FtcGxlLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNYSxRQUFBLGtCQUFrQixHQUFpQjtJQUM5QyxLQUFLLEVBQWlCLEVBQUU7Q0FDekIsQ0FBQztBQUVGLDJDQUEyQztBQUMzQyxrQkFBeUIsTUFBZ0M7SUFDdkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFGRCw0QkFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU2FtcGxlU3RhdGUge1xyXG4gIG5hbWVzOiBBcnJheTxzdHJpbmc+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2FtcGxlSW5pdGlhbFN0YXRlOiBJU2FtcGxlU3RhdGUgPSB7XHJcbiAgbmFtZXM6IDxBcnJheTxzdHJpbmc+PltdXHJcbn07XHJcblxyXG4vLyBzZWxlY3RzIHNwZWNpZmljIHNsaWNlIGZyb20gc2FtcGxlIHN0YXRlXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lcyhzdGF0ZSQ6IE9ic2VydmFibGU8SVNhbXBsZVN0YXRlPikge1xyXG4gIHJldHVybiBzdGF0ZSQuc2VsZWN0KHN0YXRlID0+IHN0YXRlLm5hbWVzKTtcclxufVxyXG4iXX0=