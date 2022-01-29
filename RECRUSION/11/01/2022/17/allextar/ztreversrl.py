arr=[ [ 1, 2, 3 ], 
    [ 4, 5, 6 ],
     [ 7, 8, 9 ] ]
n= len(arr)
def saiz(arr,n):
    string=""
    for i in range(0,n-1):
        string+=str(arr[0][i])+" "
    for j in range(0,n):
        string+=str(arr[j][n-1-j])+" "
    for k in range(1,n):
        string+=str(arr[n-1][k])+" "
    return string

print(saiz(arr,n))