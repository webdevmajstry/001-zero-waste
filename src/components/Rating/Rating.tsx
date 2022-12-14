import clsx from 'clsx';
import Heart from '@svg/heart.svg';
import Stars from '@svg/star.svg';

export type RatingProps = {
  variant?: 'hearts' | 'stars';
  type?: 'number' | 'default' | 'hidden';
  rate: 0|1|2|3|4|5 ;
};

type RatingVariants = 'hearts' | 'stars';

const iconByVariant: Record<RatingVariants, typeof Heart | typeof Stars> = {
  hearts: Heart,
  stars: Stars,
};

const testIdByVariant: Record<RatingVariants, string> = {
  hearts: 'hearts rating',
  stars: 'stars rating',
};

export const Rating = (props: RatingProps) => {
  const { variant = 'hearts', type = 'default', rate } = props;
  const IconComponent = iconByVariant[variant]; 
  const testId = testIdByVariant[variant];
  if (!rate && type !== 'number') return null;
  return (
    <div
      data-testid="rating container"
      key={type + variant + rate * Math.random()}
      className="flex items-center"
    >
      {[...Array(type === 'number' ? 1 : 5)].map((el, index) => {
        const isHidden = type === 'hidden';
        const isActive = index + 1 <= rate || type === 'number';
        const iconClasses = clsx(
          isActive && 'mx-px',
          isHidden && !isActive && 'hidden',
          !isActive && !isHidden && 'opacity-50',
        );
        return (
          <IconComponent data-testid={testId} key={testId+Math.random()} className={iconClasses} />
        );
      })}
      {type === 'number' && <span data-testid="number of rating">{rate}</span>}
    </div>
  );
};
