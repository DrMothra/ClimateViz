/**
 * Created by DrTone on 28/08/2014.
 */

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function rowToMonth(row) {
    return months[row];
}

function addGroundPlane(scene, width, height) {
    // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(width,height,1,1);
    var texture = THREE.ImageUtils.loadTexture("images/grid.png");
    var planeMaterial = new THREE.MeshLambertMaterial({map: texture, transparent: true, opacity: 0.5});
    var plane = new THREE.Mesh(planeGeometry,planeMaterial);

    //plane.receiveShadow  = true;

    // rotate and position the plane
    plane.rotation.x=-0.5*Math.PI;
    plane.position.x=-45;
    plane.position.y=0;
    plane.position.z=120;

    scene.add(plane);

    //Second plane
    planeGeometry = new THREE.PlaneGeometry(width, height, 1, 1);
    planeMaterial = new THREE.MeshLambertMaterial({color: 0x16283c});
    plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x=-0.5*Math.PI;
    plane.position.x=-45;
    plane.position.y=-0.1;
    plane.position.z=120;
    //Give it a name
    plane.name = 'ground';

    // add the plane to the scene
    scene.add(plane);
}

function showGroup(group, show) {
    if(group) {
        group.traverse(function(obj) {
            if(obj instanceof THREE.Mesh) {
                obj.visible = show;
            }
        });
    }
}

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

    /*
     if(this.updateRequired) {
     this.reDraw();
     }
     */
    //Perform mouse hover
    /*
    var vector = new THREE.Vector3(( this.mouse.x / window.innerWidth ) * 2 - 1, -( this.mouse.y / window.innerHeight ) * 2 + 1, 0.5);
    this.projector.unprojectVector(vector, this.camera);

    var raycaster = new THREE.Raycaster(this.camera.position, vector.sub(this.camera.position).normalize());

    this.hoverObjects.length = 0;
    this.hoverObjects = raycaster.intersectObjects(this.scene.children, true);
    */

    //Check hover actions
    //hideResults();
    /*
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
    */
    BaseApp.prototype.update.call(this);
};

ClimateApp.prototype.createScene = function() {
    //DEBUG
    var _this = this;
    this.xmlHttp = new XMLHttpRequest();
    this.xmlHttp.onreadystatechange = function() {
            if ( _this.xmlHttp.readyState == 4 && _this.xmlHttp.status == 200 )
            {
                if ( _this.xmlHttp.responseText == "Not found" )
                {
                    console.log('Not found');
                }
                else
                {
                    console.log('response =', _this.xmlHttp.responseText);
                }
            }
        };

    this.xmlHttp.open( "GET", 'http://www.timestreams.org.uk/wp-content/plugins/timestreams/2/metadata/wp_ekx42t_1_ts_CO2_11?pubkey=c21fa479e5&now=1354787337', true );
    this.xmlHttp.send( null );
    //Init base createsScene
    BaseApp.prototype.createScene.call(this);

    //Create ground
    this.GROUND_DEPTH = 480;
    this.GROUND_WIDTH = 180;
    addGroundPlane(this.scene, this.GROUND_WIDTH, this.GROUND_DEPTH);

    this.minGroup = new THREE.Object3D();
    this.minGroup.name = 'MinGroup';
    this.maxGroup = new THREE.Object3D();
    this.maxGroup.name = 'MaxGroup';
    this.scene.add(this.minGroup);
    this.scene.add(this.maxGroup);

    //Add group for each month
    this.monthMinGroups = [];
    this.monthMaxGroups = [];

    //Add minimum month groups
    for(var i=0; i<months.length; ++i) {
        this.monthMinGroups.push(new THREE.Object3D());
        this.monthMinGroups[i].name = months[i]+'Min';
        this.monthMinGroups[i].total = 0;
        this.monthMinGroups[i].bars = 0;
        this.monthMinGroups[i].avg = 0;
        this.minGroup.add(this.monthMinGroups[i]);
    }

    //Add maximum month groups
    for(var i=0; i<months.length; ++i) {
        this.monthMaxGroups.push(new THREE.Object3D());
        this.monthMaxGroups[i].name = months[i]+'Max';
        this.monthMaxGroups[i].total = 0;
        this.monthMaxGroups[i].bars = 0;
        this.monthMaxGroups[i].avg = 0;
        this.maxGroup.add(this.monthMaxGroups[i]);
    }

    this.maxMaterial = new THREE.MeshLambertMaterial( {color : 0xff0000});
    this.minMaterial = new THREE.MeshLambertMaterial( {color : 0x0000ff});
    this.barGeom = new THREE.BoxGeometry(2, 2, 2, 1, 1, 1);

    this.avgMaterial = new THREE.MeshLambertMaterial( {color : 0xffff00});
    this.avgGeom = new THREE.SphereGeometry(0.5);
    this.avgMinLineData = [];
    this.avgMaxLineData = [];
    for(var i=0; i<months.length; ++i) {
        this.avgMinLineData.push(new Array());
        this.avgMaxLineData.push(new Array());
    }
    this.lineGeometry = new THREE.BufferGeometry();
    this.lineMaterial = new THREE.LineBasicMaterial({ color : 0xffff00 });
};

