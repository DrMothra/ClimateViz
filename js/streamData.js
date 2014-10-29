/**
 * Created by atg on 16/09/2014.
 */

    var minYear = 1914;
    var meanYearlyPrecipOct =
[
    {"1914" : 56.2},
    {"1915" : 38.6},
    {"1916" : 59.7},
    {"1917" : 81.0},
    {"1918" : 43.9},
    {"1919" : 58.5},
    {"1920" : 36.5},
    {"1921" : 42.5},
    {"1922" : 24.2},
    {"1923" : 81.8},
    {"1924" :103.7},
    {"1925" : 69.5},
    {"1926" : 64.0},
    {"1927" : 55.0},
    {"1928" : 94.7},
    {"1929" : 77.6},
    {"1930" : 42.6},
    {"1931" : 19.1},
    {"1932" : 87.2},
    {"1933" : 81.3},
    {"1934" : 39.8},
    {"1935" : 75.1},
    {"1936" : 47.0},
    {"1937" : 58.6},
    {"1938" : 65.3},
    {"1939" :111.3},
    {"1940" : 82.8},
    {"1941" : 64.6},
    {"1942" : 63.3},
    {"1943" : 41.5},
    {"1944" : 71.0},
    {"1945" : 77.6},
    {"1946" : 33.9},
    {"1947" :  8.3},
    {"1948" : 57.4},
    {"1949" :100.2},
    {"1950" : 20.0},
    {"1951" : 26.1},
    {"1952" : 66.9},
    {"1953" : 54.8},
    {"1954" : 67.2},
    {"1955" : 59.6},
    {"1956" : 38.9},
    {"1957" : 36.0},
    {"1958" : 56.7},
    {"1959" : 48.2},
    {"1960" :126.0},
    {"1961" : 69.5},
    {"1962" : 20.8},
    {"1963" : 37.2},
    {"1964" : 31.1},
    {"1965" : 15.0},
    {"1966" : 86.7},
    {"1967" :105.4},
    {"1968" : 52.9},
    {"1969" :  8.6},
    {"1970" : 29.0},
    {"1971" : 54.1},
    {"1972" : 18.3},
    {"1973" : 42.2},
    {"1974" : 97.0},
    {"1975" : 22.3},
    {"1976" :106.2},
    {"1977" : 25.8},
    {"1978" :  9.0},
    {"1979" : 56.3},
    {"1980" : 88.1},
    {"1981" : 68.2},
    {"1982" : 81.0},
    {"1983" : 39.2},
    {"1984" : 49.5},
    {"1985" : 34.1},
    {"1986" : 58.0},
    {"1987" :116.5},
    {"1988" : 49.4},
    {"1989" : 52.6},
    {"1990" : 61.7},
    {"1991" : 35.1},
    {"1992" : 75.4},
    {"1993" : 76.6},
    {"1994" : 64.3},
    {"1995" : 22.1},
    {"1996" : 50.6},
    {"1997" : 55.5},
    {"1998" : 99.3},
    {"1999" : 76.4},
    {"2000" :104.7},
    {"2001" : 80.0},
    {"2002" :105.3},
    {"2003" : 49.5},
    {"2004" :100.6},
    {"2005" : 69.8},
    {"2006" : 72.3},
    {"2007" : 39.0},
    {"2008" : 61.7},
    {"2009" : 49.1},
    {"2010" : 56.4},
    {"2011" : 35.7},
    {"2012" : 76.5},
    {"2013" :103.1},
    {"2014" :-99.9}
];

var meanYearlyOct =
    [
{"1914" : 10.3},
{"1915" : 9.1},
{"1916" : 10.55},
{"1917" : 7.5},
{"1918" : 9.3},
{"1919" : 7.35},
{"1920" : 10.4},
{"1921" : 12.8},
{"1922" : 8.2},
{"1923" : 9.7},
{"1924" : 10.1},
{"1925" : 10.4},
{"1926" : 8.1},
{"1927" : 10.5},
{"1928" : 10.1},
{"1929" : 9.6},
{"1930" : 10.55},
{"1931" : 8.8},
{"1932" : 8.8},
{"1933" : 10.10},
{"1934" : 10.6},
{"1935" : 9.5},
{"1936" : 9.4},
{"1937" : 10.4},
{"1938" : 10.5},
{"1939" : 8.2},
{"1940" : 9.6},
{"1941" : 10.4},
{"1942" : 10.39},
{"1943" : 10.60},
{"1944" : 9.3},
{"1945" : 11.95},
{"1946" : 9.8},
{"1947" : 10.6},
{"1948" : 10.14},
{"1949" : 11.7},
{"1950" : 9.60},
{"1951" : 9.4},
{"1952" : 8.8},
{"1953" : 9.7},
{"1954" : 11.9},
{"1955" : 9.2},
{"1956" : 9.4},
{"1957" : 10.8},
{"1958" : 10.8},
{"1959" : 12.6},
{"1960" : 10.3},
{"1961" : 10.9},
{"1962" : 10.39},
{"1963" : 11.15},
{"1964" : 8.9},
{"1965" : 11},
{"1966" : 10.1},
{"1967" : 10.8},
{"1968" : 12.5},
{"1969" : 13},
{"1970" : 10.7},
{"1971" : 11.3},
{"1972" : 10.6},
{"1973" : 9},
{"1974" : 7.8},
{"1975" : 9.85},
{"1976" : 10.6},
{"1977" : 11.75},
{"1978" : 11.9},
{"1979" : 11.35},
{"1980" : 9.05},
{"1981" : 8.55},
{"1982" : 10.05},
{"1983" : 10.45},
{"1984" : 11.1},
{"1985" : 10.95},
{"1986" : 11},
{"1987" : 9.7},
{"1988" : 10.39},
{"1989" : 11.7},
{"1990" : 11.85},
{"1991" : 10.2},
{"1992" : 7.8},
{"1993" : 8.45},
{"1994" : 10.2},
{"1995" : 12.9},
{"1996" : 11.65},
{"1997" : 10.25},
{"1998" : 10.64},
{"1999" : 10.7},
{"2000" : 10.3},
{"2001" : 13.29},
{"2002" : 10.1},
{"2003" : 9.25},
{"2004" : 10.5},
{"2005" : 13.1},
{"2006" : 13.05},
{"2007" : 10.85},
{"2008" : 9.65},
{"2009" : 11.55},
{"2010" : 10.35},
{"2011" : 12.65},
{"2012" : 9.65},
{"2013" : 12.5},
{"2014" : -99}
        ];

