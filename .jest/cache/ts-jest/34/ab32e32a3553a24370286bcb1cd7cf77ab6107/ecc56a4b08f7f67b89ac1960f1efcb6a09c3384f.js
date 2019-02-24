"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const redux_observable_1 = require("redux-observable");
const ActionTypes_1 = require("../ActionTypes");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
exports.default = (action) => action.pipe(redux_observable_1.ofType(ActionTypes_1.TypeKeys.SHOW_ERROR), operators_1.mergeMap((action$) => {
    react_native_1.Alert.alert(action$.title, action$.message, [
        { text: 'Ok', style: 'cancel' }
    ], { cancelable: true });
    return rxjs_1.of();
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL0Vycm9yL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7O0FBQ0EsK0NBQW9DO0FBQ3BDLHVEQUE0RDtBQUM1RCxnREFBeUM7QUFDekMsK0JBQTBCO0FBQzFCLDhDQUF5QztBQVF6QyxrQkFBZSxDQUFDLE1BQWlDLEVBQUUsRUFBRSxDQUNuRCxNQUFNLENBQUMsSUFBSSxDQUNULHlCQUFNLENBQUMsc0JBQVEsQ0FBQyxVQUFVLENBQUMsRUFDM0Isb0JBQVEsQ0FBQyxDQUFDLE9BQW9CLEVBQUUsRUFBRTtJQUM5QixvQkFBSyxDQUFDLEtBQUssQ0FDUCxPQUFPLENBQUMsS0FBSyxFQUNiLE9BQU8sQ0FBQyxPQUFPLEVBQ2Y7UUFDSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtLQUNsQyxFQUNELEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7SUFDekIsT0FBTyxTQUFFLEVBQUUsQ0FBQTtBQUNiLENBQUMsQ0FDRixDQUNGLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL0Vycm9yL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdyZWFjdC1uYXRpdmUnXG5pbXBvcnQgeyBvZlR5cGUsIEFjdGlvbnNPYnNlcnZhYmxlIH0gZnJvbSAncmVkdXgtb2JzZXJ2YWJsZSdcbmltcG9ydCB7IFR5cGVLZXlzIH0gZnJvbSAnLi4vQWN0aW9uVHlwZXMnXG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuZXhwb3J0IGludGVyZmFjZSBFcnJvckFjdGlvbiB7XG4gICAgdHlwZTogVHlwZUtleXMuU0hPV19FUlJPUlxuICAgIHRpdGxlOiBzdHJpbmdcbiAgICBtZXNzYWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGFjdGlvbjogQWN0aW9uc09ic2VydmFibGU8QWN0aW9uPikgPT5cbiAgYWN0aW9uLnBpcGUoXG4gICAgb2ZUeXBlKFR5cGVLZXlzLlNIT1dfRVJST1IpLFxuICAgIG1lcmdlTWFwKChhY3Rpb24kOiBFcnJvckFjdGlvbikgPT4ge1xuICAgICAgICBBbGVydC5hbGVydChcbiAgICAgICAgICAgIGFjdGlvbiQudGl0bGUsXG4gICAgICAgICAgICBhY3Rpb24kLm1lc3NhZ2UsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnT2snLCBzdHlsZTogJ2NhbmNlbCcgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHsgY2FuY2VsYWJsZTogdHJ1ZSB9KVxuICAgICAgICByZXR1cm4gb2YoKVxuICAgICAgfVxuICAgIClcbiAgKTsiXSwidmVyc2lvbiI6M30=