ClimateApp.prototype.ProcessRequest = function() {

};

ClimateApp.prototype.createGUI = function() {
    //Create GUI - use dat.GUI for now
    this.guiControls = new function() {
        this.filename = '';
        this.ShowLabels = false;

        //Colours
        this.Max = "#ff0000";
        this.Min = "#0000ff";

        //Categories
        this.ShowMax = true;
        this.ShowMin = true;
        this.ShowAllMonths = true;
        this.ShowAverages = true;

        //Months
        this.Jan = true;
        this.Feb = true;
        this.Mar = true;
        this.Apr = true;
        this.May = true;
        this.Jun = true;
        this.Jul = true;
        this.Aug = true;
        this.Sep = true;
        this.Oct = true;
        this.Nov = true;
        this.Dec = true;

        //Values
        this.ShowValues = true;
    };

    //Create GUI
    var gui = new dat.GUI();
    var _this = this;
    //Create two folders - Appearance and Data
    gui.add(this.guiControls, 'filename', this.filename).listen();
    this.guiAppear = gui.addFolder("Appearance");
    this.guiAppear.addColor(this.guiControls, 'Max').onChange(function(value) {
        _this.onMaxColourChanged(value);
    });
    this.guiAppear.addColor(this.guiControls, 'Min').onChange(function(value) {
        _this.onMinColourChanged(value);
    });

    this.guiData = gui.addFolder("Data");

    this.guiData.add(this.guiControls, 'ShowMax').onChange(function(value) {
        _this.onShowGroup('Max', value);
    });
    this.guiData.add(this.guiControls, 'ShowMin').onChange(function(value) {
        _this.onShowGroup('Min', value);
    });

    //Months
    this.guiData.add(this.guiControls, 'ShowAllMonths').onChange(function(value) {
        _this.onShowMonth('All', value);
    });

    this.guiData.add(this.guiControls, 'ShowAverages').onChange(function(value) {
        _this.onShowAverages(value);
    });

    for(var i=0; i<months.length; ++i) {
        (function(i) {
            var monthData = _this.guiData.add(_this.guiControls, months[i]).listen();
            monthData.onChange(function (value) {
                _this.onShowMonth(months[i], value);
            });
        })(i);
    }
};

ClimateApp.prototype.onMaxColourChanged = function(value) {
    //Alter colour for points values
    if(this.guiControls.ShowMax) {
        //Get points group
        var group = this.scene.getObjectByName('MaxGroup');
        if(group) {
            group.traverse(function(obj) {
                if(obj instanceof THREE.Mesh) {
                    obj.material.color.setStyle(value);
                }
            });
        }
    }
};

