
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = []
  return matrix == undefined ? arr :  
   arr = matrix.reduce((prev, item, index) => {
   return index%2 == 0 ? prev.concat(item) :
   prev.concat(item.reverse());
  }, [])
}
