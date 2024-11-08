# MyCodes
//Return the array after removing the listed values.
//ex:Sample input 1 -
//arr: [1,2,2,3,1,2]
//wo: [2,3]
//Sample output 1 -[1, 1]

function removable(arr, wo) {
    return arr.filter(item => !wo.includes(item));
}
