let backgroundColour = 'white';
let foregroundColour = "red";
let textColour = "black";

class Canvas {
    constructor(width, elementToAttachTo, heading) {
        this.width = width;
        this.heading = heading;

        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        // dimensions
        this.canvas.setAttribute("height", this.width);
        this.canvas.setAttribute("width", this.width);
        this.reset();
        elementToAttachTo.appendChild(this.canvas);
    }

    reset() {
        // colour
        this.context.fillStyle = backgroundColour;
        this.context.fillRect(0, 0, this.width, this.width);
        
        this.context.fillStyle = textColour;
        this.context.font = '24px serif';
        this.context.fillText(this.heading, 2, 24, this.width);
    }

    update(data) {
        const cellWidth = this.width / data.length;
        const lastDrawWidth = this.width - cellWidth;

        var maxValue = -Infinity;
        var minValue = Infinity;
        for (var idx = 0; idx < data.length; idx++) {
            if (data[idx] > maxValue) {
                maxValue = data[idx];
            }
            if (data[idx] < minValue) {
                minValue = data[idx];
            }
        }        

        const transformConstantA = (lastDrawWidth-0)/(maxValue-minValue);
        const transformConstantB = lastDrawWidth - transformConstantA * maxValue        

        // clear grid
        this.reset();
        // draw
        this.context.fillStyle = foregroundColour;
        var counter = 0;
        for (var w = 0; w < data.length; w++) {
            var scaledValue = transformConstantA * data[w] + transformConstantB
            this.context.fillRect(w*cellWidth, lastDrawWidth - scaledValue, cellWidth, cellWidth);
        }
    }
}

export default Canvas;