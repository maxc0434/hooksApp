import React from 'react'
import Search from './Search'
import { useState, useEffect } from 'react';
import useUpdateDocTitle from '../hooks/useUpdateDocTitle';
import TableUsers from './TableUsers';

const msgDisplay = (msg, color) => {
  return (
    <p style={{textAlign: 'center', color: color}}>
      {msg}
    </p>
  )
}


const MyContact = () => {

    const [search, setSearch] = useState ('');
    const [users, setUsers] = useState ([]);
    const [isLoading, setIsLoading] = useState(true);

    console.log(users)

    useEffect (() => {
        fetch(' https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
          setUsers(json);
          setIsLoading(false);
        })
        .catch(error => console.log(error.message))
    }, []);
    
    console.log(search)
    useUpdateDocTitle(search)

    const handleChange = e => {
        setSearch(e.target.value)
    }

  return (
    <div>
      {
        isLoading ? msgDisplay('Veuillez patienter!', 'red') : (
          <Search
            searchStr={search}
            searchHandler={handleChange}
          />
        )
      }

      {
        <TableUsers
          dataArray={users}
          />
      }
    </div>
  )
}

export default MyContact
