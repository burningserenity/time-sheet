var config = {
    apiKey: "AIzaSyC-YLamtqLZoJCMHOIbbut85kjQ1weLcUs",
    authDomain: "billiableproject.firebaseapp.com",
    databaseURL: "https://billiableproject.firebaseio.com",
    projectId: "billiableproject",
    storageBucket: "",
    messagingSenderId: "1054135583104"
};

// Create a variable to reference the database

firebase.initializeApp(config);

var database = firebase.database();

$(".submit").on("click", function (event) {

    // Don't refresh the page!
    event.preventDefault();

    var employeeName = $("#employeeName").val().trim();
    var role = $("#role").val().trim();
    var startDate = $("#startDate").val().trim();
    var monthlyRate = $("#monthlyRate").val().trim();



    if (employeeName != "" && role != "" && startDate != "" && monthlyRate != "") {

        database.ref().push({
            employeeName: employeeName,
            role: role,
            startDate: startDate,
            monthlyRate: monthlyRate
        });


        $("#employeeName").val("");
        $("#role").val("");
        $("#startDate").val("");
        $("#monthlyRate").val("");


    } else {
        alert("You are missing data!");
    }

})

database.ref().on('child_added', function (childSnapshot) {


    $("tbody").append("<tr><td id='employee'> " + childSnapshot.val().employeeName +
        " </td><td id='roleVal'> " + childSnapshot.val().role +
        " </td><td id='beginDate'> " + childSnapshot.val().startDate +
        " </td><td id='monthWorked'> " + childSnapshot.val().startDate +
        " </td><td id='rateMonthly'> " + childSnapshot.val().monthlyRate +
        " </td><td id='totalBill'> " + childSnapshot.val().startDate + "</td></tr>")
})
