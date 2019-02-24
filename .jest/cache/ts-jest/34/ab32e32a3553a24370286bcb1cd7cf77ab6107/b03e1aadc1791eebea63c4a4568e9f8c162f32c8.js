"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_observable_1 = require("redux-observable");
const ActionTypes_1 = require("../../ActionTypes");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
exports.default = (action, store) => action.pipe(redux_observable_1.ofType(ActionTypes_1.TypeKeys.SEND_MONEY), operators_1.mergeMap((action$) => {
    let state = store.value;
    let total = state.account.totalAvailable;
    let amount = +action$.transaction.amount;
    return ((total - amount) >= 0)
        ? rxjs_1.of({ type: ActionTypes_1.TypeKeys.SEND_MONEY_SUCCESS, transaction: action$.transaction })
        : rxjs_1.concat(rxjs_1.of({ type: ActionTypes_1.TypeKeys.SEND_MONEY_FAIL }), rxjs_1.of({ type: ActionTypes_1.TypeKeys.SHOW_ERROR, title: 'Error', message: 'Insufficient funds' }));
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL1NlbmQvRXBpY3MvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7O0FBQ0EsdURBQTZFO0FBQzdFLG1EQUE0QztBQUU1QywrQkFBNkM7QUFDN0MsOENBQXlDO0FBSXpDLGtCQUFlLENBQUMsTUFBaUMsRUFBRSxLQUE2QixFQUFHLEVBQUUsQ0FDbkYsTUFBTSxDQUFDLElBQUksQ0FDVCx5QkFBTSxDQUFDLHNCQUFRLENBQUMsVUFBVSxDQUFDLEVBQzNCLG9CQUFRLENBQUMsQ0FBQyxPQUF3QixFQUEwRSxFQUFFO0lBQzFHLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUE7SUFDdkIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUE7SUFDeEMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQTtJQUN4QyxPQUFPLENBQUUsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxTQUFFLENBQXlCLEVBQUUsSUFBSSxFQUFFLHNCQUFRLENBQUMsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyRyxDQUFDLENBQUMsYUFBTSxDQUFFLFNBQUUsQ0FBc0IsRUFBRSxJQUFJLEVBQUUsc0JBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUNuRSxTQUFFLENBQWMsRUFBRSxJQUFJLEVBQUUsc0JBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFFLENBQUE7QUFDbkcsQ0FBQyxDQUNGLENBQ0YsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvZGF2aWRtdXJwaHkvRGVza3RvcC9Nb25leVNlbmRlci9zcmMvU2VuZC9FcGljcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBvZlR5cGUsIEFjdGlvbnNPYnNlcnZhYmxlLCBTdGF0ZU9ic2VydmFibGUgfSBmcm9tICdyZWR1eC1vYnNlcnZhYmxlJ1xuaW1wb3J0IHsgVHlwZUtleXMgfSBmcm9tICcuLi8uLi9BY3Rpb25UeXBlcydcbmltcG9ydCB7IFNlbmRNb25leUFjdGlvbiwgU2VuZE1vbmV5QWN0aW9uU3VjY2VzcywgU2VuZE1vbmV5QWN0aW9uRmFpbCB9IGZyb20gJy4uL1JlZHVjZXJzJ1xuaW1wb3J0IHsgb2YsIGNvbmNhdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuaW1wb3J0IHsgRXJyb3JBY3Rpb24gfSBmcm9tICcuLi8uLi9FcnJvcidcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vLi4vQXBwJ1xuXG5leHBvcnQgZGVmYXVsdCAoYWN0aW9uOiBBY3Rpb25zT2JzZXJ2YWJsZTxBY3Rpb24+LCBzdG9yZTogU3RhdGVPYnNlcnZhYmxlPFN0YXRlPiApID0+XG4gIGFjdGlvbi5waXBlKFxuICAgIG9mVHlwZShUeXBlS2V5cy5TRU5EX01PTkVZKSxcbiAgICBtZXJnZU1hcCgoYWN0aW9uJDogU2VuZE1vbmV5QWN0aW9uKTogT2JzZXJ2YWJsZTxTZW5kTW9uZXlBY3Rpb25TdWNjZXNzIHwgRXJyb3JBY3Rpb24gfCBTZW5kTW9uZXlBY3Rpb25GYWlsPiA9PiB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHN0b3JlLnZhbHVlXG4gICAgICAgIGxldCB0b3RhbCA9IHN0YXRlLmFjY291bnQudG90YWxBdmFpbGFibGVcbiAgICAgICAgbGV0IGFtb3VudCA9ICthY3Rpb24kLnRyYW5zYWN0aW9uLmFtb3VudFxuICAgICAgICByZXR1cm4gKCAodG90YWwgLSBhbW91bnQpID49IDApXG4gICAgICAgID8gb2Y8U2VuZE1vbmV5QWN0aW9uU3VjY2Vzcz4oeyB0eXBlOiBUeXBlS2V5cy5TRU5EX01PTkVZX1NVQ0NFU1MsIHRyYW5zYWN0aW9uOiBhY3Rpb24kLnRyYW5zYWN0aW9uIH0pXG4gICAgICAgIDogY29uY2F0KCBvZjxTZW5kTW9uZXlBY3Rpb25GYWlsPih7IHR5cGU6IFR5cGVLZXlzLlNFTkRfTU9ORVlfRkFJTCB9KSxcbiAgICAgICAgICBvZjxFcnJvckFjdGlvbj4oeyB0eXBlOiBUeXBlS2V5cy5TSE9XX0VSUk9SLCB0aXRsZTogJ0Vycm9yJywgbWVzc2FnZTogJ0luc3VmZmljaWVudCBmdW5kcycgfSkgKVxuICAgICAgfVxuICAgIClcbiAgKTsiXSwidmVyc2lvbiI6M30=