var meanYearlyNov =
    [
        {"1914" :   6.8},
        {"1915" :   2.8},
        {"1916" :   6.8},
        {"1917" :   7.8},
        {"1918" :   5.5},
        {"1919" :   3.3},
        {"1920" :   6.8},
        {"1921" :   4.6},
        {"1922" :   5.9},
        {"1923" :   3.3},
        {"1924" :   7.1},
        {"1925" :   3.6},
        {"1926" :   5.9},
        {"1927" :   6.2},
        {"1928" :   7.6},
        {"1929" :   6.7},
        {"1930" :   6.2},
        {"1931" :   7.8},
        {"1932" :   6.6},
        {"1933" :   5.6},
        {"1934" :   6.1},
        {"1935" :   6.9},
        {"1936" :   5.5},
        {"1937" :   5.1},
        {"1938" :   9.4},
        {"1939" :   8.7},
        {"1940" :   6.9},
        {"1941" :   6.6},
        {"1942" :   4.9},
        {"1943" :   6.3},
        {"1944" :   6.2},
        {"1945" :   7.2},
        {"1946" :   8.1},
        {"1947" :   7.2},
        {"1948" :   7.3},
        {"1949" :   6.6},
        {"1950" :   5.7},
        {"1951" :   8.5},
        {"1952" :   4.2},
        {"1953" :   8.5},
        {"1954" :   6.9},
        {"1955" :   7.0},
        {"1956" :   6.0},
        {"1957" :   6.4},
        {"1958" :   6.4},
        {"1959" :   7.1},
        {"1960" :   7.3},
        {"1961" :   6.0},
        {"1962" :   5.5},
        {"1963" :   8.2},
        {"1964" :   7.4},
        {"1965" :   4.5},
        {"1966" :   5.6},
        {"1967" :   5.4},
        {"1968" :   6.5},
        {"1969" :   5.4},
        {"1970" :   7.8},
        {"1971" :   6.0},
        {"1972" :   6.3},
        {"1973" :   6.0},
        {"1974" :   6.8},
        {"1975" :   6.3},
        {"1976" :   6.3},
        {"1977" :   6.6},
        {"1978" :   8.5},
        {"1979" :   6.8},
        {"1980" :   6.6},
        {"1981" :   7.8},
        {"1982" :   8.0},
        {"1983" :   7.5},
        {"1984" :   8.0},
        {"1985" :   4.1},
        {"1986" :   7.8},
        {"1987" :   6.5},
        {"1988" :   5.2},
        {"1989" :   6.2},
        {"1990" :   6.9},
        {"1991" :   6.8},
        {"1992" :   7.4},
        {"1993" :   4.6},
        {"1994" :  10.1},
        {"1995" :   7.7},
        {"1996" :   5.9},
        {"1997" :   8.4},
        {"1998" :   6.2},
        {"1999" :   7.9},
        {"2000" :   7.0},
        {"2001" :   7.5},
        {"2002" :   8.5},
        {"2003" :   8.1},
        {"2004" :   7.7},
        {"2005" :   6.2},
        {"2006" :   8.1},
        {"2007" :   7.3},
        {"2008" :   7.0},
        {"2009" :   8.7},
        {"2010" :   5.2},
        {"2011" :   9.6},
        {"2012" :   6.8},
        {"2013" :   6.2},
        {"2014" :   -99}
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
    if(data.data.length == 0) return null;

    console.log("Data =", data.data[0].value);

    return data.data[0].value;
}

function updateTempImage(value, container) {
    //Display image according to temperature
    var temp = null;
    if(value != null) {
        for(var i=0; i<tempRanges.length; ++i) {
            if(value > tempRanges[i]) {
                temp = tempRanges[i];
                break;
            }
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
        case null:
            image.attr('src', 'images/error.png');
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
                output.html(value != null ? value : 'Oops! No data!');
                //Update temperature image if required
                if(container.indexOf('temperature') >= 0) {
                    updateTempImage(value, container);
                }
            }
        }
    };

    //Check for data 16 minutes either side
    var diff = 16 * 60;

    //code += timeOffset;
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
    var data = meanYearlyNov[birthYear-minYear];
    var output = $('#temperaturePast');
    output.html(data[birthYear]);

    updateTempImage(data[birthYear], 'temperaturePast');

    output = $('#pastDate');
    output.html('Past - October '+birthYear);
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
        //getTimestreamData(dob, code, measurements[1], 'precipitationPresent');
        getTimestreamData(dob, code, measurements[2], 'temperatureFuture');
        getPastData(dob);
    }
});
