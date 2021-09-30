import React, { useEffect, useState } from 'react';
import { Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import FoodItem from '../FoodItem/FoodItem';

const Food = () => {
    const [searchText, setSearchText] = useState("");
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])
    const handleSearchField = e => {
        const searchTextVaule = e.target.value;
        setSearchText(searchTextVaule);
    }
    return (
        <div>
            <h2 className="text-warning text-center fw-bold fs-1">Food Menu Here</h2>
            <hr className="w-25 mx-auto" />
            <InputGroup className="mb-3 mx-auto w-50 mt-4">
                <FormControl
                    onChange={handleSearchField}
                    placeholder="search your favorite food"
                    aria-label="Recipient's username"
                    aria-describedby="search"
                />
            </InputGroup>
            <Container>
                <Row xs={12} md={3}>
                    {
                        meals && meals.map(meal => <FoodItem

                            key={meal.idMeal}
                            meal={meal}
                        >
                        </FoodItem>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Food;