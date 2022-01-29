array=[ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ]

for a in array:
    for k in a:
        tr=''
        for j in k:
            
            tr+=str(j)+" "
        print(tr)       