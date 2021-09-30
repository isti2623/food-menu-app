import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

import { useParams } from 'react-router';


const FoodDetails = () => {
    const { idMeal } = useParams();
    //console.log(idMeal);
    const [mealItem, setMealItem] = useState([]);
    //const history = useHistory();

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setMealItem(data?.meals[0]));
    }
        , [idMeal]);

    /* const handleClick = () => {
        history.push('/fooddetails');
    } */
    return (
        <div>
            <Container>
                <Row>
                    <Col md={6}>
                        <img className="mt-5 img-fluid" src={mealItem.strMealThumb} alt="" srcset="" />
                    </Col>
                    <Col md={6}>
                        <div className="ms-5 mt-5" >
                            <h1 className="fw-bold text-warning mt-5"><span className="text-dark">Name:</span> {mealItem.strMeal}</h1>
                            <hr />
                            <h4 className=" text-dark mt-5"> <span className="text-warning">Instruction:</span>  {mealItem.strInstructions}</h4>
                            <h2 className=" text-dark mt-5"> <span className="text-warning">Area:</span>  {mealItem.strArea}</h2>
                            <Row md={6}>
                                <Col>
                                    <Button onClick="handleCart" className="fw-bold" variant="warning">Order Now</Button>
                                </Col>
                                <Col>
                                    <Button className="fw-bold" variant="warning">All Menus</Button>
                                </Col>
                            </Row>



                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FoodDetails;