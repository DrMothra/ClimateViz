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
    this.guiControls = null;

    //Time data
    this.startYear = 1914;

    //Parameters
    this.totalDelta = 0;
    this.animationTime = 0.01;
    this.animating = true;
    this.animationGeoms = [];
    this.currentAnimation = 0;
    this.glowTime = 0;

    //Camera animation
    this.camAnimLength = 3375;
    this.camAnimSpeed = 32;
    this.camMargin = 10;

    var startPositions = [];
    var endPositions = [];
    var camWaitTimes = [34, 5];
    if(window.outerWidth <= 1280) {
        camWaitTimes[0] = 27;
        this.camAnimSpeed = 32;
        this.camAnimLength = 3700;
    }
    this.camPaths = [];
    //Phase 1
    var camX = this.camera.position.x;
    var camY = this.camera.position.y;
    var camZ = this.camera.position.z;
    startPositions.push(new THREE.Vector3(camX, camY, camZ));
    endPositions.push(new THREE.Vector3(camX+this.camAnimLength, camY, camZ));

    //Phase 2
    startPositions.push(new THREE.Vector3(camX+this.camAnimLength, camY, camZ));
    endPositions.push(new THREE.Vector3(1510, -170, 2360));

    for(var i=0; i<startPositions.length; ++i) {
        var dirVec = new THREE.Vector3();
        dirVec.subVectors(endPositions[i], startPositions[i]);
        var pathProps = { waitTime : camWaitTimes[i], direction : dirVec.normalize(), endPos : endPositions[i] };
        this.camPaths.push(pathProps);
    }

    this.currentCamPath = 0;
    this.cameraTime = 0;
    this.tempVec = new THREE.Vector3();
    this.camAnimating = true;
    this.zoomInc = 5;
};

ClimateApp.prototype.update = function() {
    //Perform any updates
    BaseApp.prototype.update.call(this);

    //Animate geometry
    var delta = this.clock.getDelta();

    //Perform mouse hover
    var vector = new THREE.Vector3(( (this.mouse.endX-159) / this.container.clientWidth ) * 2 - 1, -( this.mouse.endY / window.innerHeight ) * 2 + 1, 0.5);
    this.projector.unprojectVector(vector, this.camera);

    //DEBUG
    console.log("Y =", this.mouse.endY);

    var raycaster = new THREE.Raycaster(this.camera.position, vector.sub(this.camera.position).normalize());

    this.hoverObjects.length = 0;
    this.hoverObjects = raycaster.intersectObjects(this.scene.children, true);

    //Perform hover actions
    $('#info').hide();
    if(this.hoverObjects.length != 0) {
        for(var i=0; i<this.hoverObjects.length; ++i) {
            if(this.hoverObjects[i].object.name.indexOf('glow') >= 0) {
                console.log(this.hoverObjects[i].object.name);
                $('#info').show();
                break;
            }
        }
    }

    //Camera animation
    if(this.camAnimating) {
        this.cameraTime += delta;
    }

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
                this.resetScene();
            }
        }
    }

    var attachedGeom = null;
    if(this.animating) {
        this.totalDelta += delta;
    }

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
        } else {
            if(attachedGeom) {
                attachedGeom.visible = true;
            }
            //Show temp label
            if(this.currentAnimation > 0) {
                var labelNum = this.currentAnimation - 1;
                var label = this.labels[labelNum];
                label.visible = true;
            }

            ++this.currentAnimation;
            attachedGeom = null;
            if(this.currentAnimation >= this.animationGeoms.length) this.animating = false;
            if(this.currentAnimation >= 1) this.animationTime = 0.1;
            this.lastIndexPos = 0;
        }
    }

    for(var i=0; i<this.glowMats.length; ++i) {
        this.glowMats[i].uniforms.intensity.value =  0.4 + (Math.sin(this.glowTime)/2.5);
    }

    this.glowTime += 0.1;
};

