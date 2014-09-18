/**
 * Created by DrTone on 28/08/2014.
 */


var maxMonthly =
    [
        {"1914" :[6.1,9.9,9.3,  15.0,  15.2,  19.4,  19.9,  20.6,  18.2,  13.7,9.9,7.1, 13.69]},
        {"1915" :[6.2,7.2,8.6, 12.2,  15.9,  20.0,  18.5,  19.2,  18.0,  12.4,6.0,8.1, 12.68]},
        {"1916" :[10.3,6.5,5.9, 12.6,  16.3,  15.7,  19.8,  20.8,  16.7,  13.6,9.6,4.6, 12.70]},
        {"1917" :[3.1,3.8,6.6,9.4,  18.0,  20.1,  20.8,  18.5,  17.7, 11.4, 10.5,5.0, 12.07]},
        {"1918" :[6.7,9.0,9.6, 10.3, 18.1, 18.3, 20.0, 20.4, 15.1, 12.4,8.8,9.3, 13.16]},
        {"1919" :[5.2,4.4,6.6, 11.1, 18.6, 19.2, 18.0, 20.3, 16.9, 11.5,5.8,8.2, 12.14]},
        {"1920" :[8.0,9.3, 11.0, 11.0, 15.9, 18.8, 17.4, 17.3, 17.1, 13.8,9.8,6.4, 12.99]},
        {"1921" :[9.4,7.7, 10.9, 12.7, 16.5, 20.0, 24.4, 19.1, 18.7, 17.1,7.3,9.2, 14.41]},
        {"1922" :[6.3,7.3,7.4,9.5, 17.9, 18.5, 17.4, 17.2, 15.8, 11.7,9.1,8.0, 12.18]},
        {"1923" :[8.4,8.0,9.7, 11.2, 13.0, 16.1, 21.7, 19.4, 16.5, 12.6,6.3,6.6, 12.46]},
        {"1924" :[,  7.1,5.8,8.4, 11.0, 15.5, 17.7, 19.5, 17.7, 16.2, 13.0,9.5,8.9,12.52]},
        {"1925" :[7.8,7.9,7.9, 11.4, 15.7, 20.5, 21.4, 19.1, 15.1, 13.8,6.4,5.3, 12.69]},
        {"1926" :[7.2,9.1,9.4, 13.4, 14.2, 18.1, 21.0, 20.4, 18.1, 11.4,8.6,6.5, 13.12]},
        {"1927" :[7.1,6.7, 10.4, 11.6, 16.1, 16.7, 19.3, 19.3, 15.6, 13.9,8.8,3.7, 12.43]},
        {"1928" :[8.3,8.9,9.4, 12.5, 15.4, 17.1, 20.8, 19.2, 17.3, 13.4, 10.3,6.1, 13.23]},
        {"1929" :[3.3,3.1, 12.0, 10.9, 16.1, 17.7, 20.9, 19.6, 20.5, 13.0,9.7,8.2, 12.91]},
        {"1930" :[8.2,4.6,8.7, 11.5, 14.7, 20.1, 18.8, 19.8, 16.9, 13.6,9.3,6.8, 12.74]},
        {"1931" :[6.0,6.6,8.2, 10.9, 15.5, 18.2, 18.7, 18.1, 14.9, 12.8, 10.6,7.7, 12.34]},
        {"1932" :[9.2,5.6,8.6, 10.3, 14.0, 18.9, 19.7, 21.3, 16.7, 12.4,9.1,8.0, 12.82]},
        {"1933" :[4.9,7.4, 11.9, 13.1, 16.5, 20.6, 22.6, 22.6, 19.5, 13.3,8.0,3.7, 13.68]},
        {"1934" :[7.2,7.2,8.4, 11.8, 15.9, 19.7, 23.7, 19.9, 19.0, 13.6,8.6, 10.1, 13.78]},
        {"1935" :[6.7,8.5, 10.1, 11.8, 14.6, 19.2, 22.0, 21.8, 17.3, 12.8,9.7,5.2, 13.31]},
        {"1936" :[6.2,5.5, 10.3,9.9, 16.2, 19.0, 18.6, 20.4, 17.7, 13.0,8.6,8.1, 12.79]},
        {"1937" :[7.8,8.2,6.6, 12.6, 16.5, 18.4, 19.9, 21.8, 17.7, 13.8,8.0,5.4, 13.05]},
        {"1938" :[8.3,7.8, 13.8, 12.4, 15.0, 18.5, 19.3, 20.4, 17.9, 13.8, 12.2,6.9, 13.84]},
        {"1939" :[6.6,8.7,8.8, 12.9, 16.0, 19.0, 19.1, 20.6, 18.0, 11.8, 11.4,5.6, 13.20]},
        {"1940" :[1.7,5.1,9.9, 12.8, 17.8, 21.9, 19.2, 20.2, 17.6, 13.0,9.8,6.4, 12.95]},
        {"1941" :[2.5,6.3,8.8,9.9, 13.8, 19.8, 22.1, 18.4, 18.4, 13.8,9.4,8.2, 12.61]},
        {"1942" :[3.5,2.9,8.7, 13.7, 15.7, 19.6, 19.6, 20.4, 17.5, 13.7,8.0,9.0, 12.68]},
        {"1943" :[7.5,9.1, 10.8, 14.8, 16.7, 18.7, 21.4, 20.0, 17.4, 14.3,9.2,6.0, 13.81]},
        {"1944" :[8.7,6.1,9.2, 14.5, 16.6, 17.5, 20.1, 21.6, 16.5, 12.2,9.1,6.1, 13.20]},
        {"1945" :[3.0, 10.2, 12.1, 14.8, 16.8, 18.7, 20.8, 20.0, 17.7, 15.5,9.6,7.5, 13.90]},
        {"1946" :[5.5,8.4,9.0, 14.8, 15.4, 17.1, 20.8, 18.5, 17.3, 12.6, 10.6,6.1, 12.99]},
        {"1947" :[4.7,0.1,6.6, 12.5, 18.4, 19.9, 20.9, 24.4, 19.2, 14.7, 10.1,7.4, 13.24]},
        {"1948" :[8.1,7.3, 13.0, 13.6, 16.8, 17.4, 20.0, 18.7, 17.4, 13.7, 10.2,8.4, 13.72]},
        {"1949" :[8.3,9.5,8.7, 14.1, 16.1, 20.7, 22.7, 21.7, 20.4, 15.1,9.5,8.5, 14.60]},
        {"1950" :[6.5,8.7, 11.3, 11.4, 15.6, 20.9, 19.8, 19.6, 16.1, 12.8,8.4,3.4, 12.89]},
        {"1951" :[6.3,6.3,7.2, 10.8, 14.1, 18.8, 20.8, 18.5, 17.6, 13.1, 11.3,8.4,12.76]},
        {"1952" :[5.5,6.6,9.6, 14.1, 18.0, 18.9, 21.1, 19.7, 14.4, 12.0,6.8,5.6, 12.69]},
        {"1953" :[5.7,7.2, 10.3, 11.5, 17.2, 18.5, 19.4, 20.7, 17.7, 13.6, 11.2,9.2, 13.52]},
        {"1954" :[5.5,5.4,9.1, 12.3, 15.3, 16.9, 17.6, 18.3, 16.6, 14.9, 10.1,9.4, 12.62]},
        {"1955" :[5.2,3.8,6.9, 13.6, 13.6, 17.9, 23.2, 23.2, 18.5, 13.3,9.9,8.5, 13.15]},
        {"1956" :[6.4,3.0, 10.2, 11.5, 16.8, 17.1, 19.6, 17.2, 17.8, 12.9,8.9,8.0, 12.44]},
        {"1957" :[8.3,8.4, 12.8, 13.1, 14.8, 21.1, 20.1, 19.3, 15.9, 14.4,8.8,7.4, 13.68]},
        {"1958" :[6.2,7.8,6.8, 11.5, 15.3, 18.3, 20.0, 19.6, 18.6, 13.7,9.1,7.1, 12.85]},
        {"1959" :[4.4,7.4, 10.9, 13.4, 18.0, 20.1, 22.3, 22.0, 20.5, 17.0, 10.2,8.8, 14.60]},
        {"1960" :[6.4,7.1,9.4, 13.2, 17.5, 21.2, 19.1, 19.2, 17.0, 13.3, 10.3,6.4, 13.34]},
        {"1961" :[6.6,9.8, 12.7, 13.8, 15.4, 19.4, 19.4, 19.6, 19.5, 14.5,9.0,5.0, 13.72]},
        {"1962" :[7.3,7.2,6.7, 11.5, 14.0, 18.5, 19.0, 18.2, 16.2, 14.2,8.3,4.8, 12.15]},
        {"1963" :[0.6,2.0,9.5, 12.5, 14.8, 19.4, 19.7, 18.1, 16.9, 14.3, 11.1,5.3, 12.02]},
        {"1964" :[6.0,7.2,7.0, 12.4, 17.9, 17.6, 20.3, 20.1, 19.1, 12.9, 10.4,6.8, 13.12]},
        {"1965" :[5.8,5.5,9.4, 12.1, 15.8, 18.9, 17.5, 19.2, 16.0, 14.9,7.3,7.6, 12.50]},
        {"1966" :[5.1,8.1,9.9, 10.4, 15.4, 19.8, 18.7, 18.9, 17.8, 13.4,8.3,8.3, 12.84]},
        {"1967" :[6.8,8.4, 10.1, 11.2, 14.3, 18.6, 21.1, 19.7, 17.1, 13.6,8.3,6.8, 13.00]},
        {"1968" :[7.0,4.5,9.8, 12.6, 13.8, 19.2, 18.9, 19.2, 17.3, 15.2,8.8,5.1, 12.62]},
        {"1969" :[8.0,3.5,6.3, 11.8, 15.1, 18.8, 21.5, 20.2, 17.4, 16.5,8.4,5.8, 12.77]},
        {"1970" :[6.4,5.8,7.0, 10.2, 17.7, 21.7, 19.1, 20.4, 18.4, 14.3, 10.6,6.7, 13.19]},
        {"1971" :[7.0,7.4,8.0, 11.8, 16.4, 16.0, 21.8, 19.3, 18.9, 15.3,9.4,8.9, 13.36]},
        {"1972" :[6.2,6.9, 10.6, 11.5, 14.3, 15.5, 19.9, 19.3, 15.8, 14.2,9.3,8.6, 12.68]},
        {"1973" :[6.8,7.2, 10.5, 10.8, 15.5, 19.6, 19.7, 21.2, 18.4, 12.6,9.2,7.8, 13.28]},
        {"1974" :[8.7,8.3,9.2, 12.8, 15.6, 18.5, 18.9, 19.6, 15.8, 10.5,9.6, 10.5, 13.15]},
        {"1975" :[9.5,7.6,7.7, 12.0, 14.1, 20.2, 22.2, 24.0, 17.7, 13.6,9.6,7.8, 13.83]},
        {"1976" :[8.2,7.1,8.3, 12.2, 16.5, 22.6, 24.3, 23.5, 17.2, 13.6,9.2,4.5, 13.93]},
        {"1977" :[5.2,8.0, 10.1, 10.8, 15.3, 16.2, 20.3, 19.2, 16.7, 15.0,9.3,8.4, 12.87]},
        {"1978" :[5.9,5.4, 10.2, 10.0, 16.3, 17.8, 18.7, 18.8, 18.0, 15.5, 11.5,6.5, 12.88]},
        {"1979" :[2.8,3.6,7.6, 11.3, 14.0, 18.0, 20.5, 19.0, 17.7, 15.0, 10.0,8.3, 12.33]},
        {"1980" :[5.0,8.8,7.8, 13.1, 16.3, 17.7, 18.6, 19.9, 18.4, 12.4,9.1,8.5, 12.96]},
        {"1981" :[7.6,6.0, 10.6, 11.6, 15.3, 16.8, 19.5, 20.9, 18.8, 11.9, 10.8,3.3, 12.75]},
        {"1982" :[5.6,7.7,9.8, 12.9, 16.7, 19.7, 21.0, 19.6, 18.6, 13.2, 10.5,7.3, 13.54]},
        {"1983" :[9.3,4.3,9.5, 10.6, 14.1, 18.6, 25.0, 22.5, 17.0, 13.9, 10.2,8.4, 13.61]},
        {"1984" :[6.6,6.2,7.6, 13.3, 14.6, 19.0, 22.6, 22.8, 17.0, 14.4, 10.5,8.0, 13.54]},
        {"1985" :[3.7,5.1,8.3, 12.0, 14.9, 16.8, 20.3, 18.1, 18.7, 14.3,7.0,8.7, 12.33]},
        {"1986" :[6.1,1.2,8.6,9.3, 15.0, 19.5, 19.8, 17.4, 16.0, 14.6, 10.9,9.1, 12.29]},
        {"1987" :[3.2,6.8,7.1, 14.6, 14.4, 16.5, 19.9, 19.6, 17.5, 13.2,8.9,7.9, 12.45]},
        {"1988" :[7.8,7.7,9.4, 12.2, 16.6, 18.6, 18.1, 19.5, 16.9, 13.7,9.0,9.8, 13.28]},
        {"1989" :[9.0,9.2, 11.2, 10.3, 18.4, 19.9, 23.4, 21.5, 18.7, 15.0,9.5,7.4, 14.45]},
        {"1990" :[9.3, 10.2, 12.0, 12.9, 18.3, 17.6, 22.6, 23.0, 17.4, 15.0,9.5,6.9, 14.56]},
        {"1991" :[6.1,4.9, 11.3, 11.9, 14.7, 16.0, 21.6, 22.0, 19.7, 13.2,9.7,7.4, 13.21]},
        {"1992" :[6.1,8.7, 10.6, 12.5, 19.0, 20.8, 20.1, 19.2, 16.9, 10.9, 10.5,6.3, 13.47]},
        {"1993" :[9.0,6.9, 10.3, 13.1, 15.7, 19.5, 19.0, 19.0, 16.1, 11.8,7.3,8.1, 12.99]},
        {"1994" :[8.0,6.1, 10.7, 11.9, 14.5, 18.8, 23.2, 20.1, 16.1, 13.8, 12.5,9.4, 13.76]},
        {"1995" :[7.8,9.3,9.4, 13.3, 16.4, 18.7, 23.7, 25.1, 17.5, 16.5, 10.8,4.5, 14.42]},
        {"1996" :[6.0,5.5,7.4, 12.8, 13.4, 19.7, 21.4, 21.1, 17.7, 15.0,9.1,5.4, 12.87]},
        {"1997" :[5.1,9.6, 12.1, 13.5, 16.5, 18.0, 21.3, 23.7, 18.3, 14.3, 11.4,8.5, 14.36]},
        {"1998" :[7.9, 10.7, 11.2, 11.4, 17.9, 17.9, 19.4, 20.7, 18.6, 13.7,9.1,8.7, 13.93]},
        {"1999" :[8.5,8.1, 10.8, 13.6, 17.2, 18.3, 23.0, 20.5, 19.9, 14.4, 10.6,7.8, 14.40]},
        {"2000" :[7.8,9.5, 11.0, 11.7, 16.5, 19.4, 19.7, 21.3, 18.5, 13.5,9.9,7.9, 13.90]},
        {"2001" :[6.0,7.8,8.5, 11.5, 17.5, 18.8, 21.8, 21.1, 16.8, 16.4, 10.9,6.6, 13.65]},
        {"2002" :[8.6, 10.1, 11.5, 14.2, 15.9, 18.7, 20.4, 21.1, 18.8, 13.8, 11.3,7.7, 14.33]},
        {"2003" :[7.2,7.5, 12.5, 14.7, 16.5, 21.1, 22.2, 23.5, 19.9, 13.4, 11.2,7.9, 14.80]},
        {"2004" :[8.0,8.1, 10.2, 13.4, 16.6, 19.8, 20.2, 21.8, 18.8, 13.6, 10.1,8.2, 14.08]},
        {"2005" :[8.7,6.9, 10.5, 13.0, 15.9, 20.2, 21.1, 21.2, 19.6, 16.1,9.7,7.5, 14.21]},
        {"2006" :[6.6,6.3,8.2, 12.5, 16.5, 21.0, 25.6, 19.9, 20.9, 16.3, 11.5,8.8, 14.52]},
        {"2007" :[9.7,8.7, 11.2, 16.4, 16.0, 19.3, 19.0, 19.7, 17.8, 14.4, 10.5,7.7, 14.20]},
        {"2008" :[9.4,9.6,9.4, 12.1, 17.9, 18.2, 20.5, 19.5, 17.2, 13.4,9.6,6.3, 13.60]},
        {"2009" :[6.0,6.7, 11.0, 14.6, 16.6, 19.7, 20.2, 20.8, 18.2, 14.9, 11.3,5.8, 13.82]},
        {"2010" :[3.7,5.4, 10.1, 13.9, 15.4, 20.5, 21.3, 19.3, 17.6, 13.8,7.9,2.4, 12.60]},
        {"2011" :[6.2,9.0, 10.9, 17.1, 16.6, 18.5, 19.9, 19.4, 19.1, 16.3, 12.5,8.7, 14.53]},
        {"2012" :[8.4,6.9, 12.8, 11.2, 16.3, 17.4, 19.6, 20.7, 17.3, 12.8,9.8,7.6, 13.41]},
        {"2013" :[5.6,5.9,5.7, 11.9, 14.8, 18.1, 24.0, 21.4, 17.5, 15.4,9.2,9.4, 13.25]},
        {"2014" :[8.4,8.9, 11.9, 14.4, 16.3, 19.9, 23.0, 19.1,-99.9,-99.9,-99.9,-99.9,-99.99]}
    ];

