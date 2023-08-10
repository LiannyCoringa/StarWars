import React, { useState } from 'react';
import './App.css';
import Table from './components/Table';
import APIContext from './context/APIContext';
import useFetch from './hooks/useFetch';

function App() {
  return (
    <Table />
  );
}

export default App;
