const changeBackgroundColor = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      document.body.style.transition = 'backgroundColor 1s'
      resolve()
    }, delay)
  })
}
// changeBackgroundColor('red', 3000)
//   .then(() => {
//     return changeBackgroundColor('orange', 2000)
//   })
//   .then(() => {
//     return changeBackgroundColor('yellow', 2000)
//   })
//   .then(() => {
//     return changeBackgroundColor('green', 2000)
//   })
//   .then(() => {
//     return changeBackgroundColor('blue', 2000)
//   })
//   .then(() => {
//     return changeBackgroundColor('indigo', 2000)
//   })
//   .then(() => {
//     return changeBackgroundColor('violet', 2000)
//   })

//the above promises chain on a single line using an implicit return
changeBackgroundColor('red', 3000)
  .then(() => changeBackgroundColor('orange', 2000))
  .then(() => changeBackgroundColor('yellow', 2000))
  .then(() => changeBackgroundColor('green', 2000))
  .then(() => changeBackgroundColor('blue', 2000))
  .then(() => changeBackgroundColor('indigo', 2000))
  .then(() => changeBackgroundColor('violet', 2000))
