import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGithubUser = async () => {
      setLoading(true);
      const { data: fetchedUsers } = await axios.get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      setLoading(false);
      setUsers(fetchedUsers);
    };

    fetchGithubUser();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Users users={users} loading={loading} />
      </div>
    </div>
  );
};

export default App;
