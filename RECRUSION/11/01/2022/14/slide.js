function printKMax(arr,n,k)
{
let j, max;

for (let i = 0; i <= n - k; i++)
{
        max = arr[i];
        console.log(max+" in first forloop")

        for (j = 1; j < k; j++)
        {
        if (arr[i + j] > max)
        max = arr[i + j];
        }
        console.log(max+" final");
}
}

// Driver code

let arr = [ 20, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
let n =arr.length

printKMax(arr, n, 3);
