// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)


// Assign the reference to the database to a variable named 'database'
//var database = ...

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



// Initial Values
var monthwork=0;
var totalbilled = 0;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the local data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("child_added", function(childsnapshot) {

      console.log(childsnapshot.val());

  // If Firebase has a highPrice and highBidder stored (first case)
  //if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the local variables for highBidder equal to the stored values in firebase.
    // employeeName = snapshot.child("highPrice").val();
    //  = snapshot.child("highBidder").val();
            employeeName = childsnapshot.child("employeeName").val();
            role = childsnapshot.child("role").val();
            startDate = childsnapshot.child("startDate").val();
            monthlyRate = childsnapshot.child("monthlyRate").val();
            monthwork = moment()-startDate;
            totalbilled = monthlyRate * monthwork;

            console.log(employeeName);

          $("tbody").append('<tr><td>'+employeeName+'</td><td>'+role+'<td>'+startDate+'<td>'+monthwork+'</td></td><td>'+monthlyRate+'</td><td>'+totalbilled+'</td></tr>');


});
    // change the HTML to reflect the newly updated local values (most recent information from firebase)

    //$("#highest-bidder").html(highBidder);
    //$("#highest-price").html(highPrice);

    // Print the local data to the console.

    //console.log("From Firebase:"+highBidder+" "+highPrice);

//  }
//
  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
 // else {

  //  // Change the HTML to reflect the local value in firebase
   //   $("#highest-bidder").html(highBidder);
    //  $("#highest-price").html(highPrice);    


    // Print the local data to the console.

      //console.log("From local:"+highBidder+" "+highPrice);
//
 // }


// If any errors are experienced, log them to console.
//}, function(errorObject) {
//  console.log("The read failed: " + errorObject.code);
//});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#btn-submit").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values

    var employeeName= $("#employeeName").val().trim();
        var role = $("#role").val().trim();
        //takes the input val from #firstTrainTime parses it out as HH:mm and then formats it as a unix time stamp
        var startDate = $("#startDate").val().trim();
        var monthlyRate = $("#monthlyRate").val().trim();

  // Log the Bidder and Price (Even if not the highest)
  //if (bidderPrice > highBidder) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase

    database.ref().push({
            employeeName: employeeName,
            role: role,
            startDate: startDate,
            monthlyRate: monthlyRate
        });

 });

    // Log the new High Price

    
    // Store the new high price and bidder name as a local variable (could have also used the Firebase variable)


    // Change the HTML to reflect the new high price and bidder

  //    $("#highest-bidder").html(highBidder);
  //    $("#highest-price").html(highPrice); 

 // }

  //else {
    // Alert
  //  alert("Try again.");
 // }


