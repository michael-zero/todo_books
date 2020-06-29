import React from 'react';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';
import BookList from './components/BookList';
import NewBookForm from './components/NewBookForm'

function App() {
  return (
    <div className="App">
      {/* <div className="caixa">
        <p>lorem ipusm dolor amit</p>
      </div> */}
    <BookContextProvider>
         <Navbar/>
         <BookList/>
         <NewBookForm/>
    </BookContextProvider>
    </div>
  );
}

export default App;
