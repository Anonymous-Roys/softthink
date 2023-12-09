var today = new Date();

var year = today.getFullYear();
var month = today.getMonth() + 1;
var day = today.getDate();

document.getElementById("date").innerHTML=(year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day);
