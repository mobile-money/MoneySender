"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const native_1 = __importDefault(require("styled-components/native"));
const colors_1 = require("../Themes/colors");
const FormTitle = native_1.default.Text `
  font-size: 15px;
  font-family: System;
  color: ${colors_1.colors.title};
`;
const ErrorTitle = native_1.default.Text `
  font-size: 15px;
  font-family: System;
  color: ${colors_1.colors.red};
  margin-top: 10px;
`;
const FormInputPrefix = native_1.default.Text `
  font-size: 20px;
  color: ${colors_1.colors.title};
`;
const FormTextInput = native_1.default.TextInput `
  height: 42px;
  width: 100%;
  font-size: 20px;
  color: ${colors_1.colors.title};
`;
const FormInputContainer = native_1.default.View `
  width: 100%;
  margin-top: 36px;
`;
const underLineColor = (props) => {
    if (props.modifying == true) {
        return colors_1.colors.blue;
    }
    if (props.isValid == false) {
        return colors_1.colors.red;
    }
    return colors_1.colors.lightGrey;
};
const FormTextInputContainer = native_1.default.View `
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${underLineColor};
`;
class FormInputComponent extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isFocused: false
        };
    }
    render() {
        const { validation, value, isValid, prefix } = this.props.form;
        return (react_1.default.createElement(FormInputContainer, null,
            react_1.default.createElement(FormTitle, null, this.props.form.title),
            react_1.default.createElement(FormTextInputContainer, { isValid: isValid, modifying: this.state.isFocused },
                react_1.default.createElement(FormInputPrefix, null, prefix),
                react_1.default.createElement(FormTextInput, { value: value, onFocus: () => this.setState({ isFocused: true }), onBlur: () => {
                        this.setState({ isFocused: false });
                        this.props.onChange(Object.assign({}, this.props.form, { isValid: validation(value) }));
                    }, onChangeText: text => {
                        this.props.onChange(Object.assign({}, this.props.form, { value: text, isValid: validation(text) }));
                    } })),
            this.props.form.isValid === false && !this.state.isFocused && (react_1.default.createElement(ErrorTitle, null, this.props.form.errorString))));
    }
}
exports.default = FormInputComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL1NlbmQvRm9ybUlucHV0Q29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBeUM7QUFDekMsc0VBQThDO0FBQzlDLDZDQUEwQztBQUUxQyxNQUFNLFNBQVMsR0FBRyxnQkFBTSxDQUFDLElBQUksQ0FBQTs7O1dBR2xCLGVBQU0sQ0FBQyxLQUFLO0NBQ3RCLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBRyxnQkFBTSxDQUFDLElBQUksQ0FBQTs7O1dBR25CLGVBQU0sQ0FBQyxHQUFHOztDQUVwQixDQUFDO0FBRUYsTUFBTSxlQUFlLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUE7O1dBRXhCLGVBQU0sQ0FBQyxLQUFLO0NBQ3RCLENBQUM7QUFFRixNQUFNLGFBQWEsR0FBRyxnQkFBTSxDQUFDLFNBQVMsQ0FBMEM7Ozs7V0FJckUsZUFBTSxDQUFDLEtBQUs7Q0FDdEIsQ0FBQztBQUVGLE1BQU0sa0JBQWtCLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUE7OztDQUdyQyxDQUFDO0FBRUYsTUFBTSxjQUFjLEdBQUcsQ0FBQyxLQUErQyxFQUFFLEVBQUU7SUFDekUsSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtRQUMzQixPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQUM7S0FDcEI7SUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxFQUFFO1FBQzFCLE9BQU8sZUFBTSxDQUFDLEdBQUcsQ0FBQztLQUNuQjtJQUNELE9BQU8sZUFBTSxDQUFDLFNBQVMsQ0FBQztBQUMxQixDQUFDLENBQUE7QUFFRCxNQUFNLHNCQUFzQixHQUFHLGdCQUFNLENBQUMsSUFBSSxDQUd4Qzs7OztrQkFJaUIsY0FBZTtDQUNqQyxDQUFDO0FBcUJGLE1BQXFCLGtCQUFtQixTQUFRLGlCQUcvQztJQUhEOztRQUlFLFVBQUssR0FBRztZQUNOLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUM7SUFxQ0osQ0FBQztJQW5DQyxNQUFNO1FBQ0osTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQy9ELE9BQU8sQ0FDTCw4QkFBQyxrQkFBa0I7WUFDakIsOEJBQUMsU0FBUyxRQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBYTtZQUM5Qyw4QkFBQyxzQkFBc0IsSUFDckIsT0FBTyxFQUFFLE9BQU8sRUFDaEIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztnQkFFL0IsOEJBQUMsZUFBZSxRQUFFLE1BQU0sQ0FBbUI7Z0JBQzNDLDhCQUFDLGFBQWEsSUFDWixLQUFLLEVBQUUsS0FBSyxFQUNaLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQ2pELE1BQU0sRUFBRSxHQUFHLEVBQUU7d0JBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO3dCQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsbUJBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQ2xCLE9BQU8sRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQzFCLENBQUM7b0JBQ0wsQ0FBQyxFQUNELFlBQVksRUFBRSxJQUFJLENBQUMsRUFBRTt3QkFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLG1CQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUNsQixLQUFLLEVBQUUsSUFBSSxFQUNYLE9BQU8sRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQ3pCLENBQUM7b0JBQ0wsQ0FBQyxHQUNELENBQ3FCO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxDQUM3RCw4QkFBQyxVQUFVLFFBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFjLENBQ3ZELENBQ2tCLENBQ3RCLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUEzQ0QscUNBMkNDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZG11cnBoeS9EZXNrdG9wL01vbmV5U2VuZGVyL3NyYy9TZW5kL0Zvcm1JbnB1dENvbXBvbmVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHMvbmF0aXZlXCI7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tIFwiLi4vVGhlbWVzL2NvbG9yc1wiO1xuXG5jb25zdCBGb3JtVGl0bGUgPSBzdHlsZWQuVGV4dGBcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogU3lzdGVtO1xuICBjb2xvcjogJHtjb2xvcnMudGl0bGV9O1xuYDtcblxuY29uc3QgRXJyb3JUaXRsZSA9IHN0eWxlZC5UZXh0YFxuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBTeXN0ZW07XG4gIGNvbG9yOiAke2NvbG9ycy5yZWR9O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuYDtcblxuY29uc3QgRm9ybUlucHV0UHJlZml4ID0gc3R5bGVkLlRleHRgXG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICR7Y29sb3JzLnRpdGxlfTtcbmA7XG5cbmNvbnN0IEZvcm1UZXh0SW5wdXQgPSBzdHlsZWQuVGV4dElucHV0PHsgbW9kaWZ5aW5nOiBib29sZWFuOyBpc1ZhbGlkOiBib29sZWFuIH0+YFxuICBoZWlnaHQ6IDQycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAke2NvbG9ycy50aXRsZX07XG5gO1xuXG5jb25zdCBGb3JtSW5wdXRDb250YWluZXIgPSBzdHlsZWQuVmlld2BcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG5gO1xuXG5jb25zdCB1bmRlckxpbmVDb2xvciA9IChwcm9wczogeyBtb2RpZnlpbmc6IGJvb2xlYW4sIGlzVmFsaWQ6IEJvb2xlYW4gfSkgPT4ge1xuICBpZiAocHJvcHMubW9kaWZ5aW5nID09IHRydWUpIHtcbiAgICByZXR1cm4gY29sb3JzLmJsdWU7XG4gIH1cbiAgaWYgKHByb3BzLmlzVmFsaWQgPT0gZmFsc2UpIHtcbiAgICByZXR1cm4gY29sb3JzLnJlZDtcbiAgfVxuICByZXR1cm4gY29sb3JzLmxpZ2h0R3JleTtcbn1cblxuY29uc3QgRm9ybVRleHRJbnB1dENvbnRhaW5lciA9IHN0eWxlZC5WaWV3PHtcbiAgbW9kaWZ5aW5nOiBib29sZWFuO1xuICBpc1ZhbGlkOiBib29sZWFuO1xufT5gXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAkeyB1bmRlckxpbmVDb2xvciB9O1xuYDtcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtSW5wdXQge1xuICB0aXRsZTogc3RyaW5nO1xuICBrZXk6IHN0cmluZztcbiAgaXNWYWxpZD86IGJvb2xlYW47XG4gIHZhbHVlPzogc3RyaW5nO1xuICBwcmVmaXg/OiBzdHJpbmc7XG4gIGVycm9yU3RyaW5nOiBzdHJpbmc7XG4gIHZhbGlkYXRpb246ICh2YWx1ZT86IHN0cmluZykgPT4gYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIEZvcm1Qcm9wcyB7XG4gIGZvcm06IEZvcm1JbnB1dDtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogRm9ybUlucHV0KSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgRm9ybUlucHV0U3RhdGUge1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1JbnB1dENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxcbiAgRm9ybVByb3BzLFxuICBGb3JtSW5wdXRTdGF0ZVxuPiB7XG4gIHN0YXRlID0ge1xuICAgIGlzRm9jdXNlZDogZmFsc2VcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uLCB2YWx1ZSwgaXNWYWxpZCwgcHJlZml4IH0gPSB0aGlzLnByb3BzLmZvcm07XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtSW5wdXRDb250YWluZXI+XG4gICAgICAgIDxGb3JtVGl0bGU+e3RoaXMucHJvcHMuZm9ybS50aXRsZX08L0Zvcm1UaXRsZT5cbiAgICAgICAgPEZvcm1UZXh0SW5wdXRDb250YWluZXJcbiAgICAgICAgICBpc1ZhbGlkPXtpc1ZhbGlkfVxuICAgICAgICAgIG1vZGlmeWluZz17dGhpcy5zdGF0ZS5pc0ZvY3VzZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8Rm9ybUlucHV0UHJlZml4PntwcmVmaXh9PC9Gb3JtSW5wdXRQcmVmaXg+XG4gICAgICAgICAgPEZvcm1UZXh0SW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBpc0ZvY3VzZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICBvbkJsdXI9eygpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNlZDogZmFsc2UgfSk7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuZm9ybSxcbiAgICAgICAgICAgICAgICBpc1ZhbGlkOiB2YWxpZGF0aW9uKHZhbHVlKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNoYW5nZVRleHQ9e3RleHQgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLmZvcm0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRleHQsXG4gICAgICAgICAgICAgICAgaXNWYWxpZDogdmFsaWRhdGlvbih0ZXh0KVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtVGV4dElucHV0Q29udGFpbmVyPlxuICAgICAgICB7dGhpcy5wcm9wcy5mb3JtLmlzVmFsaWQgPT09IGZhbHNlICYmICF0aGlzLnN0YXRlLmlzRm9jdXNlZCAmJiAoXG4gICAgICAgICAgPEVycm9yVGl0bGU+e3RoaXMucHJvcHMuZm9ybS5lcnJvclN0cmluZ308L0Vycm9yVGl0bGU+XG4gICAgICAgICl9XG4gICAgICA8L0Zvcm1JbnB1dENvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG4iXSwidmVyc2lvbiI6M30=