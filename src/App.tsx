import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

export default function App() {
  return (
    // <React.Fragment>
    //   <h1>App Component</h1>
    //   <h1>App Component</h1>
    // </React.Fragment>
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
