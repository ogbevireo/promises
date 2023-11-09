const starWarsPeople = async () => {
  try {
    const res = await fetch('https://swapi.dev/api/people/1')
    const data = await res.json();
    console.log('person 1:', data);

    const res2 = await fetch('https://swapi.dev/api/people/2')
    const data2 = await res2.json();
    console.log('person 2:', data2);

    const res3 = await fetch('https://swapi.dev/api/people/2')
    const data3 = await res3.json();
    console.log('person 3:', data3)
  } catch (e) {
    console.log(e);
  }
};

starWarsPeople(); 