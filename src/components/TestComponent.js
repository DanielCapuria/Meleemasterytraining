import React from 'react';

const App = () => {
  return (
    <div>
      <header className="bg-dark text-white py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 style={{ color: '#f8c471', margin: 0 }}>My Website</h1>
          <nav>
            <a href="#home" className="btn btn-outline-light mx-2">Home</a>
            <a href="#about" className="btn btn-outline-light mx-2">About</a>
            <a href="#contact" className="btn btn-outline-light mx-2">Contact</a>
          </nav>
        </div>
      </header>
      <div>
        <div className="custom-header">Welcome to My Custom Styled App</div>
        <p className="custom-paragraph">
          This is an example of a paragraph styled with custom CSS. You can use
          this to define unique styles for different sections of your app.
        </p>
        <button className="custom-button">Click Me</button>
      </div>
    </div>
  );
};

export default App;
