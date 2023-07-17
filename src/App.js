import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';
import HousingOptions from './Components/HousingOptions';

function App() {
  return (
    <div className="min-h-screen flex-auto flex-col bg-white text-black">
      <Header />
      <SearchBar />
      <HousingOptions />
      <Footer />
    </div>
  );
}

export default App;
