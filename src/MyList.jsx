const MyList = ({addMeal, mealPlans, deleteDay}) => {

    return (<div>
        <div>
            <h1>Weekly Meal Plan Ideas</h1>
            <button className="button-add" onClick={addMeal}>Add</button>
        </div>

        <div>
            {mealPlans.map(({id, title}) => (
                <div key={id}>
                    <p>{title}</p>
                    <button className="button-delete" onClick={() => deleteDay(id)}>Delete</button>
                </div>
            ))}
        </div>
    </div>)
}

export default MyList;