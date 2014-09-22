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

function createGeometry(lineWidth, step, segments, vertices, indices, normals) {
    //Create geometry
    for(var t= 0, x=0; t<=2*Math.PI; t+=(2*Math.PI/segments), x+=step) {
        var y = 3 * Math.sin(t);
        vertices.push(x, y, 0);
        vertices.push(x, y+lineWidth, 0);
        normals.push(0, 0, 1);
        normals.push(0 ,0, 1);
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
    this.glowTime = 0;
    this.waveDirection = 1;

    //Camera animation
    this.camAnimLength = 3375;
    this.camAnimSpeed = 32;
    this.camMargin = 10;

    var endPos = new THREE.Vector3(this.camera.position.x+this.camAnimLength, this.camera.position.y, this.camera.position.z);
    var dirVec = new THREE.Vector3(endPos.x, endPos.y, endPos.z);
    var pathProps = { waitTime : 36, direction : dirVec.sub(this.camera.position).normalize(), endPos : endPos};
    this.camPaths = [ pathProps ];
    endPos = new THREE.Vector3(1510, -170, 2360);
    dirVec = new THREE.Vector3(endPos.x, endPos.y, endPos.z);
    var startPos = new THREE.Vector3(3375, 0, 300);
    pathProps = { waitTime : 5, direction : dirVec.sub(startPos).normalize(), endPos: endPos};
    this.camPaths.push(pathProps);

    this.currentCamPath = 0;
    this.cameraTime = 0;
    this.tempVec = new THREE.Vector3();
    this.camAnimating = true;
};

ClimateApp.prototype.update = function() {
    //Perform any updates

    //Animate geometry
    var delta = this.clock.getDelta();

    //Camera animation

    this.cameraTime += delta;
    var path = this.camPaths[this.currentCamPath];
    if(this.cameraTime >= path.waitTime && this.camAnimating) {
        //Start animating
        this.tempVec.copy(path.direction);
        this.tempVec.multiplyScalar(delta * this.camAnimSpeed);
        this.camera.position.add(this.tempVec);
        this.controls.setLookAt(this.controls.getLookAt().add(this.tempVec));
        this.tempVec.subVectors(path.endPos, this.camera.position);
        if(this.camera.position.distanceTo(path.endPos) <= this.camMargin) {
            this.cameraTime = 0;
            if(++this.currentCamPath >= this.camPaths.length) {
                this.currentCamPath = 0;
                this.camAnimating = false;
            }
        }
    }

    var attachedGeom = null;
    this.totalDelta += delta;
    if(this.totalDelta >= this.animationTime && this.animating) {
        this.totalDelta = 0;
        //Adjust indices
        var geom = this.animationGeoms[this.currentAnimation];
        if(geom.attachedGeom) {
            attachedGeom = geom.attachedGeom;
        }
        var length = geom.attributes.index.array.length;
        this.lastIndexPos += 6;
        if(this.lastIndexPos <= length) {
            geom.offsets = [ { start: 0, count: this.lastIndexPos, index: 0 } ];
            if(attachedGeom) {
                attachedGeom.offsets = [ { start: 0, count: this.lastIndexPos, index: 0 } ];
            }
        } else {
            //Show temp label
            if(this.currentAnimation > 0) {
                var labelNum = this.currentAnimation - 1;
                var label = this.scene.getObjectByName('tempLabel'+labelNum);
                if(label && label instanceof THREE.Sprite) {
                    label.visible = true;
                }
            }

            ++this.currentAnimation;
            attachedGeom = null;
            if(this.currentAnimation >= this.animationGeoms.length) this.animating = false;
            if(this.currentAnimation >= 1) this.animationTime = 0.1;
            this.lastIndexPos = 0;
        }
    }

    var glow = this.glowTime;
    if(glow >= 0.7) this.waveDirection = -1;
    if(glow < 0) this.waveDirection = 1;
    this.glowMat.uniforms.intensity.value = glow;
    this.glowTime += (delta * this.waveDirection);

    //DEBUG
    //console.log('Glow =', glow);

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
    var segments = [];
    for(var i=0; i<dataItems; ++i) {
        segments.push(5, 5);
    }
    //Colours
    var colours = [];
    for(var i=0; i<dataItems; ++i) {
        colours.push(0x3e70ff, 0xff4E35);
    }
    //Positions
    var xStart = -470;
    var yStart = 175;
    var zStart = -400;
    var positions = [];
    var normals = [];
    var gap = 10;
    var distance = 40;
    for(var i=0; i<dataItems; ++i) {
        positions.push(new THREE.Vector3(xStart, yStart, zStart-5));
        positions.push(new THREE.Vector3(xStart+gap, yStart, zStart-5));
        xStart += distance;
    }
    //Rotations
    var rotations = [];
    for(var i=0; i<dataItems; ++i) {
        rotations.push(-Math.PI/2, -Math.PI/2);
    }

    //Scales
    var scales = [];
    for(var i=0; i<dataItems/2; ++i) {
        var minYear = minYearly[i];
        var min = minYear[i+this.startYear];
        var maxYear = maxYearly[i];
        var max = maxYear[i+this.startYear];
        scales.push(min, max);
    }

    //Labels
    var labelYOffset = 10;
    var labelPositions = [];
    for(var i= 0; i<dataItems; i+=2) {
        var avg = new THREE.Vector3();
        avg.x = (positions[i].x + positions[i+1].x)/2;
        avg.y = positions[i].y + labelYOffset;
        avg.z = zStart;
        labelPositions.push(avg);
    }

    var maxYear = this.startYear + (dataItems-1)/2;
    var labelColour = [130, 130, 130];
    var labelScale = new THREE.Vector3(40, 10, 1);

    //Thresholds
    var minThresh = 5.2;
    var maxThresh = 13.8;

    //Draw main line first
    createGeometry(lineWidth, xStep, 400, vertices, indices, normals);
    var lineGeom = new THREE.BufferGeometry();
    lineGeom.attachedGeom = null;
    lineGeom.dynamic = true;
    lineGeom.offsets = [ { start: 0, count: 0, index: 0 } ];
    var lineMat = new THREE.MeshBasicMaterial( {color : 0x000000} );
    lineGeom.addAttribute( 'index', new THREE.BufferAttribute( new Uint16Array( indices ), 1 ) );
    lineGeom.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array( vertices ), 3 ) );
    lineGeom.addAttribute( 'normal', new THREE.BufferAttribute( new Float32Array( normals ), 3 ));
    lineGeom.computeBoundingSphere();
    this.animationGeoms.push(lineGeom);

    var lineMesh = new THREE.Mesh(lineGeom, lineMat);
    lineMesh.position.x = -500;
    lineMesh.position.y = 171.5;
    lineMesh.position.z = zStart;
    this.scene.add(lineMesh);

    //Add temperature geometries for each year
    var scaleFactor = 0.25;
    var tempYOffset = 13.5;
    var tempPosition = new THREE.Vector3();
    //var glowMat = new THREE.MeshBasicMaterial( {color : 0xffff00});
    //Glow material for temperatures above threshold
    var _this = this;
    this.glowMat = new THREE.ShaderMaterial(
        {
            uniforms:
            {
                "c":   { type: "f", value: 1.0 },
                "p":   { type: "f", value: 0.5 },
                "intensity": { type: "f", value: 1.0 },
                glowColor: { type: "c", value: new THREE.Color(0xffff00) },
                viewVector: { type: "v3", value: _this.camera.position }
            },
            vertexShader:   document.getElementById( 'vertexShader'   ).textContent,
            fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
            side: THREE.FrontSide,
            blending: THREE.AdditiveBlending,
            transparent: true
        }
    );

    for(var i= 0, year=this.startYear; i<dataItems; ++i, ++year) {

        var glow = false;
        if( scales[i] <= minThresh || scales[i] >= maxThresh) glow = true;

        if( glow) {
            vertices.length = 0;
            indices.length = 0;
            normals.length = 0;
            createGeometry(lineWidth, xStep, segments[i], vertices, indices, normals);
            var glowGeom = new THREE.BufferGeometry();
            glowGeom.dynamic = true;
            glowGeom.offsets = [ { start: 0, count: 0, index: 0 } ];
            lineMat = this.glowMat;

            glowGeom.addAttribute( 'index', new THREE.BufferAttribute( new Uint16Array( indices ), 1 ) );
            glowGeom.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array( vertices ), 3 ) );
            glowGeom.addAttribute( 'normal', new THREE.BufferAttribute( new Float32Array( normals ), 3 ));
            glowGeom.computeBoundingSphere();

            lineMesh = new THREE.Mesh(glowGeom, lineMat);
            lineMesh.position.x = positions[i].x - 0.5;
            lineMesh.position.y = positions[i].y;
            lineMesh.position.z = positions[i].z;
            lineMesh.rotation.z = rotations[i];
            lineMesh.scale.x = scales[i] * scaleFactor * 1.01;
            lineMesh.scale.y *= 1.25;
            this.scene.add(lineMesh);
        }

        vertices.length = 0;
        indices.length = 0;
        normals.length = 0;

        createGeometry(lineWidth, xStep, segments[i], vertices, indices, normals);
        lineGeom = new THREE.BufferGeometry();
        lineGeom.attachedGeom = glow ? glowGeom : null;
        lineGeom.dynamic = true;
        lineGeom.offsets = [ { start: 0, count: 0, index: 0 } ];
        lineMat = new THREE.MeshBasicMaterial( {color : glow ? 0xF4E02E : colours[i]} );

        lineGeom.addAttribute( 'index', new THREE.BufferAttribute( new Uint16Array( indices ), 1 ) );
        lineGeom.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array( vertices ), 3 ) );
        lineGeom.addAttribute( 'normal', new THREE.BufferAttribute( new Float32Array( normals ), 3 ));
        lineGeom.computeBoundingSphere();
        this.animationGeoms.push(lineGeom);

        //Glow effect for particular temperatures
        lineMesh = new THREE.Mesh(lineGeom, lineMat);
        lineMesh.position.x = positions[i].x;
        lineMesh.position.y = positions[i].y;
        lineMesh.position.z = positions[i].z;
        lineMesh.rotation.z = rotations[i];
        lineMesh.scale.x = scales[i] * scaleFactor;
        this.scene.add(lineMesh);


        //Temperature labels
        tempPosition.x = lineMesh.position.x;
        tempPosition.y = lineMesh.position.y - (scales[i]*tempYOffset);
        tempPosition.z = lineMesh.position.z;
        var label = createLabel(scales[i], tempPosition, labelScale, labelColour, 12, 1);
        label.name = 'tempLabel'+i;
        label.visible = false;
        this.scene.add(label);

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