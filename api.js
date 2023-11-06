fetch('https://swapi.dev/api/people/1')
  .then((res) => {
    // console.log('This is resolved', res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log('Oh! Oh! you have to try again', e);
  })