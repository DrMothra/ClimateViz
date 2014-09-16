/**
 * Created by atg on 16/09/2014.
 */

var date = null;
var code = null;

function onGetData() {
    //Get timestream data
    date = parseInt($('#dob').val());
    console.log('DOB =', date);

    code = parseInt($('#timeStamp').val());
    console.log('Time =', code);

    //Construct http request
    //var min = timeStamp - this.timeOffset;
    //var max = timeStamp + this.timeOffset;
    var remoteURL = 'http://www.timestreams.org.uk/wp-content/plugins/timestreams/2/';
    var measure = 'measurement_container/wp_ekx42t_1_ts_temperature_4';
    var publicKey = 'c9bcd7f338';
    var timeStamp = Math.round(Date.now() / 1000);
    //timeStamp -= (8*60*60);
    var limit = 10;
    var max = code + (16*60);
    var cmd = remoteURL + measure + '?pubkey=' + publicKey + '&now=' + timeStamp + '&min='+code + '&max='+max;
    //DEBUG
    console.log('Cmd =', cmd);

    //this.xmlHttp.open( "GET", cmd, true );

    //this.xmlHttp.send( null );
}



$(document).ready(function() {

    $("#getData").on('click', function(evt) {
        onGetData();
        window.open('pictures.html?dob='+date+'&code='+code, '_self');
    });

    console.log('Date =', date);
});