import tickDuration from './settings';

console.log(tickDuration);
// bottum-up
class MergeSort {
    constructor(canvas, data) {
        this.canvas = canvas;
        this.data = data.slice();
        this.dataLength = this.data.length;
        this.swopData = [];
    }

    sort() {
        for (var width = 1; width < this.dataLength; width = 2 * width) {

            for (var i = 0; i < this.dataLength; i = i + 2 * width) {
                this.Merge(i, Math.min(i + width, this.dataLength), Math.min(i + 2 * width, this.dataLength));
            }
            this.data = this.swopData.slice();
            this.canvas.update(this.data);

        }

        return this.data;
    }

    timedSort(width) {
        for (var i = 0; i < this.dataLength; i = i + 2 * width) {
            this.Merge(i, Math.min(i + width, this.dataLength), Math.min(i + 2 * width, this.dataLength));
        }
        this.data = this.swopData.slice();
        this.canvas.update(this.data);

        width = 2 * width;
        if (width < this.dataLength) {
            setTimeout(function () {
                this.timedSort(width);
            }.bind(this), tickDuration);
        } else {
            console.log("Done");
        }
    }

    startTimedSort() {
        this.canvas.update(this.data);
        setTimeout(function () {
            this.timedSort(1);
        }.bind(this), tickDuration);
    }

    Merge(indexLeft, indexRight, indexEnd) {
        let i = indexLeft;
        let j = indexRight;

        for (var k = indexLeft; k < indexEnd; k++) {
            if (i < indexRight && (j >= indexEnd || this.data[i] <= this.data[j])) {
                this.swopData[k] = this.data[i];
                i++;
            } else {
                this.swopData[k] = this.data[j];
                j++;
            }
        }
    }

    timestamp() {
        return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
    }
}

export default MergeSort;