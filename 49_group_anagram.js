/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var map = new Map();

    for(let i = 0 ; i < strs.length ; i++){
        var sorted = strs[i].split("").sort().join("");
        if(!map.has(sorted)){  
            map.set(sorted , [strs[i]]);
        }
        else{
            let group = map.get(sorted);
            group.push(strs[i]);
            map.set(sorted , group);
        }

    }
    var result = [...map.values()];
    return result ;
};