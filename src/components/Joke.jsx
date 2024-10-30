import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Joke() {
    const url = 'https://v2.jokeapi.dev/joke/Any';
    const [joke, setJoke] = useState(null);
    const [error, setError] = useState('');
    useEffect(() => {
        const fetchJoke = async () => {
            try {
                const result = await axios.get(url);
                setJoke(result.data);
            } catch (error) {
                setError('Joke cannot be fetched.');
                console.error(error);
            }
        };
        console.log(fetchJoke);
        fetchJoke();
    }, []);

    return (
        <div className="container mx-auto py-8">
          <h2 className="text-2xl font-bold text-center mb-6">Joke of the day.</h2>
          {error && <p className="text-purple-500 text-center">{error}</p>}
          {joke ? (
            <div className="text-center">
              {joke.type === 'single' ? (
                <p>{joke.joke}</p>
              ) : (
                <>
                  <p>{joke.setup}</p>
                  <p>{joke.delivery}</p>
                </>
              )}
            </div>
          ) : (
            <p className="text-center">Loading joke...</p>
          )}
        </div>
      );
    };
    
    export default Joke;
