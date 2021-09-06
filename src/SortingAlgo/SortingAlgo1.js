export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
    
}

function quickSortHelper(mainArray,startIdx,endIdx,animations){
    if(startIdx>=endIdx) return ;
    else{
        const pi=partition(startIdx,endIdx,mainArray,animations);
        quickSortHelper(mainArray,startIdx,pi-1,animations);
        quickSortHelper(mainArray,pi+1,endIdx,animations)
    }
}
function partition(startIdx,endIdx,mainArray,animations){
    var pivot=mainArray[endIdx];
    let i=startIdx-1;
    let j=startIdx;
    while(j<endIdx){
        animations.push([j,endIdx,true,'red']);
        animations.push([j,endIdx,true,'rgb(120, 203, 248)']);
        if(mainArray[j]<pivot){
            i++;
            animations.push([i,mainArray[j],false]);
            animations.push([j,mainArray[i],false]);
            [mainArray[i],mainArray[j]]=[mainArray[j],mainArray[i]];
        }           
        animations.push([j,j,true,'red']);
        animations.push([j,j,true,'rgb(120, 203, 248)']);
        j++;
    }
    animations.push([i+1,mainArray[endIdx],false]);
    animations.push([endIdx,mainArray[i+1],false]);
    [mainArray[i+1],mainArray[endIdx]]=[mainArray[endIdx],mainArray[i+1]];
    return i+1;
}

