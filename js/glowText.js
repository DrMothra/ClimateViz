/**
 * Created by DrTone on 24/02/2015.
 */
//Textual display for mouse overs
var infoText = (function() {
    //Text for cold and warm temperatures
    var coldText = [

        { '1917' :
          '1917 had a very cold winter, with severe gales and heavy snow this continued into Spring with snow into March and April.' +
          'It was one of the most severe winters of the 1900s , which made things much worse for the people at the trenches in France fighting in World War One.' +
          'It was also a really wet summer with much flooding in Somerset.'},
        { '1919' :
          '1919 was another cold winter, with severe snow storms and blizzards across England, snowing for seven days and more.'},
        { '1952' :
          '1952 was a notably cold autumn, starting with coldest September of the twentieth century and since records began (in 1815).'},
        { '1956' :
            '1956 was the coldest February of the twentieth century, with heavy snow and ice and then the summer was really wet, with hailstones, gales and flooding.'},
        { '1962' :
            'A long cold winter stretching into 1963 and was recorded as the coldest winter of the century.'},
        { '1963' :
            'The coldest winter of the century continued into March, but February was notable by the effects of a volcanic eruption in South East Asia causing temperatures to rise around the world.'}

    ];

    var warmText = [
        { '1959' :
          '1959 was the warmest year so far, reaching similar temperatures to those seen regularly later in the century, there was lots of sunshine and rain too.'},
        { '1975' :
            '1975 had a warm winter and one of the warmest summers so far, but it snowed in June.'},
        { '1976' :
            '1976 was known for it’s heatwave and from 1975 to 1976 it was the driest year ever recorded (since the 1700s), Then it got to be the wettest Autumn since records began. There was also a hurricane in January.'},
        { '1989' :
            '1989 was one of the warmest and driest years with lots more sunshine than normal'},
        { '1990' :
            'Warmest, driest and sunniest on record, with levels of sunshine never before seen in Britain. Although there were some massive storms, gales and tornados and a whirlwind in Wales.'},
        { '1995' :
            'Another record breaking summer, with the driest and sunniest year overall.'},
        { '2006' :
            'A very warm, sunny year and the warmest Autumn recorded but lots of rainfall after a drought caused flooding.'},
        { '2011' :
            'Another warm year, following the ongoing increased in temperature from the 1980s onwards, with droughts in the Midlands causing concern for the water supply.'}

    ];

    return {
        getText: function(name) {
            //Get relevant text
            var temp = name.substr(4, 4);
            var text = temp === 'Cold' ? coldText : warmText;
            var year = name.substr(8, 4);

            var elem;
            for(var i=0; i<text.length; ++i) {
                elem = text[i];
                if(elem[year]) {
                    return elem[year];
                }
            }

            return null;
        }
    }
})();