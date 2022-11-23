import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button component', () => {
  it('renders Button', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Handles `onClick` event', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
