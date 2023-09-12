
const token = localStorage.getItem("token");

const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }
  
  const request = (endpoint, options) => {
    const url = `https://api.ssgdiplom.nomoreparties.co${endpoint}`;
    return fetch(url, options).then(checkResponse);
  }

  export const register = ( name, email, password) => {
    return request('/signup', {
      method: 'POST',
      credentials: 'include',
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
        credentials: 'include',
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
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`,
        },
      })
    };

    export const updateProfile = (name,email) => {
        return request(`/users/me`, {
          method: 'PATCH',
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            "Content-type": "application/json",
            'Authorization': `Bearer ${token}`,
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
            image: `https://api.nomoreparties.co/${movie.image.url}`,
            trailerLink: movie.trailerLink,
            thumbnail: `https://api.nomoreparties.co/${movie.image.url}`,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
          })
        })
      }
  
      export const getSaveMovies = (jwt) => {
        return request(`/movies`, {
          method: 'GET',
          credentials: 'include',
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
  