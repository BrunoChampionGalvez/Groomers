import { useState } from "react";


function App() {
  const [userData, setUserData] = useState({ username: '', password: '' })

  console.log(userData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserData({ ...userData, [name]: value })
  }
  return (
    <>
      <form action="">
        <input type="text" name='username' value={userData.username} onChange={handleInputChange} />
        <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
      </form>
    </>
  )
}

export default App
