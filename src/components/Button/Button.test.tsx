const { render, screen, fireEvent } = require('@testing-library/react');
const { Button } = require('./Button');

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