function createLabel(name, position, scale, colour, fontSize, opacity) {

    var fontface = "Helvetica";
    var spacing = 10;

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var metrics = context.measureText( name );
    var textWidth = metrics.width;

    canvas.width = textWidth + (spacing * 2);
    canvas.width *= 2;
    canvas.height = fontSize;
    context.textAlign = "center";
    context.textBaseline = "middle";

    context.fillStyle = "rgba(255, 255, 255, 0.0)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var red = Math.round(colour[0]);
    var green = Math.round(colour[1]);
    var blue = Math.round(colour[2]);

    context.fillStyle = "rgba(" + red + "," + green + "," + blue + "," + "1.0)";
    context.font = fontSize + "px " + fontface;

    context.fillText(name, canvas.width/2, canvas.height/2);

    // canvas contents will be used for a texture
    var texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    //texture.needsUpdate = true;
    var spriteMaterial = new THREE.SpriteMaterial({
            //color: 0xff0000,
            transparent: false,
            opacity: opacity,
            useScreenCoordinates: false,
            map: texture}
    );

    var sprite = new THREE.Sprite(spriteMaterial);

    sprite.scale.set(scale.x, scale.y, 1);
    sprite.position.set(position.x, position.y, position.z);

    return sprite;
}

function createGeometry(lineWidth, step, segments, vertices, indices) {
    //Create geometry
    for(var t= 0, x=0; t<=2*Math.PI; t+=(2*Math.PI/segments), x+=step) {
        var y = 3 * Math.sin(t);
        vertices.push(x, y, 0);
        vertices.push(x, y+lineWidth, 0);
    }

    for(var i= 0, ind=0; i<segments; ++i, ind+=2) {
        indices.push(ind+1, ind, ind+2);
        indices.push(ind+2, ind+3, ind+1);
    }


}
//Init this app from base
function ClimateApp() {
    BaseApp.call(this);
}

