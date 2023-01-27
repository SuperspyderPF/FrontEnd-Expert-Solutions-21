/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(arr) {
    let s = {};
    for(let i=0; i<arr.length; i++){
        if(s[arr[i]] == undefined){
            s[arr[i]] = []; 
            s[arr[i]].push([i]);
        }
        else if(s[arr[i]] && s[arr[i]][s[arr[i]].length-1].length == arr[i]){
            s[arr[i]].push([i]);
        }
        else{
            s[arr[i]][s[arr[i]].length-1].push(i);
        }
    }
    return Object.values(s).flat();
};