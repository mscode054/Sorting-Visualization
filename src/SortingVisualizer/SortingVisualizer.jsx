import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../SortingAlgo/SortingAlgo.js';
import { getQuickSortAnimations } from '../SortingAlgo/SortingAlgo1';
import { getBubbleSortAnimations } from '../SortingAlgo/SortingAlgo2';
import { getHeapSortAnimations } from '../SortingAlgo/SortingAlgo3';
import { getSelectionSortAnimations } from '../SortingAlgo/SortingAlgo4';

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            array : [],
        };
    }

    componentDidMount(){
        this.resetArr();
    }
    resetArr(){
        const array =[];
        for(let i=0;i<170;i++){
            array.push(randomIntFromInterval(10,450));
        }
        this.setState({array});
    }
    
    MergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'red': 'rgb(120, 203, 248)';
            setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            }, i * 3);
        } else {
            setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
            }, i * 3);
        }
        }
    }
    QuickSort(){
        const animations = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx,barTwoIdx,isColorChange,color]= animations[i];
            if (isColorChange) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * 3);
            } else {
                setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                }, i * 3);
            }
        }
    }
    HeapSort(){
        const animations = getHeapSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx,barTwoIdx,isColorChange,color]= animations[i];
            if (isColorChange) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * 3);
            } else {
                setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                }, i * 3);
            }
        }
    }
    BubbleSort(){
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx,barTwoIdx,isColorChange,color]= animations[i];
            if (isColorChange) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * 1);
            } else {
                setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                }, i * 1);
            }
        }
    }
    SelectionSort(){
        const animations = getSelectionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx,barTwoIdx,isColorChange,color]= animations[i];
            if (isColorChange) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * 1);
            } else {
                setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                }, i * 1);
            }
        }
    }
    // testSortingAlgo(){
    //     for(let i=0;i<100;i++){
    //         const array=[];
    //         const length=randomIntFromInterval(1,1000);
    //         for(let j=0;j<length;j++){
    //             array.push(randomIntFromInterval(-1000,1000));
    //         }
    //         const javascriptSortedArray=array.slice().sort((a,b)=>a-b);
    //         const sortedArray= getHeapSortAnimations(array.slice());
    //         console.log(equalArray(javascriptSortedArray,sortedArray));
    //     }
    // }

    render(){
        const {array}= this.state;
        return (
            <>
            <div className='header'>
                <h2>Sorting Visualization</h2>
                <div className='btn-cont'>
                    <button className='b1' onClick={()=> this.resetArr()}>Generate New Array</button>
                    <button className='b2' onClick={()=> this.MergeSort()}>Merge Sort</button>
                    <button className='b3' onClick={()=> this.QuickSort()}>Quick Sort</button>
                    <button className='b4' onClick={()=> this.HeapSort()}>Heap Sort</button>
                    <button className='b5' onClick={()=> this.BubbleSort()}>Bubble Sort</button>
                    <button className='b6' onClick={()=> this.SelectionSort()}>Selection Sort</button>
                </div>
            </div>
            <div className='array-cont'>
                {array.map((value,idx)=>(
                    <div 
                    className='array-bar' key={idx} 
                    style={{
                        backgroundColor: 'rgb(120, 203, 248)',
                        height: `${value}px` ,
                    }}
                    >
                    </div>
                ))}
            </div> 
            </>
        );
    }
    
}
function randomIntFromInterval(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
}
// function equalArray(array1, array2){
//     if(array1.length!==array2.length) return false;
//     for(let i=0;i<array1.length;i++){
//         if(array1[i]!==array2[i]) return false;
//     }
//     return true;
// }
