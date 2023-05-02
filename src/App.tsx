import React from 'react';
import './App.css';
import { Home } from 'src/components/Home';
import { FilterContextProvider } from 'src/context/FilterContext';

function App() {
  return (
    <div className="App">
      <FilterContextProvider>
        <Home />
      </FilterContextProvider>
    </div>
  );
}

export default App;
