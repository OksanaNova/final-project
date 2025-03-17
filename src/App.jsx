import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import MyList from './MyList';
import MyMealsAndIngridients from './MyMealsAndIngridients';

function App() {

  const [mealPlans, setMealPlans] = useState(
    localStorage.getItem("myKey") ? JSON.parse(localStorage.getItem("myKey")) : []);
  const [selectedDay, setSelectedDay] = useState('');

  useEffect(() => {
    localStorage.setItem("myKey", JSON.stringify(mealPlans))
  }, [mealPlans])

  const addMeal = () => {
    const newMeal = {
      title: "Today is...",
      id: uuidv4(),
      mealForADay: "",
      ingredients: ""
    }
    setMealPlans([newMeal, ...mealPlans])
    // console.log(newMeal);
  }

  const deleteDay = (mealId) => {
    setMealPlans(mealPlans.filter(({id}) => id !== mealId));
  } 

  const updateDay = (myUpdatedMeal) => {
    // console.log('update day')
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
  // console.log(mealPlans)

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
        activeMeal={getActiveMeal()}
        updateDay={updateDay}
      />

    </div>
  )
}

export default App
