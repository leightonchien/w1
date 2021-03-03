function average(list) {
  var sum = 0;

  for (var num of list) {
    sum += num;
  }

  return sum / list.length;
}
console.log(average([3, 5, 7]));

//error line 5 sum ++ num; fixed to +=
//error line 9 missing }