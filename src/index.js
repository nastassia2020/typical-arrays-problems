
exports.min = function min (array) {
  if(array.length == 0 || array == 0){
    return 0;
  }else{
    let min = Math.min.apply(null, array)
    return min;
  }
}

exports.max = function max (array) {
  if(array.length == 0 || array == 0){
    return 0;
  }else{
    let max = Math.max.apply(null, array)
    return max;
  }
}

exports.avg = function avg (array) {
  if(array.length == 0 || array == 0){
    return 0;
  }else{
  const sum = array.reduce((x, y) => x + y);
  const avg = sum / array.length;
    return avg;
  }
}
