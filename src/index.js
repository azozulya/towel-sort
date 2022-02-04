
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if(!matrix)
    return [];

  return matrix.reduce((result, arr, idx) => {
    if(idx % 2 === 0)
      return [...result, ...arr];    
    
    return [...result, ...(arr.reverse())];
  }, []);
}