ClimateApp.prototype = new BaseApp();

ClimateApp.prototype.init = function(container) {
    BaseApp.prototype.init.call(this, container);
    this.data = null;
    this.updateRequired = false;
    this.guiControls = null;
    this.dataFile = null;
    this.filename = '';
    //Rendering groups
    this.labelGroups = [];
    //Time data
    this.startYear = 0;
    this.endYear = 0;

    //Timestreams
    this.remoteURL = 'http://www.timestreams.org.uk/wp-content/plugins/timestreams/2/';
    this.measure = 'measurement_container/wp_ekx42t_1_ts_temperature_4';
    this.publicKey = 'c9bcd7f338';

    this.startYear = 1914;
    //Parameters
    this.timeOffset = 60 * 30;
    this.totalDelta = 0;
    this.animationTime = 0.01;
    this.animating = true;
    this.animationGeoms = [];
    this.currentAnimation = 0;
};

ClimateApp.prototype.update = function() {
    //Perform any updates


    //Animate geometry
    this.totalDelta += this.clock.getDelta();
    if(this.totalDelta >= this.animationTime && this.animating) {
        //Adjust indices
        var geom = this.animationGeoms[this.currentAnimation];
        var length = geom.attributes.index.array.length;
        this.lastIndexPos += 6;
        if(this.lastIndexPos <= length) {
            geom.offsets = [ { start: 0, count: this.lastIndexPos, index: 0 } ];
            this.totalDelta = 0;
        } else {
            ++this.currentAnimation;
            if(this.currentAnimation >= this.animationGeoms.length) this.animating = false;
            if(this.currentAnimation >= 1) this.animationTime = 0.03;
            this.lastIndexPos = 0;
        }
    }

    BaseApp.prototype.update.call(this);
};

