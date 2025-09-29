import React from 'react'


const Search = ({searchStr, searchHandler}) => {
  return (
    <div>
      <input 
      className='m-5'
        type="text"
        placeholder='Chercher...'
        value={searchStr}
        onChange={searchHandler} />
    </div>
  )
}

export default Search
