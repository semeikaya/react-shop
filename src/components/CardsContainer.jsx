import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Cards.module.css";
import PropTypes from "prop-types";


function CardsContainer({ name, image, price }) {
    return (
        <Card style={{ width: "18rem" }} className = {styles.cards}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>{price}</Card.Title>
                <Button variant="primary">Купить</Button>
            </Card.Body>
        </Card>
    );
}
CardsContainer.protoTypes ={
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
}

export default CardsContainer;
