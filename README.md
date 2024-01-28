[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Bi-S25fM)
# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.

Answer:
The average-case time complexity of insertion sort is $\Theta(n^2)$.
The outter loop accounts for one power of n because for insertion sort we must iterate through the entire array regardless of the 'sort-status' of the original array (reversed, sorted, or random).
The inner loop is what performs the swapping of elements. Each iteration of the inner loop, on average, will involve moving the current array item to the middle of the sorted portion of the array. To me this is the easiest way to understand the concept because middle is synonymous with average.
For example, when sorting the third element of the array, there will be an average of 1 swap operations done, because this would bring it to the middle of the sorted portion of the array. For the 5th element, there would be an average of 2 operations. Adding the average swaps per iteration gives us the formula of $n(n-1)*1/4$, which asymptotically correlates to $n^2$ because coefficients are ignored and only the highest power term of n is accounted for in this context.

The following website was used to further my understanding of this concept: https://www.happycoders.eu/algorithms/insertion-sort/#Average_Time_Complexity
