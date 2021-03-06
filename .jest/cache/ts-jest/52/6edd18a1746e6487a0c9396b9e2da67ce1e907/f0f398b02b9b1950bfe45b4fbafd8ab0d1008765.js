"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Epics_1 = require("../Send/Epics");
const redux_observable_1 = require("redux-observable");
const ActionTypes_1 = require("../ActionTypes");
const rxjs_1 = require("rxjs");
describe("Form validation should function correctly", () => {
    // mock the store
    const store = {
        value: {
            account: {
                totalAvailable: 1000,
                totalSent: 0
            }
        }
    };
    it(`send should submit successfully`, () => __awaiter(this, void 0, void 0, function* () {
        const transaction = {
            name: "",
            email: "",
            amount: "100"
        };
        const action = {
            type: ActionTypes_1.TypeKeys.SEND_MONEY,
            transaction
        };
        const actionObservable = new redux_observable_1.ActionsObservable(rxjs_1.of(action));
        const result = Epics_1.SendMoneyEpic(actionObservable, store);
        const actions = yield result.toPromise();
        expect(actions).toEqual({ type: ActionTypes_1.TypeKeys.SEND_MONEY_SUCCESS, transaction });
    }));
    it(`send should fail because you dont have enough money`, () => __awaiter(this, void 0, void 0, function* () {
        const transaction = {
            name: "",
            email: "",
            amount: "1000000"
        };
        const action = {
            type: ActionTypes_1.TypeKeys.SEND_MONEY,
            transaction
        };
        const actionObservable = new redux_observable_1.ActionsObservable(rxjs_1.of(action));
        const result = Epics_1.SendMoneyEpic(actionObservable, store);
        const actions = yield result.toPromise();
        expect(actions).toEqual({
            type: ActionTypes_1.TypeKeys.SEND_MONEY_FAIL
        });
    }));
    it(`send should show an error message when the request does fail`, () => __awaiter(this, void 0, void 0, function* () {
        const action = {
            type: ActionTypes_1.TypeKeys.SEND_MONEY_FAIL,
        };
        const actionObservable = new redux_observable_1.ActionsObservable(rxjs_1.of(action));
        const result = Epics_1.FailedSendEpic(actionObservable);
        const actions = yield result.toPromise();
        expect(actions).toEqual({
            type: ActionTypes_1.TypeKeys.SHOW_ERROR,
            title: Epics_1.errorTitle,
            message: Epics_1.errorMessage
        });
    }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL19fdGVzdHNfXy9Gb3JtRXBpY1Rlc3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUNBQXdGO0FBRXhGLHVEQUFxRDtBQUNyRCxnREFBMEM7QUFDMUMsK0JBQTBCO0FBRzFCLFFBQVEsQ0FBQywyQ0FBMkMsRUFBRSxHQUFHLEVBQUU7SUFDekQsaUJBQWlCO0lBQ2pCLE1BQU0sS0FBSyxHQUFHO1FBQ1osS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixTQUFTLEVBQUUsQ0FBQzthQUNiO1NBQ0Y7S0FDRixDQUFDO0lBRUYsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLEdBQVMsRUFBRTtRQUMvQyxNQUFNLFdBQVcsR0FBZ0I7WUFDL0IsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxLQUFLO1NBQ2QsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFvQjtZQUM5QixJQUFJLEVBQUUsc0JBQVEsQ0FBQyxVQUFVO1lBQ3pCLFdBQVc7U0FDWixDQUFDO1FBRUYsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLG9DQUFpQixDQUFZLFNBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLE1BQU0sTUFBTSxHQUFHLHFCQUFhLENBQUMsZ0JBQWdCLEVBQUUsS0FBWSxDQUFDLENBQUM7UUFDN0QsTUFBTSxPQUFPLEdBQUcsTUFBTSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxzQkFBUSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxREFBcUQsRUFBRSxHQUFTLEVBQUU7UUFDbkUsTUFBTSxXQUFXLEdBQWdCO1lBQy9CLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsU0FBUztTQUNsQixDQUFDO1FBRUYsTUFBTSxNQUFNLEdBQW9CO1lBQzlCLElBQUksRUFBRSxzQkFBUSxDQUFDLFVBQVU7WUFDekIsV0FBVztTQUNaLENBQUM7UUFFRixNQUFNLGdCQUFnQixHQUFHLElBQUksb0NBQWlCLENBQVksU0FBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdEUsTUFBTSxNQUFNLEdBQUcscUJBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFZLENBQUMsQ0FBQztRQUM3RCxNQUFNLE9BQU8sR0FBRyxNQUFNLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ3RCLElBQUksRUFBRSxzQkFBUSxDQUFDLGVBQWU7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw4REFBOEQsRUFBRSxHQUFTLEVBQUU7UUFDNUUsTUFBTSxNQUFNLEdBQXdCO1lBQ2xDLElBQUksRUFBRSxzQkFBUSxDQUFDLGVBQWU7U0FDL0IsQ0FBQztRQUVGLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxvQ0FBaUIsQ0FBWSxTQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN0RSxNQUFNLE1BQU0sR0FBRyxzQkFBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDaEQsTUFBTSxPQUFPLEdBQUcsTUFBTSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUN0QixJQUFJLEVBQUUsc0JBQVEsQ0FBQyxVQUFVO1lBQ3pCLEtBQUssRUFBRSxrQkFBVTtZQUNqQixPQUFPLEVBQUUsb0JBQVk7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZG11cnBoeS9EZXNrdG9wL01vbmV5U2VuZGVyL3NyYy9fX3Rlc3RzX18vRm9ybUVwaWNUZXN0cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VuZE1vbmV5RXBpYywgRmFpbGVkU2VuZEVwaWMgLGVycm9yVGl0bGUsIGVycm9yTWVzc2FnZSB9IGZyb20gXCIuLi9TZW5kL0VwaWNzXCI7XG5pbXBvcnQgeyBTZW5kTW9uZXlBY3Rpb24sIFRyYW5zYWN0aW9uLCBTZW5kTW9uZXlBY3Rpb25GYWlsIH0gZnJvbSBcIi4uL1NlbmQvUmVkdWNlcnNcIjtcbmltcG9ydCB7IEFjdGlvbnNPYnNlcnZhYmxlIH0gZnJvbSBcInJlZHV4LW9ic2VydmFibGVcIjtcbmltcG9ydCB7IFR5cGVLZXlzIH0gZnJvbSBcIi4uL0FjdGlvblR5cGVzXCI7XG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tIFwicmVkdXhcIjtcblxuZGVzY3JpYmUoXCJGb3JtIHZhbGlkYXRpb24gc2hvdWxkIGZ1bmN0aW9uIGNvcnJlY3RseVwiLCAoKSA9PiB7XG4gIC8vIG1vY2sgdGhlIHN0b3JlXG4gIGNvbnN0IHN0b3JlID0ge1xuICAgIHZhbHVlOiB7XG4gICAgICBhY2NvdW50OiB7XG4gICAgICAgIHRvdGFsQXZhaWxhYmxlOiAxMDAwLFxuICAgICAgICB0b3RhbFNlbnQ6IDBcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgaXQoYHNlbmQgc2hvdWxkIHN1Ym1pdCBzdWNjZXNzZnVsbHlgLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uID0ge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgYW1vdW50OiBcIjEwMFwiXG4gICAgfTtcblxuICAgIGNvbnN0IGFjdGlvbjogU2VuZE1vbmV5QWN0aW9uID0ge1xuICAgICAgdHlwZTogVHlwZUtleXMuU0VORF9NT05FWSxcbiAgICAgIHRyYW5zYWN0aW9uXG4gICAgfTtcblxuICAgIGNvbnN0IGFjdGlvbk9ic2VydmFibGUgPSBuZXcgQWN0aW9uc09ic2VydmFibGU8QW55QWN0aW9uPihvZihhY3Rpb24pKTtcbiAgICBjb25zdCByZXN1bHQgPSBTZW5kTW9uZXlFcGljKGFjdGlvbk9ic2VydmFibGUsIHN0b3JlIGFzIGFueSk7XG4gICAgY29uc3QgYWN0aW9ucyA9IGF3YWl0IHJlc3VsdC50b1Byb21pc2UoKTtcblxuICAgIGV4cGVjdChhY3Rpb25zKS50b0VxdWFsKHsgdHlwZTogVHlwZUtleXMuU0VORF9NT05FWV9TVUNDRVNTLCB0cmFuc2FjdGlvbiB9KTtcbiAgfSk7XG5cbiAgaXQoYHNlbmQgc2hvdWxkIGZhaWwgYmVjYXVzZSB5b3UgZG9udCBoYXZlIGVub3VnaCBtb25leWAsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24gPSB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBhbW91bnQ6IFwiMTAwMDAwMFwiXG4gICAgfTtcblxuICAgIGNvbnN0IGFjdGlvbjogU2VuZE1vbmV5QWN0aW9uID0ge1xuICAgICAgdHlwZTogVHlwZUtleXMuU0VORF9NT05FWSxcbiAgICAgIHRyYW5zYWN0aW9uXG4gICAgfTtcblxuICAgIGNvbnN0IGFjdGlvbk9ic2VydmFibGUgPSBuZXcgQWN0aW9uc09ic2VydmFibGU8QW55QWN0aW9uPihvZihhY3Rpb24pKTtcbiAgICBjb25zdCByZXN1bHQgPSBTZW5kTW9uZXlFcGljKGFjdGlvbk9ic2VydmFibGUsIHN0b3JlIGFzIGFueSk7XG4gICAgY29uc3QgYWN0aW9ucyA9IGF3YWl0IHJlc3VsdC50b1Byb21pc2UoKTtcbiAgICBleHBlY3QoYWN0aW9ucykudG9FcXVhbCh7XG4gICAgICB0eXBlOiBUeXBlS2V5cy5TRU5EX01PTkVZX0ZBSUxcbiAgICB9KTtcbiAgfSk7XG5cbiAgaXQoYHNlbmQgc2hvdWxkIHNob3cgYW4gZXJyb3IgbWVzc2FnZSB3aGVuIHRoZSByZXF1ZXN0IGRvZXMgZmFpbGAsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhY3Rpb246IFNlbmRNb25leUFjdGlvbkZhaWwgPSB7XG4gICAgICB0eXBlOiBUeXBlS2V5cy5TRU5EX01PTkVZX0ZBSUwsXG4gICAgfTtcblxuICAgIGNvbnN0IGFjdGlvbk9ic2VydmFibGUgPSBuZXcgQWN0aW9uc09ic2VydmFibGU8QW55QWN0aW9uPihvZihhY3Rpb24pKTtcbiAgICBjb25zdCByZXN1bHQgPSBGYWlsZWRTZW5kRXBpYyhhY3Rpb25PYnNlcnZhYmxlKTtcbiAgICBjb25zdCBhY3Rpb25zID0gYXdhaXQgcmVzdWx0LnRvUHJvbWlzZSgpO1xuICAgIGV4cGVjdChhY3Rpb25zKS50b0VxdWFsKHtcbiAgICAgIHR5cGU6IFR5cGVLZXlzLlNIT1dfRVJST1IsXG4gICAgICB0aXRsZTogZXJyb3JUaXRsZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZVxuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9