ClimateApp.prototype.onMinColourChanged = function(value) {
    //Alter colour for points values
    if(this.guiControls.ShowMin) {
        //Get points group
        var group = this.scene.getObjectByName('MinGroup');
        if(group) {
            group.traverse(function(obj) {
                if(obj instanceof THREE.Mesh) {
                    obj.material.color.setStyle(value);
                }
            });
        }
    }
};

ClimateApp.prototype.generateData = function() {
    //Alter data
    //Add year property
    this.startYear = this.data[0].Year;
    this.endYear = this.data[this.data.length-1].Year;

    //Labels for year and month
    var pos = new THREE.Vector3(6, 1.5, 0);
    var labelScale = new THREE.Vector3(5, 2, 1);
    var labelColour = [255, 255, 255];

    for(var y=this.startYear; y<=this.endYear; ++y) {
        var label = createLabel(y, pos, labelScale, labelColour, 12, 1);
        this.scene.add(label);
        pos.z += 5;
    }

    pos.x = 0;
    pos.y = 1.5;
    pos.z = (this.endYear+1 - this.startYear) * 5;
    for(var m=0; m<months.length; ++m) {
        var label = createLabel(months[m], pos, labelScale, labelColour, 12, 1);
        this.scene.add(label);
        pos.x -= 8;
    }

    for(var i= 0, row=0; i<this.data.length; ++i, ++row) {
        var item = this.data[i];
        if(row > 11) row = 0;
        this.renderItem(item, row);
    }

    //Draw average line data
    var material = new THREE.LineBasicMaterial({ color : 0xffff00 });
    for(var i=0; i<this.avgMinLineData.length; ++i) {
        var numPoints = this.avgMinLineData[i].length;
        var positions = new Float32Array( numPoints * 3 );
        for (var x = 0; x < numPoints; ++x) {
            var dataPoint = this.avgMinLineData[i];
            positions[ x * 3 ] = (i*-8) + 2;
            positions[ x * 3 + 1 ] = dataPoint[x]*2;
            positions[ x * 3 + 2 ] = x*5;
        }
        var geometry = new THREE.BufferGeometry();
        geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
        geometry.computeBoundingSphere();
        var lineMesh = new THREE.Line( geometry, material );
        lineMesh.name = months[i] + 'MinAvg';
        this.monthMinGroups[i].add(lineMesh);
    }

    for(var i=0; i<this.avgMaxLineData.length; ++i) {
        numPoints = this.avgMaxLineData[i].length;
        positions = new Float32Array( numPoints * 3 );
        for (var x = 0; x < numPoints; ++x) {
            dataPoint = this.avgMaxLineData[i];
            positions[ x * 3 ] = (i*-8) - 2;
            positions[ x * 3 + 1 ] = dataPoint[x]*2;
            positions[ x * 3 + 2 ] = x*5;
        }
        geometry = new THREE.BufferGeometry();
        geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
        geometry.computeBoundingSphere();
        lineMesh = new THREE.Line( geometry, material );
        lineMesh.name = months[i] + 'MaxAvg';
        this.monthMaxGroups[i].add(lineMesh);
    }
};

