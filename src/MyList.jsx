const MyList = ({addMeal, mealPlans, deleteDay, selectedDay, setSelectedDay}) => {

    return (<div>
        <div>
            <h1>Weekly Meal Plan Ideas</h1>
            <button className="button-add" onClick={addMeal}>Add</button>
        </div>

        <div>
            {mealPlans.map(({id, title, mealForADay}) => (
                <div key={id} 
                className={`meal ${id === selectedDay ? "selected" : "default"}`}
                onClick={() => setSelectedDay(id)}>
                    <p className="field">{title}</p>
                    <p className="field">{mealForADay.substring(0, 60)}</p>
                    <button className="button-delete" onClick={() => deleteDay(id)}>Delete</button>
                </div>
            ))}
        </div>
    </div>)
}

export default MyList;