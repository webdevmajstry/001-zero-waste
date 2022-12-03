import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button component', () => {
  it('renders Button', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders Button with Test text', () => {
    render(<Button>Test</Button>);
    screen.debug();
    expect(screen.getByRole('button', { name: 'Test' })).toBeInTheDocument();
  });

  it('renders Button with large variant prop', () => {
    render(<Button variant="large" />);
    expect(screen.getByRole('button')).toHaveAttribute('variant', 'large');
  });

  it('renders Button with small variant prop', () => {
    render(<Button variant="small" />);
    expect(screen.getByRole('button')).toHaveAttribute('variant', 'small');
  });

  it('Handles `onClick` event', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
