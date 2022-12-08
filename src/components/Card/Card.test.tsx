import { Button } from '@components/Button';
import { Card } from '@components/Card';
import { render, screen } from '@testing-library/react';

import DefaultImage from './DefaultImage.png';

describe('Card component', () => {
  it('render Card', () => {
    render(<Card />);
    expect(screen.getByTestId('test-card')).toBeInTheDocument();
  });

  it('render optional picture as a prop', () => {
    render(<Card picture={DefaultImage.src} />);
    expect(screen.getByAltText('some alt text')).toBeInTheDocument();
  });

  it('render pieces of code as a footer', () => {
    render(<Card heading="heading" footer={<Button />} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('render any kind of children', () => {
    render(
      <Card heading="heading">
        <p>some children content</p>
      </Card>,
    );
    expect(screen.getByText('some children content')).toBeInTheDocument();
  });
});
