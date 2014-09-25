/**
 * Created by DrTone on 25/09/2014.
 */




//Init this app from base
function TestApp() {
    BaseApp.call(this);
}

TestApp.prototype = new BaseApp();

TestApp.prototype.init = function(container) {
    BaseApp.prototype.init.call(this, container);
};

TestApp.prototype.update = function() {
    //Perform any updates

    //Animate geometry
    var delta = this.clock.getDelta();

    BaseApp.prototype.update.call(this);
};

TestApp.prototype.createScene = function() {

    //Init base createsScene
    BaseApp.prototype.createScene.call(this);

    var vertices = [];
    vertices.push(0, 0, 0);
    vertices.push(0, -50, 0);
    vertices.push(10, -50, 0);
    vertices.push(10, 0, 0);

    var indices = [];
    indices.push(0, 1, 2);
    indices.push(2, 3, 0);

    var boxGeom  = new THREE.BufferGeometry();
    var texture = THREE.ImageUtils.loadTexture("images/glow.png");
    var boxMat = new THREE.MeshLambertMaterial({map: texture, transparent: true, opacity: 0.5});

    boxGeom.addAttribute( 'index', new THREE.BufferAttribute( new Uint16Array( indices ), 1 ) );
    boxGeom.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array( vertices ), 3 ) );
    boxGeom.computeBoundingSphere();

    var box = new THREE.Mesh(boxGeom, boxMat);
    this.scene.add(box);

};

$(document).ready(function() {
    //Initialise app
    var container = document.getElementById("WebGL-output");
    var app = new TestApp();
    app.init(container);
    app.createScene();


    app.run();

});