ClimateApp.prototype.renderItem = function(item, row) {
    //Render temperatures at given row

    var bar = new THREE.Mesh(this.barGeom, this.minMaterial);
    bar.name = rowToMonth(row) + 'Min' + item['Year'];
    bar.scale.y = item['Min'];
    if(bar.scale.y == 0) bar.scale.y = 0.001;
    if(bar.scale.y < 0)  bar.scale.y *=-1;
    bar.position.x = (row * -8) + 2;
    bar.position.y = item['Min'] < 0 ? -bar.scale.y : bar.scale.y;
    bar.position.z = (item['Year'] - this.startYear) * 5;
    this.monthMinGroups[row].add(bar);

    //Averages
    this.monthMinGroups[row].bars++;
    this.monthMinGroups[row].total += item['Min'];
    this.monthMinGroups[row].avg = this.monthMinGroups[row].total / this.monthMinGroups[row].bars;
    this.avgMinLineData[row].push(this.monthMinGroups[row].avg);

    var avg = new THREE.Mesh(this.avgGeom, this.avgMaterial);
    avg.position.x =  bar.position.x;
    avg.position.y = this.monthMinGroups[row].avg;
    avg.position.z = bar.position.z;
    //this.monthMinGroups[row].add(avg);

    bar = new THREE.Mesh(this.barGeom, this.maxMaterial);
    bar.name = rowToMonth(row) + 'Max' + item['Year'];
    bar.scale.y = item['Max'];
    bar.position.x = (row * -8) - 2;
    bar.position.y = bar.scale.y;
    bar.position.z = (item['Year'] - this.startYear) * 5;

    this.monthMaxGroups[row].add(bar);

    //Averages
    this.monthMaxGroups[row].bars++;
    this.monthMaxGroups[row].total += item['Max'];
    this.monthMaxGroups[row].avg = this.monthMaxGroups[row].total / this.monthMaxGroups[row].bars;
    this.avgMaxLineData[row].push(this.monthMaxGroups[row].avg);

    //DEBUG
    /*
    if(row == 0) {
        console.log('Data =', item['Max']);
        console.log('Total =', this.monthMaxGroups[row].total);
        console.log('Avg (',this.monthMaxGroups[row].bars,') =', this.monthMaxGroups[row].avg);
    }
    */
};

ClimateApp.prototype.onShowGroup = function(attribute, value) {
    //Toggle max/min values
    var _this = this;
    for(var i=0; i<months.length; ++i) {
        if(this.guiControls[months[i]]) {
            var group = this.scene.getObjectByName(months[i]+attribute, true);
            if(group) {
                group.traverse(function(obj) {
                    if(obj instanceof THREE.Mesh || (obj instanceof THREE.Line && _this.guiControls.ShowAverages)) {
                        obj.visible = value;
                    }
                });
            }
        }
    }
};

ClimateApp.prototype.onShowMonth = function(attribute, value) {
    //Show relevant month or months

    var displayMonths = [];

    if(attribute == 'All') {
        //Toggle all months
        displayMonths = months;
        for(var j=0; j<months.length; ++j) {
            this.guiControls[months[j]] = value;
        }
    } else {
        displayMonths.push(attribute);
    }

    for(var i=0; i<displayMonths.length; ++i) {
        if(this.guiControls.ShowMax) {
            var group = this.scene.getObjectByName(displayMonths[i]+'Max', true);
            showGroup(group, value);
            this.showAverage(displayMonths[i]+'Max', value);
        }

        if(this.guiControls.ShowMin) {
            group = this.scene.getObjectByName(displayMonths[i]+'Min', true);
            showGroup(group, value);
            this.showAverage(displayMonths[i]+'Min', value);
        }
    }
};

ClimateApp.prototype.onShowAverages = function(value) {
    //Toggle averages
    for(var i=0; i<months.length; ++i) {
        if(this.guiControls[months[i]]) {
            if(this.guiControls.ShowMin) {
                var avg = this.scene.getObjectByName(months[i] + 'MinAvg', true);
                if (avg) {
                    avg.visible = value;
                }
            }
            if(this.guiControls.ShowMax) {
                avg = this.scene.getObjectByName(months[i] + 'MaxAvg', true);
                if (avg) {
                    avg.visible = value;
                }
            }
        }
    }
};

ClimateApp.prototype.showAverage = function(month, value) {

    if(this.guiControls.ShowAverages) {
        var avg = this.scene.getObjectByName(month+'Avg', true);
        if(avg) {
            avg.visible = value;
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

ClimateApp.prototype.preLoad = function(file) {
    this.filename = file;
    this.parseFile();
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
    app.createGUI();

    //GUI callbacks
    $("#chooseFile").on("change", function(evt) {
        app.onSelectFile(evt);
    });

    $(document).keydown(function (event) {
        app.onKeyDown(event);
    });

    app.run();
});