import Canvas from './canvas'
import MergeSort from './mergeSort';
import {shuffle} from './helpers';
import './style.css';

let canvas1 = new Canvas(400, document.body, "Merge Sort - Reversed");
let canvas2 = new Canvas(400, document.body, "Merge Sort - Random");
let canvas3 = new Canvas(400, document.body, "Merge Sort - Few Unique");


let data = [];
const dataSize = 100;
for (var i = 0; i < dataSize; i++) {
    data[i] = i;
}

let fewUniqueData = [];
for (var i = 0; i < dataSize; i++) {
    fewUniqueData[i] = i % 15;
}

let mergeSortReversed = new MergeSort(canvas1, data.reverse());
let mergeSortRandom = new MergeSort(canvas2, shuffle(data));
let mergeSortFewUnique = new MergeSort(canvas3, shuffle(fewUniqueData));

// console.log(mergeSort.sort());
mergeSortReversed.startTimedSort();
mergeSortRandom.startTimedSort();
mergeSortFewUnique.startTimedSort();

