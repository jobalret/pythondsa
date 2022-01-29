arr =[1, 2, 3, 4]
print(len(arr))
def cum(arr,n):
    sr=''
    sm=0
    for i in range(n):
        sm+=arr[i]
        sr+=str(sm)+" "

    return sr

print(cum(arr,4))