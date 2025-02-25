import { useState } from 'react';
import './App.css'
import MyList from './MyList';
import MyMealsAndIngridients from './MyMealsAndIngridients';

function App() {

  const [mealPlans, setMealPlans] = useState([])

  const addMeal = () => {
    const newMeal = {
      title: "Today is..."
    }
    setMealPlans([newMeal, ...mealPlans])
    console.log(newMeal);
  }

  return (
    <div className='App'>
      <MyList addMeal={addMeal} mealPlans={mealPlans}/>
      <MyMealsAndIngridients />

    </div>
  )
}

export default App
