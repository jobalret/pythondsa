arr=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
print(len(arr))

print(arr.index("Tuesday"))
def sai(day,N):
    f=arr.index(day)
    k=(N%7)
    return arr[k+f]

result=sai("Tuesday",8)
print(result)