ClimateApp.prototype.createScene = function() {

    //Init base createsScene
    BaseApp.prototype.createScene.call(this);

    this.lastIndexPos = 0;
    var vertices = [];
    var indices = [];
    var lineWidth = 5;
    var xStep = 10;
    var dataItems = 200;
    //Segments
    var segments = [400];
    for(var i=0; i<dataItems; ++i) {
        segments.push(5, 10);
    }
    //Colours
    var colours = [0x000000];
    for(var i=0; i<dataItems; ++i) {
        colours.push(0x3e70ff, 0xff4E35);
    }
    //Positions
    var xStart = -470;
    var yStart = 175;
    var zStart = -400;
    var positions = [new THREE.Vector3(-500, 170, zStart)];
    var gap = 10;
    var distance = 40;
    for(var i=0; i<dataItems; ++i) {
        positions.push(new THREE.Vector3(xStart, yStart, zStart-5));
        positions.push(new THREE.Vector3(xStart+gap, yStart, zStart-5));
        xStart += distance;
    }
    //Rotations
    var rotations = [0];
    for(var i=0; i<dataItems; ++i) {
        rotations.push(-Math.PI/2, -Math.PI/2);
    }

    //Labels
    var labelYOffset = 10;
    var labelPositions = [];
    for(var i= 1; i<dataItems+1; i+=2) {
        var avg = new THREE.Vector3();
        avg.x = (positions[i].x + positions[i+1].x)/2;
        avg.y = positions[i].y + labelYOffset;
        avg.z = zStart;
        labelPositions.push(avg);
    }

    //DEBUG
    console.log('Max monthly =', maxMonthly[0]);

    var maxYear = this.startYear + (dataItems-1)/2;
    var labelColour = [130, 130, 130];
    var labelScale = new THREE.Vector3(40, 10, 1);
    for(var i= 0, year=this.startYear; i<dataItems+1; ++i, ++year) {
        vertices.length = 0;
        indices.length = 0;
        createGeometry(lineWidth, xStep, segments[i], vertices, indices);
        var lineGeom = new THREE.BufferGeometry();
        lineGeom.dynamic = true;
        lineGeom.offsets = [ { start: 0, count: 0, index: 0 } ];
        var lineMat = new THREE.MeshBasicMaterial( {color : colours[i]} );

        lineGeom.addAttribute( 'index', new THREE.BufferAttribute( new Uint16Array( indices ), 1 ) );
        lineGeom.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array( vertices ), 3 ) );
        lineGeom.computeBoundingSphere();
        this.animationGeoms.push(lineGeom);

        var lineMesh = new THREE.Mesh(lineGeom, lineMat);
        lineMesh.position.x = positions[i].x;
        lineMesh.position.y = positions[i].y;
        lineMesh.position.z = positions[i].z;
        lineMesh.rotation.z = rotations[i];
        lineMesh.scale.x = 2;
        this.scene.add(lineMesh);

        if(year < maxYear) {
            var label = createLabel(year, labelPositions[i], labelScale, labelColour, 12, 1);
            this.scene.add(label);
        }
    }
};