ClimateApp.prototype.createScene = function() {

    //Init base createsScene
    BaseApp.prototype.createScene.call(this);

    this.lastIndexPos = 0;
    this.labels = [];
    var vertices = [];
    var indices = [];
    var lineWidth = 5;
    var xStep = 10;
    var dataItems = 200;
    //Group to hold all geometry
    this.visGroup = new THREE.Object3D();
    this.visGroup.name = 'visGroup';

    //Segments
    var segments = [];
    for(var i=0; i<dataItems; ++i) {
        segments.push(5, 5);
    }
    //Colours
    var colours = [];
    for(var i=0; i<dataItems; ++i) {
        colours.push(0x3c5b8a, 0xfe6e5d);
    }
    //Positions
    var xStart = -420;
    //Alter starting position for differing screen widths
    console.log("Width =", window.outerWidth);
    if(window.outerWidth <= 1280) {
        xStart = -320;
    }
    var lineStartX = xStart - 20;
    var yStart = 175;
    var zStart = -400;
    var positions = [];
    var normals = [];
    var gap = 17;
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
        var minTemp = minYear[i+this.startYear];
        var maxYear = maxYearly[i];
        var maxTemp = maxYear[i+this.startYear];
        scales.push(minTemp, maxTemp);
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

    var endYear = this.startYear + (dataItems-1)/2;
    var labelColour = [255, 255, 255];
    var labelScale = new THREE.Vector3(75, 15, 1);

    //Thresholds
    var minThresh = 5.2;
    var maxThresh = 13.8;

    //Draw main line first
    createGeometry(lineWidth, xStep, 400, vertices, indices, normals);
    var lineGeom = new THREE.BufferGeometry();
    lineGeom.attachedGeom = null;
    lineGeom.dynamic = true;
    lineGeom.offsets = [ { start: 0, count: 0, index: 0 } ];
    var lineMat = new THREE.MeshBasicMaterial( {color : 0xffffff} );
    lineGeom.addAttribute( 'index', new THREE.BufferAttribute( new Uint16Array( indices ), 1 ) );
    lineGeom.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array( vertices ), 3 ) );
    lineGeom.addAttribute( 'normal', new THREE.BufferAttribute( new Float32Array( normals ), 3 ));
    lineGeom.computeBoundingSphere();
    this.animationGeoms.push(lineGeom);

    var lineMesh = new THREE.Mesh(lineGeom, lineMat);
    lineMesh.position.x = lineStartX;
    console.log('X = ', lineMesh.position.x);
    lineMesh.position.y = 171.5;
    lineMesh.position.z = zStart;
    this.visGroup.add(lineMesh);

    //Add temperature geometries for each year
    var scaleFactor = 0.4;
    var tempYOffset = 21;
    var tempPosition = new THREE.Vector3();

    //Glow material for temperatures above threshold
    var _this = this;

    this.glowMats = [];
    var glowBlueMat = new THREE.ShaderMaterial(
        {
            uniforms:
            {
                "intensity" : { type: "f", value: 0.5 },
                "glowTexture": { type: "t", value: THREE.ImageUtils.loadTexture("images/glowBlue.png") }
            },
            vertexShader:   document.getElementById( 'vertexShader'   ).textContent,
            fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
            transparent: true
        }
    );

    this.glowMats.push(glowBlueMat);
    var glowRedMat = new THREE.ShaderMaterial(
        {
            uniforms:
            {
                "intensity" : { type: "f", value: 0.5 },
                "glowTexture": { type: "t", value: THREE.ImageUtils.loadTexture("images/glowRed.png") }
            },
            vertexShader:   document.getElementById( 'vertexShader'   ).textContent,
            fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
            transparent: true
        }
    );
    this.glowMats.push(glowRedMat);

    //var texture = THREE.ImageUtils.loadTexture("images/glow.png");
    //this.glowMat = new THREE.MeshLambertMaterial({map: texture, transparent: true, opacity: 0.5});

    for(var i= 0; i<dataItems; ++i) {

        var glow = false;
        if( scales[i] <= minThresh || scales[i] >= maxThresh) glow = true;

        if(glow) {
            var glowGeom = new THREE.BoxGeometry(30, 5, 0.1);
            var mat = this.glowMats[i%2];
            //var mat = new THREE.MeshBasicMaterial( {color: 0xff0000});
            var glowMesh = new THREE.Mesh(glowGeom, mat);
            glowMesh.position.x = positions[i].x+2;
            var yOffset = i%2 ? 130 : 60;
            glowMesh.position.y = positions[i].y - yOffset;
            glowMesh.position.z = positions[i].z - 0.5;
            glowMesh.rotation.z = rotations[i];
            glowMesh.scale.x = scales[i] * scaleFactor * 3;
            glowMesh.scale.y *= 5;
            glowMesh.visible = false;
            glowMesh.name = scales[i] <= minThresh ? 'glowCold'+i : 'glowWarm'+i;
            this.visGroup.add(glowMesh);
        }

        vertices.length = 0;
        indices.length = 0;
        normals.length = 0;

        createGeometry(lineWidth, xStep, segments[i], vertices, indices, normals);
        lineGeom = new THREE.BufferGeometry();
        lineGeom.attachedGeom = glow ? glowMesh : null;
        lineGeom.dynamic = true;
        lineGeom.offsets = [ { start: 0, count: 0, index: 0 } ];
        //lineMat = new THREE.MeshBasicMaterial( {color : glow ? 0xF6D287 : colours[i]} );
        lineMat = new THREE.MeshBasicMaterial( {color: colours[i]});

        lineGeom.addAttribute( 'index', new THREE.BufferAttribute( new Uint16Array( indices ), 1 ) );
        lineGeom.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array( vertices ), 3 ) );
        //lineGeom.addAttribute( 'normal', new THREE.BufferAttribute( new Float32Array( normals ), 3 ));
        lineGeom.computeBoundingSphere();
        this.animationGeoms.push(lineGeom);

        //Glow effect for particular temperatures
        lineMesh = new THREE.Mesh(lineGeom, lineMat);
        lineMesh.position.x = positions[i].x;
        lineMesh.position.y = positions[i].y;
        lineMesh.position.z = positions[i].z;
        lineMesh.rotation.z = rotations[i];
        lineMesh.scale.x = scales[i] * scaleFactor;
        this.visGroup.add(lineMesh);


        //Temperature labels
        tempPosition.x = lineMesh.position.x;
        tempPosition.y = lineMesh.position.y - (scales[i]* (i%2 ? tempYOffset : tempYOffset+1));
        tempPosition.z = lineMesh.position.z;
        var label = createLabel(scales[i], tempPosition, labelScale, labelColour, 12, 1);
        label.name = 'tempLabel'+i;
        label.visible = false;
        this.labels.push(label);
        this.visGroup.add(label);
    }

    //Labels
    var label;
    for(var year=this.startYear, i=0; year<endYear; ++year, ++i) {
        label = createLabel(year, labelPositions[i], labelScale, labelColour, 12, 1);
        this.visGroup.add(label);
    }
    //Add all geometry to main group
    this.scene.add(this.visGroup);
};

