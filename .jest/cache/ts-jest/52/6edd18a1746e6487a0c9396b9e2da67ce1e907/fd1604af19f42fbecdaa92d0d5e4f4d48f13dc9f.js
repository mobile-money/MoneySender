"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("../App");
const nonEmpty = (value) => value !== undefined && value.length > 0;
const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email ? re.test(email) : false;
};
const nonEmptyNumber = (number) => number ? /^-{0,1}\d+$/.test(number) : false;
exports.nameForm = () => ({
    title: "Name",
    key: "name",
    errorString: "Please enter a valid name",
    validation: nonEmpty
});
exports.emailForm = () => ({
    title: "Email Address",
    key: "email",
    errorString: "Please enter a valid email address",
    validation: validateEmail
});
exports.amountForm = () => ({
    title: "Amount",
    key: "amount",
    errorString: "Please enter a valid amount",
    validation: nonEmptyNumber,
    prefix: App_1.currency
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL1NlbmQvRm9ybXMudHMiLCJtYXBwaW5ncyI6Ijs7QUFDQSxnQ0FBa0M7QUFFbEMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFjLEVBQVcsRUFBRSxDQUMzQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBRTFDLE1BQU0sYUFBYSxHQUFHLENBQUMsS0FBYyxFQUFXLEVBQUU7SUFDaEQsSUFBSSxFQUFFLEdBQUcsMkpBQTJKLENBQUM7SUFDckssT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUN4QyxDQUFDLENBQUM7QUFFRixNQUFNLGNBQWMsR0FBRyxDQUFDLE1BQWUsRUFBVyxFQUFFLENBQ2xELE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBRWpDLFFBQUEsUUFBUSxHQUFHLEdBQWMsRUFBRSxDQUFDLENBQUM7SUFDeEMsS0FBSyxFQUFFLE1BQU07SUFDYixHQUFHLEVBQUUsTUFBTTtJQUNYLFdBQVcsRUFBRSwyQkFBMkI7SUFDeEMsVUFBVSxFQUFFLFFBQVE7Q0FDckIsQ0FBQyxDQUFDO0FBRVUsUUFBQSxTQUFTLEdBQUcsR0FBYyxFQUFFLENBQUMsQ0FBQztJQUN6QyxLQUFLLEVBQUUsZUFBZTtJQUN0QixHQUFHLEVBQUUsT0FBTztJQUNaLFdBQVcsRUFBRSxvQ0FBb0M7SUFDakQsVUFBVSxFQUFFLGFBQWE7Q0FDMUIsQ0FBQyxDQUFDO0FBRVUsUUFBQSxVQUFVLEdBQUcsR0FBYyxFQUFFLENBQUMsQ0FBQztJQUMxQyxLQUFLLEVBQUUsUUFBUTtJQUNmLEdBQUcsRUFBRSxRQUFRO0lBQ2IsV0FBVyxFQUFFLDZCQUE2QjtJQUMxQyxVQUFVLEVBQUUsY0FBYztJQUMxQixNQUFNLEVBQUUsY0FBUTtDQUNqQixDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL1NlbmQvRm9ybXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUlucHV0IH0gZnJvbSBcIi4vRm9ybUlucHV0Q29tcG9uZW50XCI7XG5pbXBvcnQgeyBjdXJyZW5jeSB9IGZyb20gXCIuLi9BcHBcIjtcblxuY29uc3Qgbm9uRW1wdHkgPSAodmFsdWU/OiBTdHJpbmcpOiBib29sZWFuID0+XG4gIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUubGVuZ3RoID4gMDtcblxuY29uc3QgdmFsaWRhdGVFbWFpbCA9IChlbWFpbD86IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgcmV0dXJuIGVtYWlsID8gcmUudGVzdChlbWFpbCkgOiBmYWxzZTtcbn07XG5cbmNvbnN0IG5vbkVtcHR5TnVtYmVyID0gKG51bWJlcj86IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgbnVtYmVyID8gL14tezAsMX1cXGQrJC8udGVzdChudW1iZXIpIDogZmFsc2U7XG5cbmV4cG9ydCBjb25zdCBuYW1lRm9ybSA9ICgpOiBGb3JtSW5wdXQgPT4gKHtcbiAgdGl0bGU6IFwiTmFtZVwiLFxuICBrZXk6IFwibmFtZVwiLFxuICBlcnJvclN0cmluZzogXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBuYW1lXCIsXG4gIHZhbGlkYXRpb246IG5vbkVtcHR5XG59KTtcblxuZXhwb3J0IGNvbnN0IGVtYWlsRm9ybSA9ICgpOiBGb3JtSW5wdXQgPT4gKHtcbiAgdGl0bGU6IFwiRW1haWwgQWRkcmVzc1wiLFxuICBrZXk6IFwiZW1haWxcIixcbiAgZXJyb3JTdHJpbmc6IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzc1wiLFxuICB2YWxpZGF0aW9uOiB2YWxpZGF0ZUVtYWlsXG59KTtcblxuZXhwb3J0IGNvbnN0IGFtb3VudEZvcm0gPSAoKTogRm9ybUlucHV0ID0+ICh7XG4gIHRpdGxlOiBcIkFtb3VudFwiLFxuICBrZXk6IFwiYW1vdW50XCIsXG4gIGVycm9yU3RyaW5nOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGFtb3VudFwiLFxuICB2YWxpZGF0aW9uOiBub25FbXB0eU51bWJlcixcbiAgcHJlZml4OiBjdXJyZW5jeVxufSk7XG4iXSwidmVyc2lvbiI6M30=