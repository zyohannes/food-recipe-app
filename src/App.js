import Form from './components/Form';
import { useState } from 'react';
import axios from 'axios';
import Recipe from './components/Recipe';

import './App.css';
import Details from './components/Details';

const uri = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [foodname, setFoodName] = useState('any');
  const [foodList, setFoodList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const searchFood = async (e) => {
    e.preventDefault();
    const foodNameValue = e.target.elements.foodName.value;
    setFoodName(foodNameValue);

    setIsLoading(true);
    try {
      const result = await axios.get(uri, 5000);
      console.log(result.data);
      setFoodList(result.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">SETP-Github-Project</header>
      <section>
        <Form searchFood={searchFood} />
        {/* <Recipe foodList={foodList} isLoading={isLoading} /> */}
        <Details foodname={foodname} />
      </section>
    </div>
  );
}

export default App;
