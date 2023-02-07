var key = '246deb70d3ed5b4b5fb97fc32ae651df';
var city = "London"

//Pin Time and location 

var date = moment().format('ddd, MMMM Do YYYY');
var dateTime = moment().format('YYYY-MM-DD HH:MM:SS')

var cityHist = [];

// saves the search and save to an array. storage is also added

$('.search').on("click", function (event) {
    event.preventDefault();
    city = $(this).parent('.btnPar').siblings('.textVal').val().trim();
    if (city === ""){
        return;
    }
    cityHist.push(city);
    
    localStorage.setItem('city', JSON.stringify(cityHist));
    fiveForecastEl.empty();
    getHistory();
    getWeatherToday();
 
});

//button based on search history
var contHist = $('.cityHist');
function getHistory() {
    contHistEL.empty();

    for (let i =0; i < cityHist.length; i++){
        var rowEl = $('<row>');
        var btnEl =$('<button>').text(`${cityHist[i]}`)

        rowEl.addClass('row histBtnRow');
        btnEl.addClass('btn btn-outline-secondary histBtn')
        btnEl.attr('type', 'button');

        contHistEL.prepend(rowEl);
    } if (!city) {
        return;
    }

    //fixes other searches on search buttons
    $('.histBtn').on("click", function (event){
        event.preventDefault();
        city = $(this).text();
        fiveForecastEl.empty();
        getWeatherToday();
    });

    };

    //refer to main today card body
    var cardTodayBody = $('.cardBodyToday')

    //applies the weather data to today card and the sets the five day forecast
    function getWeatherToday() {
        var getUrlCurrent = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'
        
        $(cardTodayBody).empty();

        $.ajax({
            url: getUrlCurrent,
            method: 'GET',
        }).then(funtion (response){
            $('.cardTodayCityName').text(response.name);
            $('.cardTodayDate').text(date);
            //
        })

    }
    
}
    
}

