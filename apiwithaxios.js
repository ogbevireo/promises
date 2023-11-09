axios.get('https://swapi.dev/api/people/1')
  .then((res) => {
    console.log('Response', res);
  })
  .catch((e) => {
    console.log('Error!', e);
  })

const starWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`)
    console.log(`Response is:`, res.data)
  } catch (e) {
    console.log('Error', e)
  }
}


starWarsPerson(3)
starWarsPerson(4)
starWarsPerson(6)

const jokes = document.querySelector('#joke-ul');
const button = document.querySelector('button');

const dadJokes = async () => {
  const config = { headers: { Accept: 'application/json' } }
  const res = await axios.get('https://icanhazdadjoke.com', config);
  return res.data.joke;
}

const newDadJoke = async () => {
  const newJoke = await dadJokes();
  // console.log(newJoke);
  const newLi = document.createElement('li');
  newLi.append(newJoke);
  jokes.append(newLi)

}

newDadJoke()

button.addEventListener('click', newDadJoke);
// dadJokes()
// dadJokes()
// dadJokes()
// dadJokes()