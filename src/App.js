import React from 'react';
import './App.css';
import Card from './components/Card'
import AddNewCar from './components/AddNewCar'
import Counter from './components/Counter'


function App() {
  const [arrCard, setArrCard] = React.useState([
    {
      title: 'Honda',
      text: 'The Honda logo is a large “H” appeared as the brand’s badge.',
      img: 'https://www.carlogos.org/car-logos/honda-logo.png',
      imgAlt: 'Honda',
      active: false
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
  ])
  function Click(index) {
    setArrCard(arrCard.map((acc, ind) => {
      if (ind === index) {
        acc.active = !acc.active
        // console.log(`${acc.title} active - ${acc.active}`);
      }
      return acc
    }))
  }

  return (
    <div className="App">
      <AddNewCar />
      <Card arrCard={arrCard} Click={Click} />
      <Counter />
    </div>
  );

}
export default App;