ClimateApp.prototype.parseFile = function() {
    //Attempt to load and parse given json file
    if(!this.filename) return;

    console.log("Reading file...");

    var reader = new FileReader();
    var _this = this;
    reader.onload = function(evt) {
        //File loaded - parse it
        console.log('file read: '+evt.target.result);
        try {
            _this.data = JSON.parse(evt.target.result);
        }
        catch (err) {
            console.log('error parsing JSON file', err);
            alert('Sorry, there was a problem reading that file');
            return;
        }
        _this.generateData();
    };

    // Read in the file
    reader.readAsText(this.dataFile, 'ISO-8859-1');
};

ClimateApp.prototype.onSelectFile = function(evt) {
    //User selected file
    //See if we support filereader API's
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        //File APIs are supported.
        var files = evt.target.files; // FileList object
        if (files.length==0) {
            console.log('no file specified');
            this.filename = "";
            return;
        }
        //Clear old data first
        if(this.dataFile) {
            this.reset();
        }
        this.dataFile = files[0];
        this.filename = this.dataFile.name;
        console.log("File chosen", this.filename);

        //Try and read this file
        this.parseFile();
    }
    else
        alert('sorry, file apis not supported');
};

ClimateApp.prototype.onKeyDown = function(event) {
    //Do any base app key handling
    BaseApp.prototype.keydown.call(this, event);

    switch (event.keyCode) {
        case 80: //'P'
            console.log("CamPos=", this.camera.position);
            console.log("Lookat=", this.controls.getLookAt());
            break;
    }
};

$(document).ready(function() {
    //Initialise app
    var container = document.getElementById("WebGL-output");
    var app = new ClimateApp();
    app.init(container);
    app.createScene();

    //GUI callbacks
    $("#chooseFile").on("change", function(evt) {
        app.onSelectFile(evt);
    });

    $(document).keydown(function (event) {
        app.onKeyDown(event);
    });

    app.run();
});