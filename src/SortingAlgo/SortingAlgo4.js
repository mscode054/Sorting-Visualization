export function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  selectionSortHelper(array,array.length,animations);
  return animations;
    
}
function selectionSortHelper(mainArray, n,animations)
{
    var i, j, min_idx;
    for (i = 0; i < n-1; i++)
    {
       
        min_idx = i;
        for (j = i + 1; j < n; j++){
            animations.push([j,min_idx,true,'red']);
            animations.push([j,min_idx,true,'rgb(120, 203, 248)']);
            if (mainArray[j] < mainArray[min_idx]){
                animations.push([min_idx,mainArray[j],false]);
                animations.push([j,mainArray[min_idx],false]);
                min_idx = j;
            }
        }
        
        animations.push([min_idx,mainArray[i],false]);
        animations.push([i,mainArray[min_idx],false]);
        [mainArray[min_idx],mainArray[i]]=[mainArray[i],mainArray[min_idx]];
    }
}