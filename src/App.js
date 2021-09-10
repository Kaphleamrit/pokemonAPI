import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import List from './components/List';

  function App() {
 
  return (
    <div className="App">  
    <QueryClientProvider client= {new QueryClient()}> 
      <List />
      </QueryClientProvider> 
    </div>
  );
}

export default App;
