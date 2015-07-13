/**
 * Created by DrTone on 28/08/2014.
 */

//Temperature data

var maxYearly =
    [
        {"1914" : 13.69},
        {"1915" : 12.68},
        {"1916" : 12.70},
        {"1917" : 12.07},
        {"1918" : 13.16},
        {"1919" : 12.14},
        {"1920" : 12.99},
        {"1921" : 14.41},
        {"1922" : 12.18},
        {"1923" : 12.46},
        {"1924" : 12.52},
        {"1925" : 12.69},
        {"1926" : 13.12},
        {"1927" : 12.43},
        {"1928" : 13.23},
        {"1929" : 12.91},
        {"1930" : 12.74},
        {"1931" : 12.34},
        {"1932" : 12.82},
        {"1933" : 13.68},
        {"1934" : 13.78},
        {"1935" : 13.31},
        {"1936" : 12.79},
        {"1937" : 13.05},
        {"1938" : 13.84},
        {"1939" : 13.20},
        {"1940" : 12.95},
        {"1941" : 12.61},
        {"1942" : 12.68},
        {"1943" : 13.81},
        {"1944" : 13.20},
        {"1945" : 13.90},
        {"1946" : 12.99},
        {"1947" : 13.24},
        {"1948" : 13.72},
        {"1949" : 14.60},
        {"1950" : 12.89},
        {"1951" : 12.76},
        {"1952" : 12.69},
        {"1953" : 13.52},
        {"1954" : 12.62},
        {"1955" : 13.15},
        {"1956" : 12.44},
        {"1957" : 13.68},
        {"1958" : 12.85},
        {"1959" : 14.60},
        {"1960" : 13.34},
        {"1961" : 13.72},
        {"1962" : 12.15},
        {"1963" : 12.02},
        {"1964" : 13.12},
        {"1965" : 12.50},
        {"1966" : 12.84},
        {"1967" : 13.00},
        {"1968" : 12.62},
        {"1969" : 12.77},
        {"1970" : 13.19},
        {"1971" : 13.36},
        {"1972" : 12.68},
        {"1973" : 13.28},
        {"1974" : 13.15},
        {"1975" : 13.83},
        {"1976" : 13.93},
        {"1977" : 12.87},
        {"1978" : 12.88},
        {"1979" : 12.33},
        {"1980" : 12.96},
        {"1981" : 12.75},
        {"1982" : 13.54},
        {"1983" : 13.61},
        {"1984" : 13.54},
        {"1985" : 12.33},
        {"1986" : 12.29},
        {"1987" : 12.45},
        {"1988" : 13.28},
        {"1989" : 14.45},
        {"1990" : 14.56},
        {"1991" : 13.21},
        {"1992" : 13.47},
        {"1993" : 12.99},
        {"1994" : 13.76},
        {"1995" : 14.42},
        {"1996" : 12.87},
        {"1997" : 14.36},
        {"1998" : 13.93},
        {"1999" : 14.40},
        {"2000" : 13.90},
        {"2001" : 13.65},
        {"2002" : 14.33},
        {"2003" : 14.80},
        {"2004" : 14.08},
        {"2005" : 14.21},
        {"2006" : 14.52},
        {"2007" : 14.20},
        {"2008" : 13.60},
        {"2009" : 13.82},
        {"2010" : 12.60},
        {"2011" : 14.53},
        {"2012" : 13.41},
        {"2013" : 13.25},
        {"2014" : 0.1}
    ];

