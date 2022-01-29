def leftRotate(arr, d, n):
    for i in range(d):
        leftRotatebyOne(arr, n)

# Function to left Rotate arr[] of size n by 1*/ 
def leftRotatebyOne(arr, n):
    temp = arr[0]
    for i in range(n-1):
        arr[i] = arr[i + 1]
    arr[n-1] = temp

arr=[ 1,2,3,4 ]; n=4; k=3
leftRotate(arr,k,n)
print(arr)