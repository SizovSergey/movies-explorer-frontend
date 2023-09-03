const request = (url, options) => {
    return fetch(url, options).then(checkResponse);
  }
  
  const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }
  
const getMovies = () => {
    const url = 'https://api.nomoreparties.co/beatfilm-movies';
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };
  
    return request(url, options);
  };

  export default getMovies;