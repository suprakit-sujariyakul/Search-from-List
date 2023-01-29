import { useState, useEffect } from 'react'

//mock data
import userData from './userData'

function App() {
  const [showData, setShowData] = useState(userData);
  const [filter, setFilter] = useState('');

  function handleSearchInput(event) {
    setFilter(event.target.value);
  }

  useEffect (() => {
    let userList = [];
      for (const user of userData) {
        if (user.email.toUpperCase().indexOf(filter.toLocaleUpperCase()) > -1 || 
            user.first_name.toUpperCase().indexOf(filter.toLocaleUpperCase()) > -1 || 
            user.last_name.toUpperCase().indexOf(filter.toLocaleUpperCase()) > -1) {
              userList = [...userList, user];
        }
      }
    setShowData(userList)
    }
  , [filter])


  return (
    <div>
      <input type='text' id='searchBox' placeholder='Search for name' onChange={handleSearchInput}></input>
      <ul>
        {showData.map((user) => {
          return <li key={user.id}>{`${user.first_name} ${user.last_name}`}</li>
        })}
      </ul>
    </div>
  )
}

export default App
