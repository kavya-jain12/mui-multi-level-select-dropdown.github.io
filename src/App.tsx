import React from 'react';
import './App.css';
import { Home } from 'src/components/Home';
import { FilterContextProvider } from 'src/containers/FilterContext';

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
