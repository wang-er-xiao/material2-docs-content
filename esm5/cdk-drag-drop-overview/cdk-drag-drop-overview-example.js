import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Basic Drag&Drop
 */
var CdkDragDropOverviewExample = /** @class */ (function () {
    function CdkDragDropOverviewExample() {
    }
    CdkDragDropOverviewExample = tslib_1.__decorate([
        Component({
            selector: 'cdk-drag-drop-overview-example',
            template: "<div class=\"example-box\" cdkDrag>\n  Drag me around\n</div>\n",
            styles: [".example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n"]
        })
    ], CdkDragDropOverviewExample);
    return CdkDragDropOverviewExample;
}());
export { CdkDragDropOverviewExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay1kcmFnLWRyb3Atb3ZlcnZpZXcvY2RrLWRyYWctZHJvcC1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDOztHQUVHO0FBTUg7SUFBQTtJQUF5QyxDQUFDO0lBQTdCLDBCQUEwQjtRQUx0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0NBQWdDO1lBQzFDLDJFQUFrRDs7U0FFbkQsQ0FBQztPQUNXLDBCQUEwQixDQUFHO0lBQUQsaUNBQUM7Q0FBQSxBQUExQyxJQUEwQztTQUE3QiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIERyYWcmRHJvcFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3Atb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1kcmFnLWRyb3Atb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BPdmVydmlld0V4YW1wbGUge31cbiJdfQ==