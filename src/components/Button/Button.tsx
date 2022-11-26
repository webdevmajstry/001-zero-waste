import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {variant?:string};

export const Button = (props: ButtonProps) => {
    const {variant = 'default'} = props
    const variantClasses:any = {
        'small':'bg-primary-500 text-light-100 hover:bg-primary-400 focus:bg-primary-400 focus:ring-alert transition ease-in-out duration-300 rounded text-xs py-2 px-2 m-1',
        'default':'bg-primary-500 text-light-100 hover:bg-primary-400 focus:bg-primary-400 focus:ring-alert transition ease-in-out duration-300 rounded text-base py-2 px-3 m-1',
        'large':'bg-primary-500 text-light-100 hover:bg-primary-400 focus:bg-primary-400 focus:ring-alert transition ease-in-out duration-300 rounded text-lg py-3 px-5 m-1',
    }

return(<button className={`${variantClasses[variant]}`} {...props}>{props.children}</button>)
}