import CardSample from "./CardSample";

const Cards = ({cards}: any) => {
    console.log ('CARDS: ', typeof cards)
    return <>
        {cards.map((card: Object, index: number) => {
            return <CardSample props={card} key={index}/>
        })}
    </>
};

export default Cards;