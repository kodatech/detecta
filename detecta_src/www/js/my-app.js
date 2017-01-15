// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    onDeviceReady();
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})

function onDeviceReady() {
        alert("hi");
        // Enable to debug issues.
          // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
          
          var notificationOpenedCallback = function(jsonData) {
            console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
          };
          window.plugins.OneSignal
            .startInit("933b8ea9-4bd9-4acf-84e1-7d7fcdb4c784", "144953997036")
            .handleNotificationOpened(notificationOpenedCallback)
            .endInit();
          
          // Sync hashed email if you have a login system or collect it.
          //   Will be used to reach the user at the most optimal time of day.
          // window.plugins.OneSignal.syncHashedEmail(userEmail); 
          segment_assign();
          
    }

    function segment_assign(){
      window.plugins.OneSignal.sendTag("Segment", "Customer_1"); 
      alert("hi2");
    }