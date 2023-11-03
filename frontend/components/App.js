import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets';
const urlPeople = 'http://localhost:9009/api/people';

function App() {
  // Create state to hold the data from the API
  const [name, setName] = useState('');
  const [homeworld, setHomeworld] = useState('');
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [peopleResponse, planetsResponse] = await Promise.all([
          axios.get(urlPeople),
          axios.get(urlPlanets),
        ]);

        const person = peopleResponse.data;
        const planet = planetsResponse.data;

        setName(person.name);
        setHomeworld(person.homeworld);
        
        const matchedData = [];
        if (person.homeworld === planet.id) {
          matchedData.push({
            homeworld: planet.name,
          });
        }
        
        setMatches(matchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App