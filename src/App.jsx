import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import MyList from './MyList';
import MyMealsAndIngridients from './MyMealsAndIngridients';

function App() {

  const [mealPlans, setMealPlans] = useState([]);
  const [selectedDay, setSelectedDay] = useState('');

  const addMeal = () => {
    const newMeal = {
      title: "Today is...",
      id: uuidv4(),
      mealForADay: "",
      ingredients: ""
    }
    setMealPlans([newMeal, ...mealPlans])
    console.log(newMeal);
  }

  const deleteDay = (mealId) => {
    setMealPlans(mealPlans.filter(({id}) => id !== mealId));
  } 

  const updateDay = (myUpdatedMeal) => {
    const updatedMeals = mealPlans.map((mealItem) => {
      if (mealItem.id === myUpdatedMeal.id) {
        return myUpdatedMeal;
      }
      return mealItem;
    })
    setMealPlans(updatedMeals)
  }

  const getActiveMeal = () => {
    return mealPlans.find(({id}) => id === selectedDay)
  }
  console.log(mealPlans)
  return (
    <div className='App'>

      <MyList 
      addMeal={addMeal} 
      mealPlans={mealPlans} 
      deleteDay={deleteDay}
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
      />
      
      <MyMealsAndIngridients 
        selectedDay={getActiveMeal()}
        updateDay={updateDay}
      />

    </div>
  )
}

export default App
