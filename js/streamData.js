/**
 * Created by atg on 16/09/2014.
 */

    var minYear = 1914;
var maxYearlyOct =
    [
        {"1914" : 13.7},
        {"1915" : 12.4},
        {"1916" : 13.6},
        {"1917" : 11.4},
        {"1918" : 12.4},
        {"1919" : 11.5},
        {"1920" : 13.8},
        {"1921" : 17.1},
        {"1922" : 11.7},
        {"1923" : 12.6},
        {"1924" : 13.0},
        {"1925" : 13.8},
        {"1926" : 11.4},
        {"1927" : 13.9},
        {"1928" : 13.4},
        {"1929" : 13.0},
        {"1930" : 13.6},
        {"1931" : 12.8},
        {"1932" : 12.4},
        {"1933" : 13.3},
        {"1934" : 13.6},
        {"1935" : 12.8},
        {"1936" : 13.0},
        {"1937" : 13.8},
        {"1938" : 13.8},
        {"1939" : 11.8},
        {"1940" : 13.0},
        {"1941" : 13.8},
        {"1942" : 13.7},
        {"1943" : 14.3},
        {"1944" : 12.2},
        {"1945" : 15.5},
        {"1946" : 12.6},
        {"1947" : 14.7},
        {"1948" : 13.7},
        {"1949" : 15.1},
        {"1950" : 12.8},
        {"1951" : 13.1},
        {"1952" : 12.0},
        {"1953" : 13.6},
        {"1954" : 14.9},
        {"1955" : 13.3},
        {"1956" : 12.9},
        {"1957" : 14.4},
        {"1958" : 13.7},
        {"1959" : 17.0},
        {"1960" : 13.3},
        {"1961" : 14.5},
        {"1962" : 14.2},
        {"1963" : 14.3},
        {"1964" : 12.9},
        {"1965" : 14.9},
        {"1966" : 13.4},
        {"1967" : 13.6},
        {"1968" : 15.2},
        {"1969" : 16.5},
        {"1970" : 14.3},
        {"1971" : 15.3},
        {"1972" : 14.2},
        {"1973" : 12.6},
        {"1974" : 10.5},
        {"1975" : 13.6},
        {"1976" : 13.6},
        {"1977" : 15.0},
        {"1978" : 15.5},
        {"1979" : 15.0},
        {"1980" : 12.4},
        {"1981" : 11.9},
        {"1982" : 13.2},
        {"1983" : 13.9},
        {"1984" : 14.4},
        {"1985" : 14.3},
        {"1986" : 14.6},
        {"1987" : 13.2},
        {"1988" : 13.7},
        {"1989" : 15.0},
        {"1990" : 15.0},
        {"1991" : 13.2},
        {"1992" : 10.9},
        {"1993" : 11.8},
        {"1994" : 13.8},
        {"1995" : 16.5},
        {"1996" : 15.0},
        {"1997" : 14.3},
        {"1998" : 13.7},
        {"1999" : 14.4},
        {"2000" : 13.5},
        {"2001" : 16.4},
        {"2002" : 13.8},
        {"2003" : 13.4},
        {"2004" : 13.6},
        {"2005" : 16.1},
        {"2006" : 16.3},
        {"2007" : 14.4},
        {"2008" : 13.4},
        {"2009" : 14.9},
        {"2010" : 13.8},
        {"2011" : 16.3},
        {"2012" : 12.8},
        {"2013" : 15.4},
        {"2014" : 99.9}
    ];

