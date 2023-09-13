import { MYAPI,YANDEXAPI } from './constans';

const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }
  
  const request = (endpoint, options) => {
    const url = `${MYAPI}${endpoint}`;
    return fetch(url, options).then(checkResponse);
  }

  export const register = ( name, email, password) => {
    return request('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
  
      },
      body: JSON.stringify({ name, email, password}),
    })
  };
  
  export const authorize = (email, password) => {
      return request('/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
  
    };
  
    export const getProfile = (jwt) => {
      return request('/users/me', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`,
        },
      })
    };

    export const updateProfile = (name,email,jwt) => {
        return request(`/users/me`, {
          method: 'PATCH',
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            "Content-type": "application/json",
            'Authorization': `Bearer ${jwt}`,
          },
          body: JSON.stringify({name,email})
        })
      }
      

      export const saveMovies = (movie,jwt) => {
        return request(`/movies`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${jwt}`,
          },
          body: JSON.stringify({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: `${YANDEXAPI}${movie.image.url}`,
            trailerLink: movie.trailerLink,
            thumbnail: `${YANDEXAPI}${movie.image.formats.url}`,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
          })
        })
      }
  
      export const getSaveMovies = (jwt) => {
        return request(`/movies`, {
          method: 'GET',
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${jwt}`,
          },
        })
      }
  
      export const deleteMovies = (id,jwt) => {
        return request(`/movies/${id}`, {
          method: 'DELETE',
          credentials: 'include',
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${jwt}`,
          },
        })
      }
  