import React from 'react';
import { render } from '@testing-library/react-native';
import { Welcome } from '../components/Welcome';

describe('Welcome Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Welcome />);
    expect(getByTestId('welcome-container')).toBeDefined();
  });

  it('displays welcome text with default name', () => {
    const { getByTestId } = render(<Welcome />);
    const text = getByTestId('welcome-text');
    expect(text.props.children).toContain('World');
  });

  it('displays custom name when provided', () => {
    const { getByTestId } = render(<Welcome name="React Native Test" />);
    const text = getByTestId('welcome-text');
    expect(text.props.children).toContain('React Native Test');
  });
});
