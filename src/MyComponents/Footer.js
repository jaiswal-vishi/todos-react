import React from 'react';

export default function Footer() {
  let footerstyle={
    position: "relative",
    width: "100%",
    // top: "calc(100vh - 64px)",
    top: "70vh",
    border: "2px solid red",
  }
  return (
    <footer className='bg-dark text-light' style={footerstyle}>
      <p className='text-center p-4'>Copyright &copy; MyTodosList.com!</p>
    </footer>
  );
}
