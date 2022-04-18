import cover1 from '../assets/filme1.jpg';
import cover2 from '../assets/filme2.jpg';
import cover3 from '../assets/filme3.jpg';
import cover4 from '../assets/filme4.jpg';

export interface Movie {
  title: string;
  cover: string;
  score?: number | string;
}


const mockData: Movie[] = [
  {
    title: 'Avengers',
    cover: cover1,
  },
  {
    title: 'Avengers',
    cover: cover2,
  },
  {
    title: 'Avengers',
    cover: cover3,
  },
  {
    title: 'Avengers',
    cover: cover4,
  },
  {
    title: 'Avengers',
    cover: cover1,
  },
  {
    title: 'Avengers',
    cover: cover2,
  },
  {
    title: 'Avengers',
    cover: cover3,
  },
  {
    title: 'Avengers',
    cover: cover4,
  },
  {
    title: 'Avengers',
    cover: cover1,
  },
  {
    title: 'Avengers',
    cover: cover2,
  },
  {
    title: 'Avengers',
    cover: cover3,
  },
  {
    title: 'Avengers',
    cover: cover4,
  },
  {
    title: 'Avengers',
    cover: cover1,
  },
  {
    title: 'Avengers',
    cover: cover2,
  },
  {
    title: 'Avengers',
    cover: cover3,
  },
  {
    title: 'Avengers',
    cover: cover4,
  },

];

export default mockData;