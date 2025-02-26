import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import MyList from './MyList';
import MyMealsAndIngridients from './MyMealsAndIngridients';

function App() {

  const [mealPlans, setMealPlans] = useState([])

  const addMeal = () => {
    const newMeal = {
      title: "Today is...",
      id: uuidv4()
    }
    setMealPlans([newMeal, ...mealPlans])
    console.log(newMeal);
  }

  const deleteDay = (mealId) => {
    setMealPlans(mealPlans.filter(({id}) => id !== mealId));
  } 

  return (
    <div className='App'>
      <MyList addMeal={addMeal} mealPlans={mealPlans} deleteDay={deleteDay}/>
      <MyMealsAndIngridients />

    </div>
  )
}

export default App
