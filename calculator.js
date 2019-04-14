function calculate(args){
    var result = [];
    args.forEach(element => {
        var start = element[0];
        var end = element[1];
        var startIndex = getIndex(result, start);
        if (startIndex % 2 === 0) {
            if(startIndex === 0 || start !== result[startIndex]) {
                result.splice(startIndex, 0, start);
            }
            var endIndex = getIndex(result, end);
            if(endIndex % 2 !== 0) {
                result.splice(startIndex + 1, endIndex - (startIndex + 1), end);
            } else {
                result.splice(startIndex + 1, endIndex - (startIndex + 1));
            }
        } else {
            var endIndex = getIndex(result, end);
            if(endIndex % 2 !== 0){
                result.splice(startIndex, endIndex - startIndex);
            } else {
                result.splice(startIndex, endIndex - startIndex, end);
            }
        }
    });

    var finalResult = [];
    for(var i = 0; i < result.length; i += 2) {
        finalResult.push([result[i], result[i+1]]);
    }

    return finalResult;
}

function getIndex(array, value) {
    var index = array.findIndex((_, index, array) => {
        if(index == 0 || index == array.length - 1){
            return false;
        }
        return array[index - 1] <= value && array[index + 1] >= value
    });
    if(index == -1) {
        if(array.length > 0 && array[0] > value || array.length == 0){
            return 0;
        }
        if(array.length > 0 && array[array.length - 1] < value){
            return array.length;
        }
    }
    return index;
}

function invert(array, length) {
    var result = [];
    for(var i = 0; i < array.length - 1; i++){
        result.push([array[i][1], array[i + 1][0]]);
    }
    if(array.length > 0 && array[0][0] != 0) {
        result.unshift([0, array[0][0]]);
    }
    if(array.length > 0 && array[array.length - 1][1] != length) {
        result.push([array[array.length - 1][1], length]);
    }
    return result;
}
module.exports.calculate = calculate;
module.exports.invert = invert;