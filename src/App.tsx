import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container-fluid mt-3">
        <div className="row">
          <div className="col">
            <UserForm/>
          </div>
          <div className="col">
            <Users/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
