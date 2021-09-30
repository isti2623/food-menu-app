import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';


const FoodDetails = () => {
    const { idMeal } = useParams();
    //console.log(idMeal);
    const [mealItem, setMealItem] = useState({});
    //const history = useHistory();

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setMealItem(data.meals));
    }, [idMeal]);

    /* const handleClick = () => {
        history.push('/fooddetails');
    } */
    return (
        <div>
            <h1>Id number : {idMeal}</h1>
            <h3>Name : {mealItem?.strMeal}</h3>
        </div>
    );
};

export default FoodDetails;