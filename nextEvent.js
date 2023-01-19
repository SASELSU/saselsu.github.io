let SHEET_ID = '1jdryhHIOL_nQ6ozCahHkzYTGqnEknbeiUh9cyu2q4eM';
let SHEET_TITLE = 'SASE Website Calendar Information';
let SHEET_RANGE = 'A1:G1';

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(resp => resp.text())
        .then(rep => {
            let data = JSON.parse(rep.substr(47).slice(0,-2));
            console.log(data.table.rows[0].c[6].f);
        fetch('https://api.openweathermap.org/data/2.5/forecast?q=Baton+Rouge&APPID=8c6a6fe0adb497d44d2e1be1c4249979&units=imperial')
            .then(respond => respond.json())
                .then(weatherData => {

                    console.log(weatherData);
                    if (Math.round(Math.abs(new Date() - convertToDate(data.table.rows[0].c[1].v)) / (1000 * 3600 *24)) <= 40) {
                        var i = Math.round(Math.abs(new Date() - convertToDate(data.table.rows[0].c[1].v)) / (1000 * 3600 *24)) - 1;
                        var forecast = capitalize(weatherData.list[i].weather[0].description);
                        document.getElementById('temp').appendChild(document.createTextNode(weatherData.list[i].main.temp + "\xB0"));
                        document.getElementById('weather').appendChild(document.createTextNode(forecast));
                        document.getElementById('weatherPic').src = "https://openweathermap.org/img/wn/"+weatherData.list[i].weather[0].icon+".png";
                    }
                    else{
                        document.getElementById('weather').appendChild(document.createTextNode("No Forecast Available"));
                    }
                })
            

        document.getElementById('EventDescription').appendChild(document.createTextNode(data.table.rows[0].c[5].v));
        document.getElementById('EventTitle').appendChild(document.createTextNode(data.table.rows[0].c[0].v));
        time(data.table.rows[0].c[2].v, data.table.rows[0].c[3].v, data.table.rows[0].c[2].f, data.table.rows[0].c[3].f);
        document.getElementById('EventDate').appendChild(document.createTextNode(date(JSON.stringify(data.table.rows[0].c[1].v))));
        document.getElementById('EventLocation').appendChild(document.createTextNode(data.table.rows[0].c[4].v));
        document.getElementById('mapLocation').src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyBmiTvmgAPTTZEcSBVVy3xSHXNxCRdRA9I&q=" + JSON.stringify(data.table.rows[0].c[4].v);

        })

function date(date){
    let parsedDate = date.match(/\((.*)\)/).pop();
    let dateArr = parsedDate.split(',');

    // [1] is month, [2] is date, [0] is year
    return ((parseInt(dateArr[1])+1) + '/' + dateArr[2] + '/' + dateArr[0])
}

function time(startDate, endDate, startTime, endTime){

    if (date(startDate) === date(endDate)){
        document.getElementById('EventStart').appendChild(document.createTextNode(startTime));
        document.getElementById('EventEnd').appendChild(document.createTextNode(" - " + endTime));
    }

    else {
        document.getElementById('EventStart').appendChild(document.createTextNode(date(startDate)));
        document.getElementById('EventEnd').appendChild(document.createTextNode(" - " + date(endDate)));
    }
}

function convertToDate(data) {
    let parsedDate = data.match(/\((.*)\)/).pop();
    let dateArr = parsedDate.split(',');
    return new Date(dateArr[0] + '-' + (parseInt(dateArr[1])+1) + '-' + dateArr[2]);
}

function capitalize(data){
    let arr = data.split(" ");
    let result = '';

    for (var i = 0; i < arr.length; i++){
        result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + " ";
    }

    return result;
}