import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets';
const urlPeople = 'http://localhost:9009/api/people';

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const [peopleResponse, planetsResponse] = await Promise.all([
          axios.get(urlPeople),
          axios.get(urlPlanets),
        ]);

        const peopleData = peopleResponse.data;
        const planetsData = planetsResponse.data;
console.log(peopleData, planetsData)
        const matchedData = peopleData.map(person => {
          const matchedPlanet = planetsData.find(planet => person.homeworld === planet.id);
          if (matchedPlanet) {
            return {
              name: person.name,
              homeworld: matchedPlanet.name,
            };
          }
          
          return null;
        }).filter(match => match !== null);

        if (isMounted) {
          setMatches(matchedData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {matches.map((match, index) => (
        <Character key={index} name={match.name} homeworld={match.homeworld} />
      ))}
    </div>
  );
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
