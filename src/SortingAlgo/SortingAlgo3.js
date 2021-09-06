export function getHeapSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  heapSortHelper(array,animations);
  return animations;
    
}

function heapSortHelper(mainArray,animations)
{
    var n = mainArray.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--){
        animations.push([i,i,true,'red']);
        animations.push([i,i,true,'rgb(120, 203, 248)']);
        heapify(mainArray, n, i,animations);
    }        
    for (let i = n - 1; i > 0; i--) {   
        animations.push([0,i,true,'red']);
        animations.push([0,i,true,'rgb(120, 203, 248)']); 
        animations.push([0,mainArray[i],false]);
        animations.push([i,mainArray[0],false]);
          
        [mainArray[0],mainArray[i]]=[mainArray[i],mainArray[0]];
        heapify(mainArray, i, 0,animations);
    }
}

function heapify(mainArray, n, i,animations)
{
        var largest = i; 
        var l = 2 * i + 1; 
        var r = 2 * i + 2; 
        
        if (l < n && mainArray[l] > mainArray[largest]){
            animations.push([l,largest,true,'red']);
            animations.push([l,largest,true,'rgb(120, 203, 248)']);
            animations.push([l,mainArray[largest],false]);
            animations.push([largest,mainArray[l],false]);
            largest = l;
        }
        if (r < n && mainArray[r] > mainArray[largest]){
            animations.push([r,largest,true,'red']);
            animations.push([r,largest,true,'rgb(120, 203, 248)']);
            animations.push([r,mainArray[largest],false]);
            animations.push([largest,mainArray[r],false]);
            largest = r;
        }
        if (largest !== i) {
            animations.push([i,largest,true,'red']);
            animations.push([i,largest,true,'rgb(120, 203, 248)']);
            animations.push([i,mainArray[largest],false]);
            animations.push([largest,mainArray[i],false]);
            [mainArray[i],mainArray[largest]]=[mainArray[largest],mainArray[i]];
            heapify(mainArray, n, largest,animations);
        }
}