var minYearly =
    [
        {"1914" : 6.08},
        {"1915" : 5.19},
        {"1916" : 5.67},
        {"1917" : 4.95},
        {"1918" : 5.85},
        {"1919" : 4.82},
        {"1920" : 6.17},
        {"1921" : 6.53},
        {"1922" : 5.17},
        {"1923" : 5.71},
        {"1924" : 6.02},
        {"1925" : 5.65},
        {"1926" : 6.33},
        {"1927" : 5.98},
        {"1928" : 5.93},
        {"1929" : 5.12},
        {"1930" : 6.12},
        {"1931" : 5.65},
        {"1932" : 5.95},
        {"1933" : 5.99},
        {"1934" : 6.21},
        {"1935" : 6.12},
        {"1936" : 5.86},
        {"1937" : 6.09},
        {"1938" : 6.52},
        {"1939" : 6.16},
        {"1940" : 5.17},
        {"1941" : 5.58},
        {"1942" : 5.43},
        {"1943" : 6.27},
        {"1944" : 5.94},
        {"1945" : 6.66},
        {"1946" : 5.90},
        {"1947" : 5.91},
        {"1948" : 6.30},
        {"1949" : 6.64},
        {"1950" : 5.93},
        {"1951" : 5.77},
        {"1952" : 5.51},
        {"1953" : 6.18},
        {"1954" : 5.82},
        {"1955" : 5.43},
        {"1956" : 5.24},
        {"1957" : 6.37},
        {"1958" : 6.00},
        {"1959" : 6.37},
        {"1960" : 6.12},
        {"1961" : 6.17},
        {"1962" : 5.03},
        {"1963" : 4.93},
        {"1964" : 5.81},
        {"1965" : 5.39},
        {"1966" : 6.05},
        {"1967" : 6.21},
        {"1968" : 5.98},
        {"1969" : 5.75},
        {"1970" : 5.95},
        {"1971" : 6.00},
        {"1972" : 5.70},
        {"1973" : 5.80},
        {"1974" : 6.08},
        {"1975" : 6.16},
        {"1976" : 6.23},
        {"1977" : 6.08},
        {"1978" : 5.98},
        {"1979" : 5.29},
        {"1980" : 5.90},
        {"1981" : 5.72},
        {"1982" : 6.10},
        {"1983" : 6.44},
        {"1984" : 5.93},
        {"1985" : 5.37},
        {"1986" : 5.17},
        {"1987" : 5.63},
        {"1988" : 6.27},
        {"1989" : 6.52},
        {"1990" : 6.69},
        {"1991" : 5.82},
        {"1992" : 6.22},
        {"1993" : 5.95},
        {"1994" : 6.70},
        {"1995" : 6.58},
        {"1996" : 5.53},
        {"1997" : 6.65},
        {"1998" : 6.75},
        {"1999" : 6.85},
        {"2000" : 6.70},
        {"2001" : 6.21},
        {"2002" : 6.88},
        {"2003" : 6.22},
        {"2004" : 6.89},
        {"2005" : 6.68},
        {"2006" : 7.12},
        {"2007" : 6.75},
        {"2008" : 6.32},
        {"2009" : 6.41},
        {"2010" : 5.06},
        {"2011" : 6.88},
        {"2012" : 5.99},
        {"2013" : 5.88},
        {"2014" : 0.1}
    ];

var remoteURL = 'http://www.timestreams.org.uk/wp-content/plugins/timestreams/2/';

var measurements = ['measurement_container/wp_ekx42t_1_ts_temperature_26', 'measurement_container/wp_ekx42t_1_ts_rainfall_27',
    'measurement_container/wp_ekx42t_1_ts_temperature_29', 'measurement/wp_ekx42t_1_ts_messages_24', 'measurement/wp_ekx42t_1_ts_messages_25'];

//Init this app from base
function ClimateApp(containers) {
    BaseSmoothApp.call(this, containers);
}

ClimateApp.prototype = new BaseSmoothApp();

ClimateApp.prototype.init = function(container, iPad) {
    BaseSmoothApp.prototype.init.call(this, container);
    this.lastValue = null;
    this.dataAvailable = false;

    this.bufferData = [];
    this.bufferSize = 0;
    //Get last 10 hours
    this.timeDelay = 60 * 60 * 13.6;
    this.getTimestreamData(measurements[0], this.timeDelay, null);

    //DEBUG
    var _this = this;
    setInterval(function() {
        var i;
        if(_this.dataAvailable) {
            for(i=_this.bufferSize; i<_this.bufferData.length; i+=2) {
                _this.timeSeries[0].append(new Date().getTime() + (i*1000), _this.bufferData[i+1]);
            }
            _this.bufferSize = _this.bufferData.length;
            _this.dataAvailable = false;
        }
    }, 1000);

};

