$(document).ready(function () {

    /* countries object with nested specific country
     sample country object
     var countries = {
        country object name: {
            city: "Name of city for visuals and weather api call"
            country: "Name of city for visuals and weather api call"
            questionType: "question difficulty of this country object"
            easyLoc: "the easy destination from this country object"
            easyTime: time in hours as a number to easyLoc
            hardLoc: "the hard destination from this country object"
            hardTime: time in hours as a number to hardLoc
        }
    }
    */
    //initializes the dropdown in the start modal
    $('select').formSelect();

    var countries = {
        usa: {
            city: "New York City",
            country: "United States of America",
            questionType: "easy",
            easyLoc: "canada",
            easyTime: 8,
            hardLoc: "mexico",
            hardTime: 4,
            imgLink: "assets/images/usa.jpg"
        },
        mexico: {
            city: "Mexico City",
            country: "Mexico",
            questionType: "hard",
            easyLoc: "venezuela",
            easyTime: 8,
            hardLoc: "argentina",
            hardTime: 4,
            imgLink: "assets/images/mexico.jpg"
        },
        canada: {
            city: "Montreal",
            country: "Canada",
            questionType: "easy",
            easyLoc: "venezuela",
            easyTime: 8,
            hardLoc: "norway",
            hardTime: 4,
            imgLink: "assets/images/canada.jpg"
        },
        argentina: {
            city: "Buenos Aires",
            country: "Argentina",
            questionType: "hard",
            easyLoc: "morocco",
            easyTime: 8,
            hardLoc: "southAfrica",
            hardTime: 4,
            imgLink: "assets/images/argentina.jpg"
        },
        venezuela: {
            city: "Caracas",
            country: "Venezuela",
            questionType: "easy",
            easyLoc: "morocco",
            easyTime: 8,
            hardLoc: "southAfrica",
            hardTime: 4,
            imgLink: "assets/images/venezuela.jpg"
        },
        norway: {
            city: "Oslo",
            country: "Norway",
            questionType: "hard",
            easyLoc: "morocco",
            easyTime: 8,
            hardLoc: "southAfrica",
            hardTime: 4,
            imgLink: "assets/images/norway.jpg"
        },
        southAfrica: {
            city: "Cape Town",
            country: "South Africa",
            questionType: "hard",
            easyLoc: "yemen",
            easyTime: 8,
            hardLoc: "djibouti",
            hardTime: 4,
            imgLink: "assets/images/southAfrica.jpg"
        },
        morocco: {
            city: "Casablanca",
            country: "Morocco",
            questionType: "easy",
            easyLoc: "yemen",
            easyTime: 8,
            hardLoc: "malta",
            hardTime: 4,
            imgLink: "assets/images/morocco.jpg"
        },
        djibouti: {
            city: "Djibouti",
            country: "Djibouti",
            questionType: "hard",
            easyLoc: "turkmenistan",
            easyTime: 8,
            hardLoc: "india",
            hardTime: 4,
            imgLink: "assets/images/djibouti.jpg"
        },
        yemen: {
            city: "Sana'a",
            country: "Yemen",
            questionType: "easy",
            easyLoc: "turkmenistan",
            easyTime: 8,
            hardLoc: "india",
            hardTime: 4,
            imgLink: "assets/images/yemen.jpg"
        },
        malta: {
            city: "Valletta",
            country: "Malta",
            questionType: "hard",
            easyLoc: "turkmenistan",
            easyTime: 8,
            hardLoc: "india",
            hardTime: 4,
            imgLink: "assets/images/malta.jpg"
        },
        india: {
            city: "New Delhi",
            country: "India",
            questionType: "hard",
            easyLoc: "china",
            easyTime: 8,
            hardLoc: "indonesia",
            hardTime: 4,
            imgLink: "assets/images/india.jpg"
        },
        turkmenistan: {
            city: "Ashgabat",
            country: "Turkmenistan",
            questionType: "easy",
            easyLoc: "china",
            easyTime: 8,
            hardLoc: "Russia",
            hardTime: 4,
            imgLink: "assets/images/turkmenistan.jpg"
        },
        indonesia: {
            city: "Jakarta",
            country: "Indonesia",
            questionType: "hard",
            easyLoc: "japan",
            easyTime: 8,
            hardLoc: "papuaNewGuinea",
            hardTime: 4,
            imgLink: "assets/images/indonesia.jpg"
        },
        china: {
            city: "Beijing",
            country: "China",
            questionType: "easy",
            easyLoc: "japan",
            easyTime: 8,
            hardLoc: "papuaNewGuinea",
            hardTime: 4,
            imgLink: "assets/images/china.jpg"
        },
        russia: {
            city: "Moscow",
            country: "Russia",
            questionType: "hard",
            easyLoc: "japan",
            easyTime: 8,
            hardLoc: "papuaNewGuinea",
            hardTime: 4,
            imgLink: "assets/images/russia.jpg"
        },
        papuaNewGuinea: {
            city: "Port Moresby",
            country: "Papua New Guinea",
            questionType: "hard",
            easyLoc: "australia",
            easyTime: 8,
            hardLoc: "australia",
            hardTime: 4,
            imgLink: "assets/images/papuaNewGuinea.jpg"
        },
        japan: {
            city: "Tokyo",
            country: "Japan",
            questionType: "easy",
            easyLoc: "australia",
            easyTime: 8,
            hardLoc: "australia",
            hardTime: 4,
            imgLink: "assets/images/japan.jpg"
        },
        australia: {
            city: "Canberra",
            country: "Australia",
            questionType: "easy",
            easyLoc: "australia",
            easyTime: 8,
            hardLoc: "australia",
            hardTime: 4,
            imgLink: "assets/images/australia.jpg"
        },
        key: function (n) {
            return this[Object.keys(this)[n]];
        }
    };

    // question topics
    var questionCategories = [
        "General Knowledge",
        "Science & Nature",
        "Mythology",
        "Geography",
        "History",
        "Politics",
        "Art",
        "Animals",
    ];

    var userName = undefined; //user name get from opening submit form. Make input required
    var TOTALTIME = 0; // starts at zero ends at time value to complete game 
    var categoryChoice; //user category choice get from opening submit form. Make input required

    // random locations array to be sent to if there is bad weather
    var randLocs = ["argentina", "venezuela", "norway", "southAfrica", "morocco", "djibouti",
        "yemen", "malta", "india", "turkmenistan", "indonesia", "china", "russia"]

    var easyQuestionButtons = [];
    var hardQuestionButtons = [];
    var easyResponse
    var hardResponse

    var easyOption
    var hardOption
    var card1
    var card2

    var incorrect = 0;

    //open trivia api call

    function getEasyQuestion() {
        var queryURL = "https://opentdb.com/api.php?amount=1&categorie=" + categoryChoice + "&difficulty=easy&type=multiple";
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            easyResponse = response
            makeEasyQuestionButtons();
            renderEasyQuestionButtons();
        });
    };

    //question functions
    function makeEasyQuestionButtons() {
        easyQuestionText = ("<h4 id='easyQuestionText'>" + easyResponse.results[0].question + "</h4>");
        easyQuestionButtons[0] = ("<button class='option correct' id='easyOption1'>" + easyResponse.results[0].correct_answer + "</button>");
        easyQuestionButtons[1] = ("<button class='option incorrect' id='easyOption2'>" + easyResponse.results[0].incorrect_answers[0] + "</button>");
        easyQuestionButtons[2] = ("<button class='option incorrect' id='easyOption3'>" + easyResponse.results[0].incorrect_answers[1] + "</button>");
        easyQuestionButtons[3] = ("<button class='option incorrect' id='easyOption4'>" + easyResponse.results[0].incorrect_answers[2] + "</button>");
        easyQuestionButtons.sort(function (a, b) { return 0.5 - Math.random() });
    };

    function renderEasyQuestionButtons() {
        $("#cardEasyQuestion").html(easyQuestionText + "<br>" + easyQuestionButtons[0] + "<br>" + easyQuestionButtons[1] + "<br>" + easyQuestionButtons[2] + "<br>" + easyQuestionButtons[3]);
    };

    function getHardQuestion() {
        var queryURL = "https://opentdb.com/api.php?amount=1&categorie=" + categoryChoice + "&difficulty=hard&type=multiple";
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            hardResponse = response
            makeHardQuestionButtons();
            renderHardQuestionButtons();
        });
    };

    //question functions
    function makeHardQuestionButtons() {
        hardQuestionText = ("<h4 id='hardQuestionText'>" + hardResponse.results[0].question + "</h4>");
        hardQuestionButtons[0] = ("<button class='option correct' id='hardOption1'>" + hardResponse.results[0].correct_answer + "</button>");
        hardQuestionButtons[1] = ("<button class='option incorrect' id='hardOption2'>" + hardResponse.results[0].incorrect_answers[0] + "</button>");
        hardQuestionButtons[2] = ("<button class='option incorrect' id='hardOption3'>" + hardResponse.results[0].incorrect_answers[1] + "</button>");
        hardQuestionButtons[3] = ("<button class='option incorrect' id='hardOption4'>" + hardResponse.results[0].incorrect_answers[2] + "</button>");
        hardQuestionButtons.sort(function (a, b) { return 0.5 - Math.random() });
    };

    function renderHardQuestionButtons() {
        $("#cardHardQuestion").html(hardQuestionText + "<br>" + hardQuestionButtons[0] + "<br>" + hardQuestionButtons[1] + "<br>" + hardQuestionButtons[2] + "<br>" + hardQuestionButtons[3]);
    };

    function newCards() {
        // $("#cardHardQuestion").html("");
        // $("#cardEasyQuestion").html("");
        $("#current").text(displayLocation);
        cardEasyDestination();
        cardHardDestination();
        //changes background image
        $(".container").css("background-image", "url(" + currentLocation.imgLink + ")")
    }

    // Calling weather API, getting current conditions in city user is going to, and changing TOTALTIME according to degree of weather
    function getWeather() {
        var city = currentLocation.country + "/" + currentLocation.city + ".json";
        console.log(city);

        var queryURL = "https://api.wunderground.com/api/c2f13b0c2d6e1c55/conditions/q/" + city;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var results = response.current_observation;
            var weather = results.weather;
            console.log(weather);
            $("#weather").text("Current Weather: " + weather);
            // Changing TOTALTIME based on current weather condition of user travel location
            if ((weather === "Clear") || (weather === "Partly Cloudy") || (weather === "Scattered Clouds") || (weather === "Mostly Cloudy")) {
                TOTALTIME = TOTALTIME - 2; // Take 2 hours off total time for good weather travel
            // } else if ((weather === "Squalls") || (weather === "Small Hail") || (weather === "Funnel Cloud")) {
                // Go to random location for really bad weather
            } else {
                TOTALTIME = TOTALTIME + 2; // Add 2 hours to total time for bad weather travel
            }
            // update the countdown clock with travel time
            console.log("total time is: " + TOTALTIME);
        });
    }

    //returns a random location from the array to be sent to due to bad weather
    var goRand = function () {
        randomLocation = randLocs[Math.floor(Math.random() * randLocs.length)];
        currentLocation = countries[randomLocation];
        displayLocation = currentLocation.city + ", " + currentLocation.country;
        newCards();
    }

    if (currentLocation === "australia") {
        endgame();
    }
    //when reaching final destination
    var endgame = function () {
        $("#endModal").modal()
        playerToLeaderboard() //push player info to leaderboard
        getLeaderboard() //get leaderboard for display
    }

    $("#restart").on("click", function(){
        //need to reset clock
        TOTALTIME = 0
        userName = undefined;
        $("#modal1").modal()
    })


    var currentLocation = countries.key(0);
    var displayLocation = currentLocation.city + ", " + currentLocation.country;
    $("#current").text(displayLocation);

    function cardEasyDestination() {
        easyOption = currentLocation.easyLoc;
        var card1Time = countries[easyOption].city + ", " + countries[easyOption].country + ": " + countries[easyOption].easyTime + " hours";
        card1 = countries[easyOption].city + ", " + countries[easyOption].country;
        $(".card1").text(card1Time);
        $("#card1img").attr("src", countries[easyOption].imgLink);
        getEasyQuestion();
    };

    function cardHardDestination() {
        hardOption = currentLocation.hardLoc;
        var card2Time = countries[hardOption].city + ", " + countries[hardOption].country + ": " + countries[hardOption].hardTime + " hours";
        card2 = countries[hardOption].city + ", " + countries[hardOption].country;
        $(".card2").text(card2Time);
        $("#card2img").attr("src", countries[hardOption].imgLink);
        getHardQuestion();
    };

    $(document).on("click", ".card", function () {
        if ($(this).attr("id") === "card1") {
            currentLocation = countries[easyOption];
            displayLocation = card1;
            TOTALTIME = TOTALTIME + currentLocation.easyTime;
            console.log(this);
            console.log("going to the easy place");
        } else if ($(this).attr("id") === "card2") {
            currentLocation = countries[hardOption];
            displayLocation = card2;
            TOTALTIME = TOTALTIME + currentLocation.hardTime;
            console.log(this);
            console.log("going to the hard place");
        }
    });

    $(document).on("click", ".correct", function () {
        var city = currentLocation.country + "/" + currentLocation.city + ".json";
        getWeather();
        newCards();
    })

    $(document).on("click", ".incorrect", function () {
        incorrect++;
        console.log(incorrect);
        if (incorrect === 1) {
            $(this).closest("div").html("Sorry, that was incorrect! Try for the other destination!");
        } else if (incorrect === 2) {
            goRand();
            incorrect = 0;
        } else {
            console.log("Incorrect is a weird value:" + incorrect);
        }
    })

    var config = {
        apiKey: "AIzaSyDhuFW_sSUhJhs9WifwBaQK1RpzFdG04uI",
        databaseURL: "https://pbc-groupproject1.firebaseio.com/"
    };
    firebase.initializeApp(config);
    var database = firebase.database()

    var countdown;

    var countdownFunc = function () {
        FlipClock.Lang.Custom = { days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds' };
        var opts = {
            clockFace: 'DailyCounter',
            countdown: false,
            language: 'Custom'
        };
        opts.classes = {
            active: 'flip-clock-active',
            before: 'flip-clock-before',
            divider: 'flip-clock-divider',
            dot: 'flip-clock-dot',
            label: 'flip-clock-label',
            flip: 'flip',
            play: 'play',
            wrapper: 'flip-clock-small-wrapper'
        };
        countdown = 0;
        //1521451240 - ((new Date().getTime())/1000); // from: 03/23/2014 04:24 pm -0400
        //countdown = Math.max(1, countdown);
        $('.clock-builder-output').FlipClock(countdown, opts);
    };

    var playerChoices = function () { //on click to submit player name
        if (userName === undefined) {
            userName = $("#icon_prefix2").val().trim();
            userName = JSON.stringify(userName);
            categoryChoice = $("#dropdown option:selected").val()
            $("#card1").css("visibility", "visible")
            $("#card2").css("visibility", "visible")
            cardEasyDestination();
            cardHardDestination();
            getWeather();
            $(countdownFunc())
        }

        console.log(categoryChoice);

        $("#beginButton").css("visibility", "hidden")
        categoryChoice = $("#dropdown option:selected").val()

        $("#modal1").removeClass("open") //ideally this should be toggled instead
    }

    $("#submit").on("click", playerChoices)

    //add to firebase leaderboard
    var playerToLeaderboard = function () {
        database.ref().child(userName).set({
            Name: userName,
            Score: userScore,
            sortBy: userScore * -1,
            Category: categoryChoice
        })
    }

    //pull leaderboard for display at the end of game
    var getLeaderboard = function () {
        //add to leaderboard
        database.orderByChild("sortBy").limitToFirst(10).once("value", function (snapshot) {
            snapshot.forEach(function (child) {
                var name = child.val().Name;
                var score = child.val().Score;
                var category = child.val().Category;
                $("tbody").append("<tr><td>" + name + "</td><td>" + score + "</td><td>" + category + "</td><tr>");
            })
        });
        $("tbody").append("<hr><tr><td>" + userName + "</td><td>" + TOTALTIME + "</td><td>" + categoryChoice + "</td><tr>")
    };
//start game modal
    $('#modal1').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        //ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        //console.log(modal, trigger);
        // },
        //!!!!!!!!!!!!!!!!!!!!CALLBACK FOR MODAL CLOSE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //complete: function() { alert('Closed'); }  
    });

    $('#endModal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        //ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        //console.log(modal, trigger);
        // },
        //!!!!!!!!!!!!!!!!!!!!CALLBACK FOR MODAL CLOSE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //complete: function() { alert('Closed'); }  
    });
});
