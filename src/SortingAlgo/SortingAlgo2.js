export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  bubbleSortHelper(array, 0,array.length, animations);
  return animations;
    
}

function bubbleSortHelper(mainArray,startIdx,n,animations){
    var i, j;
    for (i = 0; i < n-1; i++)
    {
        for (j = 0; j < n-i-1; j++)
        {
            if (mainArray[j] > mainArray[j+1])
            {   
                animations.push([j,j+1,true,'red']);
                animations.push([j,j+1,true,'rgb(120, 203, 248)']);
                animations.push([j,mainArray[j+1],false]);
                animations.push([j+1,mainArray[j],false]);
                [mainArray[j],mainArray[j+1]]=[mainArray[j+1],mainArray[j]];
            
            }
        }
    
    } 
    
}