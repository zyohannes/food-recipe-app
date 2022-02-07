import { useState } from 'react';

function Form(props) {
  const { searchFood } = props;
  //const { foodname, setFoodName } = useState('any');

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <h3>Recipe App</h3>
      <form className="" onSubmit={(e) => searchFood(e)}>
        <input type="text" name="foodName" placeholder="chicken" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Form;
