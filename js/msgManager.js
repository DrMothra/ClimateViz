/**
 * Created by atg on 02/03/2015.
 */

var msgManager = (function()  {

    var currentMsg = null;

    return {
        setMessage: function(text) {
            currentMsg = text;
        },

        getMessage: function() {
            return currentMsg;
        }
    }


})();