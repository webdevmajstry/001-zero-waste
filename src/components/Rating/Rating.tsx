import Heart from '@svg/heart.svg'
import Stars from '@svg/star.svg'

export type RatingProps = { variant?: string; type?: string; rate: number };

export const Rating = (props: RatingProps) => {
  const { variant , type = 'default', rate } = props;

  return (
    <>
    {rate>0?<div key={`${type}${variant}${rate}`} className="flex items-center">
      {[...Array(type === 'number' ? 1 : rate<=0?0:5)].map(
        (el, index) => {
          return (
            <>
            {variant==='hearts'?<Heart key={`rate${variant}${Math.random()}`}
              className={
                index + 1 <= rate
                  ? 'mx-px'
                  : type === 'hidden'
                  ? 'hidden'
                  : 'mx-px opacity-50'
              }/>:<Stars key={`rate${variant}${Math.random()}`}
              className={
                index + 1 <= rate
                  ? 'mx-px'
                  : type === 'hidden'
                  ? 'hidden'
                  : 'mx-px opacity-50'
              }/>}
            </>
          );
        },
      )}
      {type === 'number' ? <span>{rate}</span> : null}
    </div>:null}
    </>
  );
};
