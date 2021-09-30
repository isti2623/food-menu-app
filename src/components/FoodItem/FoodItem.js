import React from 'react';
import { Card, Col, Button, } from 'react-bootstrap';
import { useHistory } from 'react-router';

const FoodItem = (props) => {
    const { strMeal, strMealThumb, strInstructions, idMeal } = props.meal;
    //const { idMeal } = console.log(props.meal);
    //console.log(id);

    const history = useHistory();

    const handleClick = () => {
        history.push(`/fooddetails/${idMeal}`);
    }
    return (


        <Col >
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0, 120)}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={handleClick} className="btn btn-danger">Details</Button>
                </Card.Footer>
            </Card>
        </Col>


    );
};

export default FoodItem;