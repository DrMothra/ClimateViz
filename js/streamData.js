/**
 * Created by atg on 16/09/2014.
 */

var remoteURL = 'http://www.timestreams.org.uk/wp-content/plugins/timestreams/2/';

function parseParams(param, paramText) {
    //Parse text for required parameters
    param += '=';
    var index = paramText.indexOf(param);
    console.log('Index =', index);
    if(index >= 0) {
        index += param.length;
        var data = parseInt(paramText.substr(index));
        if(isNaN(data)) {
            return null
        } else {
            return data;
        }
    }

    return null;
}

function getValue(response) {
    //Get temperature value from response
    var data = JSON.parse(response);
    console.log("Data =", data.data[0].value);

    return data.data[0].value;
}

function getTimestreamData(dob, code, measure, container) {
    //Get timestream data

    //Construct http request
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 )
        {
            if ( xmlHttp.responseText == "Not found" )
            {
                console.log('Not found');
            }
            else
            {
                console.log('response =', xmlHttp.responseText);
                var value = getValue(xmlHttp.responseText);
                var output = $('#'+container);
                output[0].innerHTML = value;
            }
        }
    };

    //Check for data 8 minutes either side
    var diff = 8 * 60;
    //8 hour adjustment for US server + GMT
    var timeOffset = 60 * 60 * 8;
    code += timeOffset;
    var min = code - diff;
    var max = code + diff;

    var publicKey = 'c9bcd7f338';
    var timeStamp = Math.round(Date.now() / 1000);
    var cmd = remoteURL + measure + '?pubkey=' + publicKey + '&now=' + timeStamp + '&min='+min + '&max='+max;
    //DEBUG
    console.log('Cmd =', cmd);

    xmlHttp.open( "GET", cmd, true );

    xmlHttp.send( null );
}

$(document).ready(function() {

    var measurements = ['measurement_container/wp_ekx42t_1_ts_temperature_4', 'measurement_container/wp_ekx42t_1_ts_precipitation_5',
        'measurement_container/wp_ekx42t_1_ts_temperature_14'];
    var dob = parseParams('dob', window.location.search);
    console.log('DOB =', dob);

    var code = parseParams('code', window.location.search);
    console.log('Code =', code);

    if(dob!= null && code!=null) {
        getTimestreamData(dob, code, measurements[0], 'temperaturePresent');
        getTimestreamData(dob, code, measurements[1], 'precipitationPresent');
        getTimestreamData(dob, code, measurements[2], 'temperatureFuture');
    }
});
