"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Epics_1 = __importStar(require("../Send/Epics"));
const redux_observable_1 = require("redux-observable");
const ActionTypes_1 = require("../ActionTypes");
const rxjs_1 = require("rxjs");
describe('Form validation shoudl function correctly', () => {
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
            name: '',
            email: '',
            amount: '100'
        };
        const action = {
            type: ActionTypes_1.TypeKeys.SEND_MONEY,
            transaction
        };
        const actionObservable = new redux_observable_1.ActionsObservable(rxjs_1.of(action));
        const result = Epics_1.default(actionObservable, store);
        const actions = yield result.toPromise();
        expect(actions).toEqual({ type: ActionTypes_1.TypeKeys.SEND_MONEY_SUCCESS, transaction });
    }));
    it(`send should fail because you dont have enough money`, () => __awaiter(this, void 0, void 0, function* () {
        const transaction = {
            name: '',
            email: '',
            amount: '1000000'
        };
        const action = {
            type: ActionTypes_1.TypeKeys.SEND_MONEY,
            transaction
        };
        const actionObservable = new redux_observable_1.ActionsObservable(rxjs_1.of(action));
        const result = Epics_1.default(actionObservable, store);
        const actions = yield result.toPromise();
        expect(actions).toEqual({ type: ActionTypes_1.TypeKeys.SHOW_ERROR, title: Epics_1.errorTitle, message: Epics_1.errorMessage });
    }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL19fdGVzdHNfXy9Gb3JtRXBpY1Rlc3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHVEQUFtRTtBQUVuRSx1REFBb0Q7QUFDcEQsZ0RBQXlDO0FBQ3pDLCtCQUF5QjtBQUdqQixRQUFRLENBQUMsMkNBQTJDLEVBQUUsR0FBRyxFQUFFO0lBRXZELGlCQUFpQjtJQUNqQixNQUFNLEtBQUssR0FBRztRQUNWLEtBQUssRUFBRTtZQUNILE9BQU8sRUFBRTtnQkFDTCxjQUFjLEVBQUUsSUFBSTtnQkFDcEIsU0FBUyxFQUFFLENBQUM7YUFDZjtTQUNKO0tBQ0osQ0FBQTtJQUVELEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRSxHQUFTLEVBQUU7UUFDN0MsTUFBTSxXQUFXLEdBQWdCO1lBQ3pCLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsS0FBSztTQUNwQixDQUFBO1FBRUQsTUFBTSxNQUFNLEdBQW9CO1lBQzVCLElBQUksRUFBRSxzQkFBUSxDQUFDLFVBQVU7WUFDekIsV0FBVztTQUNkLENBQUE7UUFFRCxNQUFNLGdCQUFnQixHQUFHLElBQUksb0NBQWlCLENBQVksU0FBRSxDQUFFLE1BQU0sQ0FBRSxDQUFDLENBQUE7UUFDdkUsTUFBTSxNQUFNLEdBQUcsZUFBUSxDQUFDLGdCQUFnQixFQUFFLEtBQVksQ0FBRSxDQUFBO1FBQ3hELE1BQU0sT0FBTyxHQUFHLE1BQU0sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBRXhDLE1BQU0sQ0FBRSxPQUFPLENBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsc0JBQVEsQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFBO0lBQ2pGLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMscURBQXFELEVBQUUsR0FBUyxFQUFFO1FBQ2pFLE1BQU0sV0FBVyxHQUFnQjtZQUN6QixJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1lBQ1QsTUFBTSxFQUFFLFNBQVM7U0FDeEIsQ0FBQTtRQUVELE1BQU0sTUFBTSxHQUFvQjtZQUM1QixJQUFJLEVBQUUsc0JBQVEsQ0FBQyxVQUFVO1lBQ3pCLFdBQVc7U0FDZCxDQUFBO1FBRUQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLG9DQUFpQixDQUFZLFNBQUUsQ0FBRSxNQUFNLENBQUUsQ0FBQyxDQUFBO1FBQ3ZFLE1BQU0sTUFBTSxHQUFHLGVBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFZLENBQUUsQ0FBQTtRQUN4RCxNQUFNLE9BQU8sR0FBRyxNQUFNLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUN4QyxNQUFNLENBQUUsT0FBTyxDQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLHNCQUFRLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxrQkFBVSxFQUFFLE9BQU8sRUFBRSxvQkFBWSxFQUFFLENBQUMsQ0FBQTtJQUN0RyxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL19fdGVzdHNfXy9Gb3JtRXBpY1Rlc3RzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IFNlbmRFcGljLCB7IGVycm9yVGl0bGUsIGVycm9yTWVzc2FnZSB9ICBmcm9tICcuLi9TZW5kL0VwaWNzJ1xuaW1wb3J0IHsgU2VuZE1vbmV5QWN0aW9uLCBUcmFuc2FjdGlvbiB9IGZyb20gJy4uL1NlbmQvUmVkdWNlcnMnXG5pbXBvcnQgeyBBY3Rpb25zT2JzZXJ2YWJsZSB9IGZyb20gJ3JlZHV4LW9ic2VydmFibGUnXG5pbXBvcnQgeyBUeXBlS2V5cyB9IGZyb20gJy4uL0FjdGlvblR5cGVzJ1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xuXG4gICAgICAgIGRlc2NyaWJlKCdGb3JtIHZhbGlkYXRpb24gc2hvdWRsIGZ1bmN0aW9uIGNvcnJlY3RseScsICgpID0+IHtcblxuICAgICAgICAgICAgLy8gbW9jayB0aGUgc3RvcmVcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQXZhaWxhYmxlOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxTZW50OiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0KGBzZW5kIHNob3VsZCBzdWJtaXQgc3VjY2Vzc2Z1bGx5YCwgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAnMTAwJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbjogU2VuZE1vbmV5QWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBUeXBlS2V5cy5TRU5EX01PTkVZLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbk9ic2VydmFibGUgPSBuZXcgQWN0aW9uc09ic2VydmFibGU8QW55QWN0aW9uPihvZiggYWN0aW9uICkpXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gU2VuZEVwaWMoYWN0aW9uT2JzZXJ2YWJsZSwgc3RvcmUgYXMgYW55IClcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb25zID0gYXdhaXQgcmVzdWx0LnRvUHJvbWlzZSgpXG5cbiAgICAgICAgICAgICAgICBleHBlY3QoIGFjdGlvbnMgKS50b0VxdWFsKHsgdHlwZTogVHlwZUtleXMuU0VORF9NT05FWV9TVUNDRVNTLCB0cmFuc2FjdGlvbiB9KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaXQoYHNlbmQgc2hvdWxkIGZhaWwgYmVjYXVzZSB5b3UgZG9udCBoYXZlIGVub3VnaCBtb25leWAsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogJzEwMDAwMDAnXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uOiBTZW5kTW9uZXlBY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFR5cGVLZXlzLlNFTkRfTU9ORVksXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uT2JzZXJ2YWJsZSA9IG5ldyBBY3Rpb25zT2JzZXJ2YWJsZTxBbnlBY3Rpb24+KG9mKCBhY3Rpb24gKSlcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBTZW5kRXBpYyhhY3Rpb25PYnNlcnZhYmxlLCBzdG9yZSBhcyBhbnkgKVxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbnMgPSBhd2FpdCByZXN1bHQudG9Qcm9taXNlKClcbiAgICAgICAgICAgICAgICBleHBlY3QoIGFjdGlvbnMgKS50b0VxdWFsKHsgdHlwZTogVHlwZUtleXMuU0hPV19FUlJPUiwgdGl0bGU6IGVycm9yVGl0bGUsIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSJdLCJ2ZXJzaW9uIjozfQ==