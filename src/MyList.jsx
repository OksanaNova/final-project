const MyList = ({addMeal, mealPlans}) => {

    return (<div>
        <div>
            <h1>Weekly Meal Plan Ideas</h1>
            <button className="button-add" onClick={addMeal}>Add</button>
        </div>

        <div>
            {mealPlans.map(({title}) => (
                <div>
                    <p>{title}</p>
                    <button className="button-delete">Delete</button>
                </div>
            ))}
        </div>
    </div>)
}

export default MyList;