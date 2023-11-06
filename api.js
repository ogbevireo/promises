fetch('https://swapi.dev/api/people/1')
  .then((res) => {
    console.log('Person one resolved');
    return res.json();
  })
  .then((data) => {
    console.log(data);
    return fetch('https://swapi.dev/api/people/22')
  })
  .then((res) => {
    console.log('Person Two resolved');
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log('Oh! Oh! you have to try again', e);
  })