ClimateApp.prototype.update = function() {
    //Perform any updates
    return;
    var i;
    BaseSmoothApp.prototype.update.call(this);

    if(this.dataAvailable) {
        for(i=this.bufferSize; i<this.bufferData.length; i+=2) {
            this.timeSeries[0].append(new Date().getTime(), Math.random());
        }
        this.bufferSize = this.bufferData.length;
        this.dataAvailable = false;
    }

};

ClimateApp.prototype.createScene = function() {

    //Init base createsScene

};

ClimateApp.prototype.getValues = function(response, measure) {
    //Get temperature value from response
    var buffer;
    var data = JSON.parse(response);
    var index = measure.indexOf('wp_');
    if(index >= 0) {
        measure = measure.substr(index, measure.length-1);
    } else {
        return null;
    }
    if(data[measure] != undefined) {
        buffer = data[measure];
    } else {
        buffer = data.data;
    }

    //console.log("Data =", data.data[0].value);

    //console.log("Id =", buffer[0].id, buffer[0].value);

    for(var i=0; i<buffer.length; ++i) {
        this.bufferData.push(Date.parse(buffer[i].valid_time), buffer[i].value);
    }

    return buffer.length;
};

ClimateApp.prototype.getTimestreamData = function(measure, fromTime, toTime) {
    //Get timestream data
    var _this = this;
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
                var value = _this.getValues(xmlHttp.responseText, measure);
                if(value != null) {
                    _this.lastValue = value;
                    _this.dataAvailable = true;
                    //DEBUG
                    console.log("Data =", _this.lastValue);
                }
            }
        }
    };

    //Check for data 16 minutes either side
    var diff = 16 * 60;

    //code += timeOffset;
    //var min = code - diff;
    //var max = code + diff;

    var publicKey = 'c9bcd7f338';
    var timeStamp = Math.round(Date.now() / 1000);
    //var min = fromTime != undefined ? timeStamp - fromTime : null;
    var min = 0;
    var max = timeStamp;
    var cmd = remoteURL + measure + '?pubkey=' + publicKey + '&now=' + timeStamp;
    if(min === null) {
        cmd += '&action=latest';
    } else {
        cmd += '&min='+min + '&max='+max + '&limit=100' + '&offset=205';
    }

    //DEBUG
    console.log('Cmd =', cmd);

    xmlHttp.open( "GET", cmd, true );

    xmlHttp.send( null );
};

$(document).ready(function() {
    //See if we are ipad
    var isiPad = false;
    var plat = navigator.platform;

    if(plat === 'iPad') {
        isiPad = true;
    }

    //Only stay on page for fixed time
    var timeOut_s = 90;
    /*
    setTimeout(function() {
        window.open('promises.html', '_self');
    }, timeOut_s * 1000);
    */

    //Initialise app
    //Set up smoothie charts
    skel.init();
    var dataDelay = 0;
    var timeStreamCheckInterval = 1000;
    var charts = [
        { id: 'liveTemp', width: 0.85, height: 0.5, background: '#71c5ef', line: '#000000', delay: dataDelay, max: undefined, min: undefined, maxScale: 1.2, minScale: 1.2 }

    ];

    var smoothieApp = new ClimateApp(charts);
    //Set any params
    smoothieApp.setPixelDist(100);
    //smoothieApp.setLineDist(100);
    smoothieApp.setLineWidth(4);
    smoothieApp.setWaveDelay(dataDelay);
    smoothieApp.init();
    //smoothieApp.createScene();

    //Check timestreams periodically
    /*
    setInterval(function() {
            smoothieApp.getTimestreamData(measurements[0]);
    },
        timeStreamCheckInterval);
    */

    //smoothieApp.run();
});