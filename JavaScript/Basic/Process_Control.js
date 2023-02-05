// if else
// function checkData() {
//     if (document.form1.threeChar.value.length == 3) {
//         return true;
//     } else {
//         alert("Enter exactly three characters. " +
//             document.form1.threeChar.value + " is not valid.");
//         return false;
//     }
// }
// // switch
// switch (fruittype) {
//     case "Oranges":
//         document.write("Oranges are $0.59 a pound.<br>");
//         break;
//     case "Apples":
//         document.write("Apples are $0.32 a pound.<br>");
//         break;
//     case "Bananas":
//         document.write("Bananas are $0.48 a pound.<br>");
//         break;
//     case "Cherries":
//         document.write("Cherries are $3.00 a pound.<br>");
//         break;
//     case "Mangoes":
//     case "Papayas":
//         document.write("Mangoes and papayas are $2.79 a pound.<br>");
//         break;
//     default:
//         document.write("Sorry, we are out of " + fruittype + ".<br>");
// }
// document.write("Is there anything else you'd like?<br>");
// throw try catch
// Create an object type UserException
// function UserException (message){
//     this.message=message;
//     this.name="UserException";
// }
//
// // Make the exception convert to a pretty string when used as
// // a string (e.g. by the error console)
// UserException.prototype.toString = function (){
//     return this.name + ': "' + this.message + '"';
// }
//
// // Create an instance of the object type and throw it
// throw new UserException("Value too high");
//try catch
// 调用了一个函数用于从一个数组中根据传递值来获取一个月份名称。
// 如果该值与月份数值不相符，会抛出一个带有"InvalidMonthNo"值的异常，然后在捕捉块语句中设monthName变量为unknown。
function getMonthName(mo) {
    mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
        "Aug","Sep","Oct","Nov","Dec"];
    if (months[mo]) {
        return months[mo];
    } else {
        throw "InvalidMonthNo"; //throw keyword is used here
    }
}

try { // statements to try
    monthName = getMonthName(myMonth); // function could throw exception
}
catch (e) {
    monthName = "unknown";
    logMyErrors(e); // pass exception object to error handler -> your own function
}