ClimateApp.prototype.resetScene = function() {
    //Reset all geom offsets
    for(var i=0; i<this.animationGeoms.length; ++i) {
        var geom = this.animationGeoms[i];
        geom.offsets = [ { start: 0, count: 0, index: 0 } ];
        if(geom.attachedGeom) {
            geom.attachedGeom.visible = false;
        }
    }

    for(var i=0; i<this.labels.length; ++i) {
        this.labels[i].visible = false;
    }

    //Reset animations
    this.currentAnimation = 0;
    this.animating = true;
    this.animationTime = 0.01;
    this.camAnimating = true;
    this.cameraTime = 0;
    this.totalDelta = 0;
    $('#playToggle').attr('src', "images/pause.png");

    //Reset cam position
    this.camera.position.set(0, 0, 200);
    var lookAt = new THREE.Vector3();
    this.controls.setLookAt(lookAt);
    this.visGroup.position.z = 0;
};

ClimateApp.prototype.togglePlay = function() {
    //Toggle vis animation
    this.camAnimating = !this.camAnimating;
    //Alter button images
    var image = $('#playToggle');
    var imageSrc = this.camAnimating ? 'images/pause.png' : 'images/play.png';
    image.attr('src', imageSrc);
};

ClimateApp.prototype.zoomIn = function() {
    //Zoom into scene
    this.visGroup.position.z += this.zoomInc;
};

ClimateApp.prototype.zoomOut = function() {
    //Zoom into scene
    this.visGroup.position.z -= this.zoomInc;
};

ClimateApp.prototype.timeSlider = function(value) {
    //Adjust slider
    this.visGroup.position.x = -value;
};

var date = null;
var code = null;
var validData = false;

function onGetData() {
    //Validate data
    date = parseInt($('#dob').val());

    if(isNaN(date) || date < 1914 || date > 2014) return 'badDate';

    //Allowable dates - October 2014 to December 2014
    var lower = Math.round(new Date(2014, 9, 1, 0, 0, 0).getTime()/1000);
    var upper = Math.round(new Date(2014, 11, 31, 23, 59, 59).getTime()/1000);

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

$(document).ready(function() {
    //GUI callbacks
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

    //Initialise app
    var glSupport = $('#webGLError');
    glSupport.hide();
    if ( ! Detector.webgl ) {
        glSupport.show();
    } else {
        var container = document.getElementById("WebGL-output");
        var app = new ClimateApp();
        app.init(container);
        app.createScene();

        //GUI callbacks
        $("#play_pause").on('click', function() {
            app.togglePlay();
        });
        $("#zoomIn").on('click', function() {
            app.zoomIn();
        });
        $("#zoomOut").on('click', function() {
            app.zoomOut();
        });
        $("#refresh").on('click', function() {
            app.resetScene();
        });
        $("#timeLine").on('input', function() {
            app.timeSlider(this.value);
        });

        app.run();
    }
});