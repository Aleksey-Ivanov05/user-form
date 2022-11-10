import React, {useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import {User} from "./types";

function App() {
  const [users, setUsers] = useState<User[]>([
    {id: '1', name: 'Aleksey', email: 'lepri4dw@gmail.com', isActive: 'Activity', role: 'user'},
    {id: '2', name: 'Evgeny', email: 'test@gmail.com', isActive: 'not activity', role: 'admin'},
  ]);

  const addUser = (newUser: User) => {
    setUsers(prev => [...prev, newUser])
  }


  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container-fluid mt-3">
        <div className="row">
          <div className="col">
            <UserForm onSubmit={addUser}/>
          </div>
          <div className="col">
            <Users users={users}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
