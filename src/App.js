import React from 'react';
import './App.css';
import Card from './components/Card'


function App() {
  let arrCard = [
    {
      title: 'Honda',
      text: 'The Honda logo is a large “H” appeared as the brand’s badge.',
      img: 'https://www.carlogos.org/car-logos/honda-logo.png',
      imgAlt: 'Honda',
      active: true
    },
    {
      title: 'Toyota',
      text: 'The Honda logo is a large “H” appeared as the brand’s badge.',
      img: 'https://www.carlogos.org/car-logos/toyota-logo.png',
      imgAlt: 'Toyota',
      active: false
    },
    {
      title: 'Mazda',
      text: 'The Honda logo is a large “H” appeared as the brand’s badge.',
      img: 'https://www.carlogos.org/car-logos/mazda-logo.png',
      imgAlt: 'Mazda',
      active: false
    },
    {
      title: 'Nissan',
      text: 'The Honda logo is a large “H” appeared as the brand’s badge.',
      img: 'https://www.carlogos.org/car-logos/nissan-logo.png',
      imgAlt: 'Nissan',
      active: false
    },
  ]
  function Click(index) {
    arrCard = arrCard.map((acc, ind) => {
      if (ind === index) {
        acc.active = !acc.active
        console.log(`${acc.title} active - ${acc.active}`);
      }
      return acc
    })
  } 
  return (
    <div className="App">
      <Card arrCard={arrCard} Click={Click} />
    </div>
  );

}
export default App;
