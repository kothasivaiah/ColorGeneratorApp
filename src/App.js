import React from 'react';
import './style.css';
import SingleColor from './SingleColor';
import Values from 'values.js';

export default function App() {
  const [color, setColor] = React.useState('');
  const [error, setError] = React.useState(false);
  const [list, setList] = React.useState(new Values('#f15025').all(10));
  
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(colors).a11(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <section>
        <h3>color generator!</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeHolder="#f15025"
            className={`${error ? 'error' : 'null'}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="color">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;