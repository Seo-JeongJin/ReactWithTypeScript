import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import UserProfile from './components/UserProfile';

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
      <UserProfile name={'Alice'} age={30} status={'관리자 계정'} />
      <UserProfile name={'Bob'} age={25} status={'일반 사용자'} />
    </>
  );
}
