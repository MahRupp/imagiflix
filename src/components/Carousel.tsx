import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import mockData, { Movie } from '../data/mock';

import  Poster from './Poster';

import './Carousel.css';

interface CarouselData {
  title?: string;
  data?: Movie[];
  getTitle?: ()=>void;
}

const Carousel = ({ title= 'Filmes em destaque', data = mockData }: CarouselData) => {
  enum Direction {
    left,
    right,
  }

  const SlickArrow = ({ direction, onClick }: {direction: Direction, onClick?: ()=>{};}) => (
    <button type='button'
      className={`absolute w-16 h-full z-10 bg-black bg-opacity-50 top-0
      ${direction ? 'right-0' : 'left-0'}`}
      onClick={onClick}
      >
      <FontAwesomeIcon 
      icon={direction ? faChevronRight : faChevronLeft} size='3x' 
      />
    </button>
  )
  const options = {
      infinite: true,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: <SlickArrow direction={Direction.left} />,
      nextArrow: <SlickArrow direction={Direction.right} />,
  };

  return (
    <section className='carousel'>
      <h2 className='relative z-10 text-xl ml-8'>{title}</h2>
      <Slick  className='relative mb-8'{...options} >
        {data.map((movie, index) => Poster(movie, index))}
      </Slick>
    </section>
  );
};

export default Carousel; 