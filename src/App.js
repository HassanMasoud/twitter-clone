import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import Sidebar from './components/Sidebar/Sidebar';

library.add(fab, faHashtag)

function App() {
  return (
    <div className="app">
      <Sidebar />
    </div>
  );
}

export default App;
