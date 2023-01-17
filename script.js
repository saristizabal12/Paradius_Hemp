// var name = window.prompt("Please enter your name:")
// var ageCheck = window.prompt("Please enter your age:")

// if (ageCheck < 21) {
//     window.alert("You submitted that you are :" + ageCheck + ": years old, " + name + ".");
//     window.alert("You must be at least 21 years old to visit this site.");
//     location.href("http://www.facebook.com")
// }
//     else if ( ageCheck > 21 && ageCheck <110) {
//         window.alert(" you are old enough to visit the site!");
//         window.alert(" Welcome " + name + " !");
//     }
// else {
//     window.alert("You must be honest about your age, " + name + ".");
//     location.href("http://www.facebook.com")
// }

// // --------------------------

// function onChangeDOB (executionContext) {
//     var formContext = executionContext.getFormContext();
//     var birthDate = formContext.getAttribute("birthdate").getValue();
//     var today = new Date();
//     var validMinDate = new Date(
//         today.getFullYear()-21,
//         today.getMonth(),
//         today.getDate(),
//         today.getHours(),
//         today.getMinutes());
//     var birthDateFieldControl = formContext.getControl("birthdate");
//     if(birthDate>validMinDate){
//         birthDateFieldControl.setNotification("Minimum Age must be 21 years. Choose correct Birthdate", "BDATE");
//     }
//     else{
//         birthDateFieldControl.cleanNotification("BDATE");
//     }
// }
