import clsx from 'clsx';
import Heart from '@svg/heart.svg';
import Stars from '@svg/star.svg';

export type RatingProps = {
  variant?: 'hearts' | 'stars';
  type?: 'number' | 'default' | 'hidden';
  rate: number;
};

export const Rating = (props: RatingProps) => {
  const { variant = 'hearts', type = 'default', rate } = props;
  if (rate <= 0) return null;
  return (
    <div
      key={type + variant + rate * Math.random()}
      className="flex items-center"
    >
      {[...Array(type === 'number' ? 1 : 5)].map(
        (el, index) => {
          const isHidden = type === 'hidden';
          const isActive = index + 1 <= rate;
          const iconClasses = clsx(
            isActive && 'mx-px',
            isHidden && 'hidden',
            !isActive && !isHidden && 'opacity-50',
          );
          return (
            <>
              {variant === 'hearts' ? (
                <Heart
                  key={`rate${variant}${Math.random()}`}
                  className={iconClasses}
                />
              ) : (
                <Stars
                  key={`rate${variant}${Math.random()}`}
                  className={iconClasses}
                />
              )}
            </>
          );
        },
      )}
      {type === 'number' && <span>{rate}</span>}
    </div>
  );
};
