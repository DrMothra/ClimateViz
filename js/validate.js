/**
 * Created by DrTone on 27/02/2015.
 */
//Validate the prediction input



var predict = null;
var defaultPrediction = 'In 2045...';
var date = null;
var code = null;
var validData = false;

function onGetData() {
    //Validate data
    predict = $('#promise').val();
    if(predict === '' || predict === defaultPrediction) return 'badPromise';

    date = parseInt($('#dob').val());

    if(isNaN(date) || date < 1914 || date > 2015) return 'badDate';

    //Allowable dates - October 2014 to March 2015
    var lower = Math.round(new Date(2014, 9, 1, 0, 0, 0).getTime()/1000);
    var upper = Math.round(new Date(2015, 2, 31, 23, 59, 59).getTime()/1000);

    code = parseInt($('#timeStamp').val());

    if(isNaN(code) || code < lower || code > upper) return 'badCode';

    //Don't allow codes in the future
    var now = Math.round(new Date().getTime()/1000);
    if(code > now) return 'badCode';

    //Options for users with no code - get data from 30 minutes ago
    if(code == lower) {
        code = now - (60*30);
    }

    validData = true;
}

function displayError(msg) {
    //Display error message
    var output = $('#msgOutput');
    if(output) {
        output.html(msg);
    }
}

var remoteURL = 'http://www.timestreams.org.uk/wp-content/plugins/timestreams/2/';

$(document).ready(function() {
    //GUI callbacks
    var predictText = $('#promise');
    predictText.val(defaultPrediction);
    $("#getData").on('click', function (evt) {
        var status = onGetData();
        if (validData) {
            window.open('predictions.html?dob=' + date + '&code=' + code + '&predict=' + predict, '_self');
        } else {
            switch (status) {
                case 'badDate':
                    displayError('Enter a correct birth year');
                    break;

                case 'badCode':
                    displayError('Enter a valid prediction code');
                    break;

                case 'badPromise':
                    displayError('You forgot to add your promise, wish or prediction!');
                    break;

                default :
                    displayError('Incorrect numbers - try again');
            }
        }
    })

});

