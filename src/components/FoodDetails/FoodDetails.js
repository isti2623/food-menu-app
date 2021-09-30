import React, { useEffect, useState } from 'react';

import { useHistory, useParams } from 'react-router';

const FoodDetails = () => {
    const { idMeal } = useParams();
    console.log(idMeal);
    const [mealItem, setMealItem] = useState({});
    const history = useHistory();

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${idMeal}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setMealItem(data));
    }, [idMeal]);

    const handleClick = () => {
        history.push('/fooddetails');
    }
    return (
        <div>
            <h3>Food Detail of: {idMeal}</h3>
            <h1>{mealItem?.strMeal}</h1>
            <h2>{mealItem?.strCategory}</h2>
            <h4>{mealItem?.strInstructions}</h4>
            <p>Works at: {mealItem?.strMealThumb}</p>
            <button onClick={handleClick}>See All Friends</button>
        </div>
    );
};

export default FoodDetails;