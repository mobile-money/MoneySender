"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActionTypes_1 = require("../../ActionTypes");
exports.default = (state = { totalSent: 0, totalAvailable: 10000, transations: [] }, action) => {
    switch (action.type) {
        case ActionTypes_1.TypeKeys.SEND_MONEY_SUCCESS:
            let amount = (+action.transaction.amount);
            return Object.assign({}, state, { totalAvailable: state.totalAvailable - amount, totalSent: state.totalSent + amount, transations: [...state.transations, action.transaction] });
        default:
            return state;
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL0FjY291bnQvUmVkdWNlcnMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBNEM7QUFXNUMsa0JBQWUsQ0FBQyxRQUNaLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsRUFDeEQsTUFBYSxFQUFnQixFQUFFO0lBQy9CLFFBQU8sTUFBTSxDQUFDLElBQUksRUFBRTtRQUNoQixLQUFLLHNCQUFRLENBQUMsa0JBQWtCO1lBQzVCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3pDLHlCQUFZLEtBQUssSUFDYixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWMsR0FBRyxNQUFNLEVBQzdDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sRUFDbkMsV0FBVyxFQUFFLENBQUUsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUUsSUFBRTtRQUNuRTtZQUNJLE9BQU8sS0FBSyxDQUFBO0tBQ25CO0FBRUwsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZG11cnBoeS9EZXNrdG9wL01vbmV5U2VuZGVyL3NyYy9BY2NvdW50L1JlZHVjZXJzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGVLZXlzIH0gZnJvbSAnLi4vLi4vQWN0aW9uVHlwZXMnXG5pbXBvcnQgeyBTZW5kTW9uZXlBY3Rpb25TdWNjZXNzLCBUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL1NlbmQvUmVkdWNlcnMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgQWNjb3VudFN0YXRlIHtcbiAgICB0b3RhbFNlbnQ6IG51bWJlclxuICAgIHRvdGFsQXZhaWxhYmxlOiBudW1iZXJcbiAgICB0cmFuc2F0aW9uczogVHJhbnNhY3Rpb25bXVxufVxuXG50eXBlIFR5cGVzID0gU2VuZE1vbmV5QWN0aW9uU3VjY2Vzc1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGU6IEFjY291bnRTdGF0ZSA9XG4gICAgeyB0b3RhbFNlbnQ6IDAsIHRvdGFsQXZhaWxhYmxlOiAxMDAwMCwgdHJhbnNhdGlvbnM6IFtdIH0sXG4gICAgYWN0aW9uOiBUeXBlcyk6IEFjY291bnRTdGF0ZSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgVHlwZUtleXMuU0VORF9NT05FWV9TVUNDRVNTOlxuICAgICAgICAgICAgbGV0IGFtb3VudCA9ICgrYWN0aW9uLnRyYW5zYWN0aW9uLmFtb3VudClcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHRvdGFsQXZhaWxhYmxlOiBzdGF0ZS50b3RhbEF2YWlsYWJsZSAtIGFtb3VudCxcbiAgICAgICAgICAgICAgICB0b3RhbFNlbnQ6IHN0YXRlLnRvdGFsU2VudCArIGFtb3VudCxcbiAgICAgICAgICAgICAgICB0cmFuc2F0aW9uczogWyAuLi5zdGF0ZS50cmFuc2F0aW9ucywgYWN0aW9uLnRyYW5zYWN0aW9uIF0gfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxuXG59Il0sInZlcnNpb24iOjN9