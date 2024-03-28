import React from 'react';

export default function Buscador({ searchGames, sortGames }) {
  const inputHandler = (e) => {
    if (e.target.name === 'search') {
      searchGames(e.target.value);
    }
    if (e.target.name === 'sort') {
      sortGames(e.target.value);
    }
  };

  return (
    <div className='row m-0 py-2'>
      <div className='col-sm-9 mb-2'>
        <div className='input-group'>
          <input
            type='text'
            className='form-control'
            name='search'
            id='search'
            placeholder='Buscar juego...'
            onChange={inputHandler}
          />
        </div>
      </div>
      <div className='col-sm-3 mb-2'>
        <div className='input-group'>
          <select
            className='form-select'
            id='sort'
            name='sort'
            onChange={inputHandler}
          >
            <option value=''> ordenar por:</option>
            <option value='date_asc'>Fecha de lanzamiento ↑</option>
            <option value='date_desc'>Fecha de lanzamiento ↓</option>
            <option value='az'>Alfabeticamente ↑</option>
            <option value='za'>Alfabeticamente ↓</option>
          </select>
        </div>
      </div>
    </div>
  );
}