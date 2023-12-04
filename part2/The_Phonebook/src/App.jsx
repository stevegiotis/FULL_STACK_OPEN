import { useState } from 'react';

const App = () => {
  const [people, setPersons] = useState([
  { name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [filterInput,Filter] = useState('')
  const [filtered, SetFiltered] = useState([])

  const searchForNameInList = () => {
    return people.some((p) => p.name === newName);
  };

  const updatePeople = (e) => {
    e.preventDefault();
    if (!searchForNameInList()) {
      setPersons([...persons, { name: newName, phoneNumber: newPhoneNumber }]);
      setNewName('');
      setNewPhoneNumber('');
    } else {
      alert(`${newName} is already added to the phonebook`);
    }
  };

  const FilterOut = (e) => {
    e.preventDefault();
    const filterValue = e.target.value.toLowerCase();
    Filter(filterValue);
  
    const newPeople = people.filter((p) => p.name.toLowerCase().startsWith(filterValue));
  
    SetFiltered(newPeople);
  };

  return (
    
    <main>
      <h2>Phonebook</h2>
      <div>
        <p>filter shown with <input
        type='text'
        value={filterInput}
        onChange={FilterOut}
        />
        </p>
      </div>
      <h2>add a new</h2>
      <form onSubmit={updatePeople}>
        <div>
          Name:{' '}
          <input
            type='text'
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          Phone Number:{' '}
          <input
            type='tel'
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Format: 123-456-7890"
            value={newPhoneNumber}
            onChange={(e) => setNewPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      { filterInput !== '' ? 
      filtered.map((f) => {
        return (
          <li key={f.id}>
            {f.name} -{f.number}
          </li>
        )
      })
       : people.map((p) => {
        return (
          <li key={p.name}>
            {p.name} - {p.number}
          </li>
        );
      })
      
      }
    </main>
  );
};

export default App;
