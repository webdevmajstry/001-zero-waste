import { render, screen } from '@testing-library/react';

import { Card } from './Card';

describe('Card component', () => {
  it('render Card', () => {
    render(<Card />);
    expect(screen.getByTestId('test-card')).toBeInTheDocument();
  });
});
