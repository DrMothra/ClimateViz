/**
 * Created by atg on 16/09/2014.
 */

var date = null;
var code = null;
var validData = false;

function onGetData() {
    //Validate data
    date = parseInt($('#dob').val());
    //DEBUG
    //console.log('DOB =', date);

    if(isNaN(date) || date < 1914 || date > 2014) return 'badDate';

    //Adjust these to October - set to September for testing
    var lower = Math.round(new Date(2014, 8, 1, 0, 0, 0).getTime()/1000);
    var upper = Math.round(new Date(2014, 9, 31, 23, 59, 59).getTime()/1000);
    //DEBUG
    //console.log('Limits =', upper, lower);

    code = parseInt($('#timeStamp').val());
    //DEBUG
    //console.log('Time =', code);

    if(isNaN(code) || code < lower || code > upper) return 'badCode';

    validData = true;
}

function displayError(msg) {
    //Display error message
    var output = $('#msgOutput');
    if(output) {
        output.html(msg);
    }
}

$(document).ready(function() {

    $("#getData").on('click', function(evt) {
        var status = onGetData();
        if(validData) {
            window.open('weather.html?dob='+date+'&code='+code, '_self');
        } else {
            switch (status) {
                case 'badDate':
                    displayError('Enter a correct birth year');
                    break;

                case 'badCode':
                    displayError('Enter a valid prediction code');
                    break;

                default :
                    displayError('Incorrect numbers - try again');
            }
        }
    });

});