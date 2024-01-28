function insertionSortReverse(array) {
    for (var i = array.length-2; i >= 0; i--) {
	var val = array[i];
	var j;
	for (j = i; j < array.length && array[j+1] < val; j++) {
	    array[j] = array[j+1];
	}
	array[j] = val;
    }
    return array;
}
