const request = (url) => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    setTimeout(() => {
      if (randomNumber < 0.75) {
        resolve(`The url requested is: ${url}`);
      }
      reject(`There was a problem reaching ${url}`)
    }, 1000)
  })
}





request('trythis.com/api/test1')
  .then((data) => {
    console.log('Success', data)
    return request('trythis.com/api/test2')
  })
  .then((data) => {
    console.log('Success', data)
    return request('trythis.com/api/test3')
  })
  .then((data) => {
    console.log('Success', data)

  })
  .catch((err) => {
    console.log('Error', err)
  })

// const request = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Simulate a successful request; you can replace this with actual network requests.
//       resolve(`The url requested is: ${url}`);
//     }, 1000);
//   });
// };

// const makeRequestsSequentially = async () => {
//   try {
//     const data1 = await request('trythis.com/api/test1');
//     console.log('Success', data1);

//     const data2 = await request('trythis.com/api/test2');
//     console.log('Success', data2);

//     const data3 = await request('trythis.com/api/test3');
//     console.log('Success', data3);
//   } catch (error) {
//     console.log('Error', error);
//   }
// };

// makeRequestsSequentially();