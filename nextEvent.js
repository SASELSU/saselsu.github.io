let SHEET_ID = '1jdryhHIOL_nQ6ozCahHkzYTGqnEknbeiUh9cyu2q4eM';
let SHEET_TITLE = 'SASE Website Calendar Information';
let SHEET_RANGE = 'A1:F1';

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
        .then(rep => {
            let data = JSON.parse(rep.substr(47).slice(0,-2));

            

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