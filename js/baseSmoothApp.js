/**
 * Created by DrTone on 08/04/2015.
 */

//Base app for smooth graphing applications

function BaseSmoothApp(containers) {
    this.containers = containers;
    this.projector = null;
    this.startTime = 0;
    this.elapsedTime = 0;
    this.timeSeries = [];
    this.smoothies = [];
    this.mmPerPixel = 60;
    this.lineWidth = 2;
}

BaseSmoothApp.prototype.setPixelDist = function(pixelDist) {
    this.mmPerPixel = pixelDist;
};

BaseSmoothApp.prototype.setLineWidth = function(lineWidth) {
    this.lineWidth = lineWidth;
};

BaseSmoothApp.prototype.setLineDist = function(lineDist) {
    this.lineDist = lineDist;
};

BaseSmoothApp.prototype.setWaveDelay = function(delay) {
    this.waveDelay = delay;
};

BaseSmoothApp.prototype.init = function() {
    var canvas;
    var pageWidth = window.innerWidth;
    var pageHeight = window.innerHeight;
    for(var i=0; i<this.containers.length; ++i) {
        this.smoothies.push(new SmoothieChart( {grid:{fillStyle: this.containers[i].background, strokeStyle: 'transparent'}, millisPerPixel:this.mmPerPixel,
            labels: {disabled: true}, maxValue: this.containers[i].max, minValue: this.containers[i].min, maxValueScale: this.containers[i].maxScale,
            minValueScale: this.containers[i].minScale }));
        canvas = document.getElementById(this.containers[i].id);
        canvas.width = pageWidth * this.containers[i].width;
        canvas.height = pageHeight * this.containers[i].height;
        this.smoothies[i].streamTo(canvas, this.containers[i].delay);

        this.timeSeries.push(new TimeSeries());
        this.smoothies[i].addTimeSeries(this.timeSeries[i], { lineWidth: this.lineWidth, strokeStyle: this.containers[i].line });
    }
};

BaseSmoothApp.prototype.setMultipleData = function(container) {
    //Draw multiple time series
    var pageWidth = window.innerWidth;
    var pageHeight = window.innerHeight;

    this.smoothies.push(new SmoothieChart( {grid:{fillStyle: container[0].background, strokeStyle: 'transparent'}, millisPerPixel:this.mmPerPixel,
        labels: {disabled: true}, maxValue: container[0].max, minValue: container[0].min, maxValueScale: container[0].maxScale,
        minValueScale: container[0].minScale }));
    var canvas = document.getElementById(container[0].id);
    canvas.width = pageWidth * container[0].width;
    canvas.height = pageHeight * container[0].height;
    this.smoothies[this.smoothies.length-1].streamTo(canvas, container[0].delay);

    var styles = [
        {line: '#ff0000'},
        {line: '#0000ff'}
    ];

    for(var i=0; i<2; ++i) {
        this.timeSeries.push(new TimeSeries());
        this.smoothies[this.smoothies.length-1].addTimeSeries(this.timeSeries[this.timeSeries.length-1], { lineWidth: this.lineWidth, strokeStyle: styles[i].line });
    }

};

BaseSmoothApp.prototype.update = function() {
    //Perform any updates

};

BaseSmoothApp.prototype.run = function() {
    var _this = this;
    this.update();
    requestAnimationFrame(function() { _this.run(); });
};
