import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardSample = ({ props }: any) => {
    console.log('Props: ', props)
    return <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.src}/>
    <Card.Body>
      <Card.Title><h3>{props.title}</h3></Card.Title>
      <Card.Text>
        {props.text}
      </Card.Text>
      <Button variant="primary">{props.btnText}</Button>
    </Card.Body>
  </Card>
};

export default CardSample;