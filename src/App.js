import React from 'react';
import Book from './Component/book';
import NavBar from './Component/navbar';
import './index.css'
import ThemeProviderContext from './Context/theme';
import Themetoggle from './Component/Themetoggle';
import AuthContextProvider from './Context/auth';
import BookContextProvider from './Context/book';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <ThemeProviderContext>
      <NavBar />
      <BookContextProvider>
      <Book />
      </BookContextProvider>
      <Themetoggle />
      </ThemeProviderContext>
      </AuthContextProvider>

    </div>
  );
}

export default App;
