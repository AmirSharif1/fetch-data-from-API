import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])

  useEffect( () => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setUsers(res.data)
        console.log(res.data);
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <div className='conta'>
        
        {users.map((user) => (
          <div className="box" key={user.id}>
            <p>ID: {user.id}</p>
            <p>Price: ${user.price}</p>
            <img src={user.image} alt={user.title} width={400} />
            <p>Name:{user.title}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App


 // <li key={user.id}>
                  //   <p>ID: {user.id}</p>
                  //   <p>Price: ${user.price}</p>
                  //   <img src={user.image} alt={user.title} width={400} />
                  // </li>

  
  //   axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
  //  