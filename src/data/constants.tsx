const URL = 'https://api.themoviedb.org/3';
const IMAGEURL = 'https://image.tmdb.org/t/p';
const APIKEY = '479a498c106f78c7905c8dc32a920378';
const APISTRING = `?api_key=${APIKEY}&language=pt-BR`;
const EVENTS = {
  PosterClick: 'PosterClick',
  ModalClose: 'ModalClose'
}

export default {
  URL,
  IMAGEURL,
  APIKEY,
  APISTRING,
  EVENTS,
};