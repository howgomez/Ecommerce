
import { useState } from 'react'
import Nav from './Navigation/Nav.jsx'
import Products from './Products/Products.jsx'
import Recommended from './Recommended/Recommended.jsx'
import SideBar from './SideBar/SideBar.jsx'
import products from './db/data.jsx'
import Card from './components/Card.jsx'

function App() {

  const [selectCategory, setSelectCategory] = useState(null);

  // ---------Input Filter------------
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  const filteredItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1))

  // ---------Radio Filter------------
  const handleChange = event => {
    setSelectCategory(event.target.value);
  }

  // ---------Buttons Filter------------
  const handleClick = (event) => {
    setSelectCategory(event.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //Filtering input items

    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected Filter

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, title, newPrice }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          title === selected ||
          newPrice === selected
      )
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectCategory, query);

  return (
    <>
      <SideBar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products results={result} />
    </>
  )

  }

export default App
