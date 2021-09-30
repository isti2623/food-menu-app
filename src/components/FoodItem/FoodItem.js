import React from 'react';
import { Card, Col, Row, Button, Container } from 'react-bootstrap';

const FoodItem = (props) => {
    const { strMeal, strMealThumb, strInstructions } = props.meal;
    return (

        <Container>
            <Row xs={6} md={4}>
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
                            <Button className="btn btn-danger">Details</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
};

export default FoodItem;