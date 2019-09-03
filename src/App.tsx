import React from 'react';
import logo from './logo.svg';
import './App.css';
import { styled } from '@material-ui/core/styles';
import {
  compose,
  palette,
  sizing,
  spacing,
} from '@material-ui/system';

const Example = styled('div')(
  compose(
    spacing,
    sizing,
    palette,
  ),
);

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Example>
          Test
        </Example>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
