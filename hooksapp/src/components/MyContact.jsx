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
  const [resultSearch, setResultSearch] = useState([]);

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
    
    // console.log(search)
    useUpdateDocTitle(search)

    
    const filterUsers = () => {
      const foundUsers = users.filter( user => {
        return Object.values(user)
        .join('')
        .toLowerCase()
        .includes(search.toLowerCase())
      })
      setResultSearch(foundUsers);
    }
    
    useEffect(() => {
      if (search !== '') {
        filterUsers();
      } else {
        setResultSearch([])
      }
    }, [search]);
    


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
        resultSearch.length === 0 && search !== '' ? msgDisplay ('Pas de résultat', 'red')
        :
        search === '' ? msgDisplay('Veuillez effectuer une recherche', 'green')
        :
        <TableUsers
          dataArray={resultSearch}
          />
      }
    </div>
  )
}

export default MyContact
