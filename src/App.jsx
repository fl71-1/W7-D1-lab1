import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://66e7e6a0b17821a9d9da6efe.mockapi.io/login')
      .then(response => {
        setCharacters(response.data);
      })

      
  }, []);

  const addCharacter = () => {
    const newCharacter = { name, gender, image };
    axios.post('https://66e7e6a0b17821a9d9da6efe.mockapi.io/login', newCharacter)
      .then(response => {
        setCharacters([...characters, response.data]);
        setName('');
        setGender('');
        setImage('');
      })
    
  };

  const deleteCharacter = (id) => {
    if 
    
    (window.confirm("Oh ! , are you sure you want to delete?")) {
      axios.delete(`https://66e7e6a0b17821a9d9da6efe.mockapi.io/login/${id}`)
        .then(() => {
          setCharacters(characters.filter(character => character.id !== id));
        })
      
    }
  };

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6 bg-cover bg-center bg-fixed"
         style={{ backgroundImage: 'url(https://wallpapers.com/images/hd/rick-and-morty-cool-starry-ykl12xt65zj599p7.jpg)' }}>
      <h1 className="text-4xl font-extrabold text-center mb-6 text-white">List of characters</h1>
<div className="flex justify-center">
<input
        className=" w-1/2 p-3 mb-6 text-gray-700 bg-white/80 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
        type="text"
        placeholder=" looking for a personality..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
</div>
   

      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map(character => (
            <div key={character.id} className="bg-white/60 backdrop-blur-md rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
              <img
                className="rounded-full mb-4"
                src={character.image}
                style={{ width: '120px', height: '120px' }}
              />
              <p className="font-semibold text-xl text-gray-900">{character.name}</p>
              <ul className="text-sm text-gray-600 mt-2">
                <p className="font-bold">About more:</p>
                <li>Gender: {character.gender}</li>
                <li>Status:{character.status}</li>
              </ul>
          <div onClick={() => deleteCharacter(character.id)} >
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-person-x hover:text-red-500  hover:scale-105 " viewBox="0 0 16 16">
  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708"/>
</svg>
              
              </div>
            </div>
          ))
        ) : (


            <p className="  text-2xl text-white">Oops! There is no character with this name .</p>
        )}
      </div>

      <h2 className="text-3xl font-bold text-center mt-10 mb-6 text-white">إضافة شخصية جديدة</h2>
      <div className="bg-white/60 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <input
          className="block w-full p-3 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Character name ...?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="block w-full p-3 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="profile picture"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <select
          className="block w-full p-3 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Choose gender</option>
          <option value="Male">male</option>
          <option value="Female">female</option>
        </select>
        <div
          onClick={addCharacter}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-person-plus-fill w-full hover:text-green-700 " viewBox="0 0 16 16">
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/>
</svg>
        </div>
      </div>
    </div>
  );
};

export default App;
