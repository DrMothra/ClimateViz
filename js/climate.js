/**
 * Created by DrTone on 28/08/2014.
 */

function addGroundPlane(scene, width, height) {
    // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(width,height,1,1);
    var texture = THREE.ImageUtils.loadTexture("images/grid.png");
    var planeMaterial = new THREE.MeshLambertMaterial({map: texture, transparent: true, opacity: 0.5});
    var plane = new THREE.Mesh(planeGeometry,planeMaterial);

    //plane.receiveShadow  = true;

    // rotate and position the plane
    plane.rotation.x=-0.5*Math.PI;
    plane.position.x=0;
    plane.position.y=0;
    plane.position.z=0;

    scene.add(plane);

    //Second plane
    planeGeometry = new THREE.PlaneGeometry(width, height, 1, 1);
    planeMaterial = new THREE.MeshLambertMaterial({color: 0x16283c});
    plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x=-0.5*Math.PI;
    plane.position.x=0;
    plane.position.y=-0.1;
    plane.position.z=0;
    //Give it a name
    plane.name = 'ground';

    // add the plane to the scene
    scene.add(plane);
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
    this.objectsRendered = 0;
    //Groups to render
    this.attributes = ['points', 'position', 'conceeded', 'scored', 'results'];
    //Rendering groups
    this.attributeGroups = [];
    this.labelGroups = [];
    //Time data
    this.startYear = 0;
    this.endYear = 0;
};

ClimateApp.prototype.update = function() {
    //Perform any updates
    var clicked = this.mouse.clicked;

    /*
     if(this.updateRequired) {
     this.reDraw();
     }
     */
    //Perform mouse hover
    var vector = new THREE.Vector3(( this.mouse.x / window.innerWidth ) * 2 - 1, -( this.mouse.y / window.innerHeight ) * 2 + 1, 0.5);
    this.projector.unprojectVector(vector, this.camera);

    var raycaster = new THREE.Raycaster(this.camera.position, vector.sub(this.camera.position).normalize());

    this.hoverObjects.length = 0;
    this.hoverObjects = raycaster.intersectObjects(this.scene.children, true);

    //Check hover actions
    //hideResults();
    if(this.hoverObjects.length != 0) {
        for(var i=0; i<this.hoverObjects.length; ++i) {
            var obj = this.hoverObjects[i].object;
            if(obj instanceof THREE.Mesh) {
                if(obj.name.indexOf('results') >= 0) {
                    //Get results number
                    var results = obj.name.substr(7, obj.name.length-7);
                    var text = this.data[parseInt(results)];
                    text = text['HomeTeam']+' '+text['FTHG']+' '+text['AwayTeam']+' '+text['FTAG'];
                    showResults(this.mouse.x, this.mouse.y, text);
                    break;
                }
            }
        }
    }
    BaseApp.prototype.update.call(this);
};

ClimateApp.prototype.createScene = function() {
    //Init base createsScene
    BaseApp.prototype.createScene.call(this);

    //Create ground
    this.GROUND_DEPTH = 240;
    this.GROUND_WIDTH = 180;
    addGroundPlane(this.scene, this.GROUND_WIDTH, this.GROUND_DEPTH);
};

ClimateApp.prototype.generateData = function() {
    //Alter data
    //Add year property
    this.startYear = this.data[0].Year;
    this.endYear = this.data[this.data.length-1].Year;

    for(var i= 0, row=0; i<12; ++i, ++row) {
        var item = this.data[i];
        this.renderItem(item, row > 12 ? 0 : row);
    }
};

ClimateApp.prototype.renderItem = function(item, row) {
    //Render temperatures at given row
    var maxMaterial = new THREE.MeshLambertMaterial( {color : 0xff0000});
    var minMaterial = new THREE.MeshLambertMaterial( {color : 0x0000ff});
    var barScale = new THREE.Vector3(1, 1, 1);

    var pos = new THREE.Vector3();

    var barGeom = new THREE.BoxGeometry(2, 2, 2);
    var bar = new THREE.Mesh(barGeom, minMaterial);
    bar.scale.y = item['Min'];
    if(bar.scale.y < 0)  bar.scale.y *=-1;
    bar.position.x = row * -3;
    bar.position.y = item['Min'] < 0 ? -bar.scale.y : bar.scale.y;
    bar.position.z = item['Year'] - this.startYear;

    this.scene.add(bar);
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

$(document).ready(function() {
    //Initialise app
    var container = document.getElementById("WebGL-output");
    var app = new ClimateApp();
    app.init(container);
    app.createScene();
    //app.createGUI();

    //GUI callbacks
    $("#chooseFile").on("change", function(evt) {
        app.onSelectFile(evt);
    });

    app.run();
});