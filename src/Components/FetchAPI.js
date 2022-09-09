import React, { useEffect, useState } from 'react'

const FetchAPI = () => {

    const [users, setUsers] = useState([]);
    const [IsLoading, setIsLoading] = useState(false);

    const FetchData = (e) =>{
        setIsLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res =>{
            return res.json();
        })
        .then(data =>{
            setIsLoading(false);
            setUsers(data);
        })
    }

    useEffect(() => {
        FetchData()
      }, [])

      return (
        <div>
          {IsLoading && <p>Loading...</p>}
          {users.length > 0 && (
            <ul>
              {users.map(user => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          )}
        </div>
      )
  
 
}

export default FetchAPI