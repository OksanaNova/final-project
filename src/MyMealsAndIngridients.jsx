const MyMealsAndIngridients = ({ activeMeal, updateDay }) => {

    const editMyMeal = (myInput, value) => {
        // console.log('myInput', myInput)
        // console.log('myValue', value)
        // console.log('edit my meal')
        updateDay({
            ...activeMeal,
            [myInput]: value
        })
    }
    
    if (!activeMeal) return <p>Plan your week ahead of time!</p>
    
    return (
        <div className="whole-plan">

                <input
                type="text"
                className="myInput"
                placeholder="Today is..."
                id='title'
                value={activeMeal.title}
                onChange={(e) => { 
                    // console.log('onChange')
                    editMyMeal("title", e.target.value)
                }}
                />

                <textarea 
                placeholder="Write your meal plan here"
                id="mealForADay"
                value={activeMeal.mealForADay}
                onChange={(e) => editMyMeal("mealForADay", e.target.value)}
                />

                <textarea 
                placeholder="List of ingredients"
                id="mealForADay"
                value={activeMeal.ingredients}
                onChange={(e) => editMyMeal('ingredients', e.target.value)}
                />
        
        </div>
    )
}

export default MyMealsAndIngridients;