// App.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Mock the components that are imported in App but not under test
jest.mock('./components/1-Home/1-header/Header.jsx', () => () => <div>Header Mock</div>);
jest.mock('./components/1-Home/2-home/Home.jsx', () => () => <div>Home Mock</div>);
jest.mock('./components/1-Home/9-Footer/Footer.jsx', () => () => <div>Footer Mock</div>);

describe('App Component', () => {
  test('renders without crashing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Check if mocked Header, Home, and Footer components are rendered
    expect(screen.getByText('Header Mock')).toBeInTheDocument();
    expect(screen.getByText('Home Mock')).toBeInTheDocument();
    expect(screen.getByText('Footer Mock')).toBeInTheDocument();
  });
});
