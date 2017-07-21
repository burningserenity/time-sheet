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

        var employeeName= $("#employeeName").val().trim();
        var role = $("#role").val().trim();
        //takes the input val from #firstTrainTime parses it out as HH:mm and then formats it as a unix time stamp
        var startDate = $("#startDate").val().trim();
        var monthlyRate = $("#monthlyRate").val().trim();



        database.ref().push({
            employeeName: employeeName,
            role: role,
            startDate: startDate,
            monthlyRate: monthlyRate
        });

    })

    $("<tr>").attr("id", "empName").appendTo("tbody");
    $("<td>").attr("id", "empNamechild").text("bar").appendTo("#empName");
    $("<td>").attr("id", "empNaamechild").text("foo").appendTo("#empName");
