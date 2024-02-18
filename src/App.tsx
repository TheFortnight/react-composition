import './App.css'
import Cards from './components/Cards';

interface Card {
  src?: string;
  title: string;
  text: string;
  btnText: string;
};

const card1: Card = {
  src: 'src/imgs/1.jpg',
  title: 'Title 1',
  text: '«Зайчик» - нелинейная визуальная новелла в жанре ужасов, по мотивам одноимённого рассказа Дмитрия Мордаса. Действие истории происходит в тихом, ничем не',
  btnText: 'Secret Button',
};

const card2: Card = {
  src: 'src/imgs/2.jpg',
  title: 'title 2',
  text: '«Зайчик» - нелинейная визуальная новелла в жанре ужасов, по мотивам одноимённого рассказа Дмитрия Мордаса. Действие истории происходит в тихом, ничем не',
  btnText: 'Secret Button 2',
};

const card3: Card = {
  src: 'src/imgs/3.jpg',
  title: 'title 3',
  text: '«Зайчик» - нелинейная визуальная новелла в жанре ужасов, по мотивам одноимённого рассказа Дмитрия Мордаса. Действие истории происходит в тихом, ничем не',
  btnText: 'Secret Button 3',
};

const card4: Card = {
  title: 'title 3',
  text: '«Зайчик» - нелинейная визуальная новелла в жанре ужасов, по мотивам одноимённого рассказа Дмитрия Мордаса. Действие истории происходит в тихом, ничем не',
  btnText: 'Secret Button 4',
};

const cards: Card[] = [card1, card2, card3, card4];

function App() {

  return (
    <>
      <Cards cards={cards}/>
    </>
  )
};

export default App