var minYearlyOct =
    [
        {"1914" :  6.9},
        {"1915" :  5.8},
        {"1916" :  7.5},
        {"1917" :  3.6},
        {"1918" :  6.2},
        {"1919" :  3.2},
        {"1920" :  7.0},
        {"1921" :  8.5},
        {"1922" :  4.7},
        {"1923" :  6.8},
        {"1924" :  7.2},
        {"1925" :  7.0},
        {"1926" :  4.8},
        {"1927" :  7.1},
        {"1928" :  6.8},
        {"1929" :  6.2},
        {"1930" :  7.5},
        {"1931" :  4.8},
        {"1932" :  5.2},
        {"1933" :  6.9},
        {"1934" :  7.6},
        {"1935" :  6.2},
        {"1936" :  5.8},
        {"1937" :  7.0},
        {"1938" :  7.2},
        {"1939" :  4.6},
        {"1940" :  6.2},
        {"1941" :  7.0},
        {"1942" :  7.1},
        {"1943" :  6.9},
        {"1944" :  6.4},
        {"1945" :  8.4},
        {"1946" :  7.0},
        {"1947" :  6.5},
        {"1948" :  6.6},
        {"1949" :  8.3},
        {"1950" :  6.4},
        {"1951" :  5.7},
        {"1952" :  5.6},
        {"1953" :  5.8},
        {"1954" :  8.9},
        {"1955" :  5.1},
        {"1956" :  5.9},
        {"1957" :  7.2},
        {"1958" :  7.9},
        {"1959" :  8.2},
        {"1960" :  7.3},
        {"1961" :  7.3},
        {"1962" :  6.6},
        {"1963" :  8.0},
        {"1964" :  4.9},
        {"1965" :  7.1},
        {"1966" :  6.8},
        {"1967" :  8.0},
        {"1968" :  9.8},
        {"1969" :  9.5},
        {"1970" :  7.1},
        {"1971" :  7.3},
        {"1972" :  7.0},
        {"1973" :  5.4},
        {"1974" :  5.1},
        {"1975" :  6.1},
        {"1976" :  7.6},
        {"1977" :  8.5},
        {"1978" :  8.3},
        {"1979" :  7.7},
        {"1980" :  5.7},
        {"1981" :  5.2},
        {"1982" :  6.9},
        {"1983" :  7.0},
        {"1984" :  7.8},
        {"1985" :  7.6},
        {"1986" :  7.4},
        {"1987" :  6.2},
        {"1988" :  7.1},
        {"1989" :  8.4},
        {"1990" :  8.7},
        {"1991" :  7.2},
        {"1992" :  4.7},
        {"1993" :  5.1},
        {"1994" :  6.6},
        {"1995" :  9.3},
        {"1996" :  8.3},
        {"1997" :  6.2},
        {"1998" :  7.6},
        {"1999" :  7.0},
        {"2000" :  7.1},
        {"2001" : 10.2},
        {"2002" :  6.4},
        {"2003" :  5.1},
        {"2004" :  7.4},
        {"2005" : 10.1},
        {"2006" :  9.8},
        {"2007" :  7.3},
        {"2008" :  5.9},
        {"2009" :  8.2},
        {"2010" :  6.9},
        {"2011" :  9.0},
        {"2012" :  6.5},
        {"2013" :  9.6},
        {"2014" : 99.9}
    ];

//Temperatures
var ARCTIC = -7;
var FREEZING = -4;
var COLD = 0;
var MILD = 15;
var WARM = 20;
var HOT = 25;
var HEATWAVE = 200;
var tempRanges = [HEATWAVE, HOT, WARM, MILD, COLD, FREEZING, ARCTIC];

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

function updateTempImage(value, container) {
    //Display image according to temperature
    var temp = null;
    for(var i=0; i<tempRanges.length; ++i) {
        if(value > tempRanges[i]) {
            temp = tempRanges[i];
            break;
        }
    }
    var image = $('#'+container+'Image');
    switch(temp) {
        case HEATWAVE:
            image.attr('src', 'images/heatwave_sketch.jpeg');
            break;
        case HOT:
            image.attr('src', 'images/hot_sketch.jpeg');
            break;
        case WARM:
            image.attr('src', 'images/warm_sketch.jpeg');
            break;
        case MILD:
            image.attr('src', 'images/mild_sketch.jpeg');
            break;
        case COLD:
            image.attr('src', 'images/cold_sketch.jpeg');
            break;
        case FREEZING:
            image.attr('src', 'images/freezing_sketch.jpeg');
            break;
        case ARCTIC:
            image.attr('src', 'images/arctic_sketch.jpeg');
            break;
        default:
            console.log('Invalid temperature');
            break;
    }
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
                output.html(value);
                //Update temperature image if required
                if(container.indexOf('temperature') >= 0) {
                    updateTempImage(value, container);
                }
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

function getPastData(birthYear) {
    //Populate page with past temperature data
    var data = maxYearlyOct[birthYear-minYear];
    var output = $('#temperaturePast');
    output.html(data[birthYear]);

    updateTempImage(data[birthYear], 'temperaturePast');

    output = $('#precipitationPast');
    output.html('0.0');
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
        getPastData(dob);
    }
});
