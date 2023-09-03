// Bonus 1
// If the leftmost element of the array is chosen as the pivot and the array is already sorted from smallest to largest, then all elements of the array will be to the right of the pivot and no partitioning will be done. This means that n-1 recursive calls will be executed (in each iteration), each having only one less element in the array. Therefore, the execution time of the algorithm would be quadratic O(n²).

// Bonus 2
// The time complexity of QuickSort using Hoare partitioning is O(n²) in the worst case

// Bonus 3
// The Big Omega to talk about the best case is O(n log n) and Big Theta to talk about the average case is also O(n log n)

function partition(arr, left, right){
    var pivot_val = arr[Math.floor((left + right)/2)];
    var i = left;
    var j = right;

    while(i <= j){
        while(arr[i] < pivot_val){
            i++;
        }
        while(arr[j] > pivot_val){
            j--;
        }
        if(i <= j){
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            i++;
            j--;
        }
    }
    return i;
}

function quicksort(arr, left, right){
    if (arr.length > 1){
        var partIndex = partition(arr, left, right);

        if (left < partIndex - 1){
            quicksort(arr, left, partIndex - 1);
        }

        if (partIndex < right){
            quicksort(arr, partIndex, right);
        }
    }
    return arr;
}
var myArr = [5,3,7,6,2,9,13,8,1,11,17,4];
var sortedArr = quicksort(myArr, 0, myArr.length - 1);
console.log(sortedArr);