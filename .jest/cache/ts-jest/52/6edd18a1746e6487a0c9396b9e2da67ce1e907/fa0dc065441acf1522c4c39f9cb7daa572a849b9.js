"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SharedStyles_1 = require("../Themes/SharedStyles");
const AccountPieChart_1 = __importDefault(require("./AccountPieChart"));
const native_1 = __importDefault(require("styled-components/native"));
const react_redux_1 = require("react-redux");
const App_1 = require("../App");
const AccountTransactionsList_1 = __importDefault(require("./AccountTransactionsList"));
const PieContainer = native_1.default.View `
    margin-top: 70px;
    margin-bottom: 70px;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
`;
const PieAccountText = native_1.default.Text `
    font-size: 16px;
`;
const PieTextContainer = native_1.default.View `
    align-items: center;
    justify-content: center;
`;
const AccountDetailsComponent = (props) => {
    return react_1.default.createElement(SharedStyles_1.Container, null,
        react_1.default.createElement(SharedStyles_1.InnerContainer, null,
            react_1.default.createElement(SharedStyles_1.SectionTitle, null, "My account"),
            react_1.default.createElement(PieContainer, null,
                react_1.default.createElement(PieTextContainer, null,
                    react_1.default.createElement(PieAccountText, null, `${App_1.currency} ${props.totalSent}`),
                    react_1.default.createElement(PieAccountText, null, "total sent")),
                react_1.default.createElement(AccountPieChart_1.default, null),
                react_1.default.createElement(PieTextContainer, null,
                    react_1.default.createElement(PieAccountText, null, `${App_1.currency} ${props.totalAvailable}`),
                    react_1.default.createElement(PieAccountText, null, "total available"))),
            react_1.default.createElement(AccountTransactionsList_1.default, null)));
};
const mapStateToProps = (state) => ({
    totalSent: state.account.totalSent,
    totalAvailable: state.account.totalAvailable
});
exports.default = react_redux_1.connect(mapStateToProps)(AccountDetailsComponent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL0FjY291bnQvQWNjb3VudERldGFpbHNDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLHlEQUFnRjtBQUNoRix3RUFBK0M7QUFDL0Msc0VBQTZDO0FBQzdDLDZDQUFxQztBQUNyQyxnQ0FBd0M7QUFDeEMsd0ZBQStEO0FBRS9ELE1BQU0sWUFBWSxHQUFHLGdCQUFNLENBQUMsSUFBSSxDQUFBOzs7Ozs7O0NBTy9CLENBQUE7QUFDRCxNQUFNLGNBQWMsR0FBRyxnQkFBTSxDQUFDLElBQUksQ0FBQTs7Q0FFakMsQ0FBQTtBQUVELE1BQU0sZ0JBQWdCLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUE7OztDQUduQyxDQUFBO0FBT0QsTUFBTSx1QkFBdUIsR0FBRyxDQUFDLEtBQTBCLEVBQUUsRUFBRTtJQUM3RCxPQUFPLDhCQUFDLHdCQUFTO1FBQ1gsOEJBQUMsNkJBQWM7WUFDWCw4QkFBQywyQkFBWSxxQkFBMkI7WUFDeEMsOEJBQUMsWUFBWTtnQkFDVCw4QkFBQyxnQkFBZ0I7b0JBQ2IsOEJBQUMsY0FBYyxRQUNULEdBQUcsY0FBUSxJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FDcEI7b0JBQ2xCLDhCQUFDLGNBQWMscUJBRUcsQ0FDRjtnQkFDeEIsOEJBQUMseUJBQWUsT0FBRztnQkFDZiw4QkFBQyxnQkFBZ0I7b0JBQ2IsOEJBQUMsY0FBYyxRQUNULEdBQUcsY0FBUSxJQUFJLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FDekI7b0JBQ2xCLDhCQUFDLGNBQWMsMEJBRUcsQ0FDRixDQUNSO1lBQ2hCLDhCQUFDLGlDQUF1QixPQUFHLENBQ2IsQ0FDVCxDQUFBO0FBQ2pCLENBQUMsQ0FBQTtBQUVELE1BQU0sZUFBZSxHQUFHLENBQUMsS0FBWSxFQUF1QixFQUFFLENBQUMsQ0FBQztJQUM1RCxTQUFTLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTO0lBQ2xDLGNBQWMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWM7Q0FDL0MsQ0FBQyxDQUFBO0FBRUYsa0JBQWUscUJBQU8sQ0FBRSxlQUFlLENBQUUsQ0FBRSx1QkFBdUIsQ0FBRSxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZG11cnBoeS9EZXNrdG9wL01vbmV5U2VuZGVyL3NyYy9BY2NvdW50L0FjY291bnREZXRhaWxzQ29tcG9uZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VjdGlvblRpdGxlLCBDb250YWluZXIsIElubmVyQ29udGFpbmVyIH0gZnJvbSAnLi4vVGhlbWVzL1NoYXJlZFN0eWxlcydcbmltcG9ydCBBY2NvdW50UGllQ2hhcnQgZnJvbSAnLi9BY2NvdW50UGllQ2hhcnQnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzL25hdGl2ZSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IFN0YXRlLCBjdXJyZW5jeSB9IGZyb20gJy4uL0FwcCdcbmltcG9ydCBBY2NvdW50VHJhbnNhY3Rpb25zTGlzdCBmcm9tICcuL0FjY291bnRUcmFuc2FjdGlvbnNMaXN0J1xuXG5jb25zdCBQaWVDb250YWluZXIgPSBzdHlsZWQuVmlld2BcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuYFxuY29uc3QgUGllQWNjb3VudFRleHQgPSBzdHlsZWQuVGV4dGBcbiAgICBmb250LXNpemU6IDE2cHg7XG5gXG5cbmNvbnN0IFBpZVRleHRDb250YWluZXIgPSBzdHlsZWQuVmlld2BcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuXG5pbnRlcmZhY2UgQWNjb3VudERldGFpbHNQcm9wcyB7XG4gICAgdG90YWxTZW50OiBudW1iZXJcbiAgICB0b3RhbEF2YWlsYWJsZTogbnVtYmVyXG59XG5cbmNvbnN0IEFjY291bnREZXRhaWxzQ29tcG9uZW50ID0gKHByb3BzOiBBY2NvdW50RGV0YWlsc1Byb3BzKSA9PiB7XG4gIHJldHVybiA8Q29udGFpbmVyPlxuICAgICAgICA8SW5uZXJDb250YWluZXI+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlPk15IGFjY291bnQ8LyBTZWN0aW9uVGl0bGU+XG4gICAgICAgICAgICA8UGllQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxQaWVUZXh0Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8UGllQWNjb3VudFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGAke2N1cnJlbmN5fSAke3Byb3BzLnRvdGFsU2VudH1gIH1cbiAgICAgICAgICAgICAgICAgICAgPC8gUGllQWNjb3VudFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxQaWVBY2NvdW50VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsIHNlbnRcbiAgICAgICAgICAgICAgICAgICAgPC8gUGllQWNjb3VudFRleHQ+XG4gICAgICAgICAgICAgICAgPC8gUGllVGV4dENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxBY2NvdW50UGllQ2hhcnQgLz5cbiAgICAgICAgICAgICAgICA8UGllVGV4dENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPFBpZUFjY291bnRUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBgJHtjdXJyZW5jeX0gJHtwcm9wcy50b3RhbEF2YWlsYWJsZX1gIH1cbiAgICAgICAgICAgICAgICAgICAgPC8gUGllQWNjb3VudFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxQaWVBY2NvdW50VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICA8LyBQaWVBY2NvdW50VGV4dD5cbiAgICAgICAgICAgICAgICA8LyBQaWVUZXh0Q29udGFpbmVyPlxuICAgICAgICAgICAgPC8gUGllQ29udGFpbmVyPlxuICAgICAgICAgICAgPEFjY291bnRUcmFuc2FjdGlvbnNMaXN0IC8+XG4gICAgICAgIDwvIElubmVyQ29udGFpbmVyPlxuICAgIDwvIENvbnRhaW5lcj5cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdGF0ZSk6IEFjY291bnREZXRhaWxzUHJvcHMgPT4gKHtcbiAgICB0b3RhbFNlbnQ6IHN0YXRlLmFjY291bnQudG90YWxTZW50LFxuICAgIHRvdGFsQXZhaWxhYmxlOiBzdGF0ZS5hY2NvdW50LnRvdGFsQXZhaWxhYmxlXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMgKSggQWNjb3VudERldGFpbHNDb21wb25lbnQgKSJdLCJ2ZXJzaW9uIjozfQ==