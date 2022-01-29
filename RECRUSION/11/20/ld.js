function sort(str, dgi, n) {   
for (var i = 0;i < n - 1;i++) {
max = i



for(var j = i + 1;j < n;j++) {

if (dgi[j] > dgi[max]) {
max = j

} 
else if (dgi[j] == dgi[max] && str[j] < str[max]) {
max = j
}
}
var temp = str[i]
str[i] = str[max]
str[max] = temp
temp = dgi[i]
dgi[i] = dgi[max]
dgi[max] = temp
}
}