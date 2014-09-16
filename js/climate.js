/**
 * Created by DrTone on 28/08/2014.
 */

function createLabel(name, position, scale, colour, fontSize, opacity) {

    var fontface = "Arial";
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
            //color: color,
            transparent: false,
            opacity: opacity,
            useScreenCoordinates: false,
            blending: THREE.AdditiveBlending,
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
    var dataItems = 20;
    //Segments
    var segments = [100];
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
    var positions = [new THREE.Vector3(-500, 170, -400)];
    var gap = 10;
    var distance = 40;
    for(var i=0; i<dataItems; ++i) {
        positions.push(new THREE.Vector3(xStart, yStart, -400));
        positions.push(new THREE.Vector3(xStart+gap, yStart, -400));
        xStart += distance;
    }
    //Rotations
    var rotations = [0];
    for(var i=0; i<dataItems; ++i) {
        rotations.push(-Math.PI/2, -Math.PI/2);
    }

    var labelColour = [255, 255, 255];
    var labelOffset = new THREE.Vector3(0, 30, 10);
    var labelScale = new THREE.Vector3(10, 10, 1);
    for(var i= 0, year=1914; i<dataItems+1; ++i, ++year) {
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
        this.scene.add(lineMesh);

        var label = createLabel(year, labelOffset.add(lineMesh.position), labelScale, labelColour, 12, 1);
        this.scene.add(label);
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