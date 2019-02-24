"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const redux_observable_1 = require("redux-observable");
const ActionTypes_1 = require("../ActionTypes");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
exports.default = (action) => action.pipe(redux_observable_1.ofType(ActionTypes_1.TypeKeys.SHOW_ERROR), operators_1.mergeMap((action$) => {
    react_native_1.Alert.alert(action$.title, action$.message, [{ text: "Ok", style: "cancel" }], { cancelable: true });
    return rxjs_1.of();
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL0Vycm9yL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7O0FBQ0EsK0NBQXFDO0FBQ3JDLHVEQUE2RDtBQUM3RCxnREFBMEM7QUFDMUMsK0JBQTBCO0FBQzFCLDhDQUEwQztBQVExQyxrQkFBZSxDQUFDLE1BQWlDLEVBQUUsRUFBRSxDQUNuRCxNQUFNLENBQUMsSUFBSSxDQUNULHlCQUFNLENBQUMsc0JBQVEsQ0FBQyxVQUFVLENBQUMsRUFDM0Isb0JBQVEsQ0FBQyxDQUFDLE9BQW9CLEVBQUUsRUFBRTtJQUNoQyxvQkFBSyxDQUFDLEtBQUssQ0FDVCxPQUFPLENBQUMsS0FBSyxFQUNiLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQ2pDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUNyQixDQUFDO0lBQ0YsT0FBTyxTQUFFLEVBQUUsQ0FBQztBQUNkLENBQUMsQ0FBQyxDQUNILENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL0Vycm9yL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwicmVhY3QtbmF0aXZlXCI7XG5pbXBvcnQgeyBvZlR5cGUsIEFjdGlvbnNPYnNlcnZhYmxlIH0gZnJvbSBcInJlZHV4LW9ic2VydmFibGVcIjtcbmltcG9ydCB7IFR5cGVLZXlzIH0gZnJvbSBcIi4uL0FjdGlvblR5cGVzXCI7XG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBtZXJnZU1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yQWN0aW9uIHtcbiAgdHlwZTogVHlwZUtleXMuU0hPV19FUlJPUjtcbiAgdGl0bGU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoYWN0aW9uOiBBY3Rpb25zT2JzZXJ2YWJsZTxBY3Rpb24+KSA9PlxuICBhY3Rpb24ucGlwZShcbiAgICBvZlR5cGUoVHlwZUtleXMuU0hPV19FUlJPUiksXG4gICAgbWVyZ2VNYXAoKGFjdGlvbiQ6IEVycm9yQWN0aW9uKSA9PiB7XG4gICAgICBBbGVydC5hbGVydChcbiAgICAgICAgYWN0aW9uJC50aXRsZSxcbiAgICAgICAgYWN0aW9uJC5tZXNzYWdlLFxuICAgICAgICBbeyB0ZXh0OiBcIk9rXCIsIHN0eWxlOiBcImNhbmNlbFwiIH1dLFxuICAgICAgICB7IGNhbmNlbGFibGU6IHRydWUgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiBvZigpO1xuICAgIH0pXG4gICk7XG4iXSwidmVyc2lvbiI6M30=