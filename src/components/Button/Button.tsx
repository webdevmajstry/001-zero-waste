import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {variant?:string};
type ButtonVariants = 'small'|'default'|'large'

const variantClasses:Record<ButtonVariants,string> = {
    small:'bg-primary-500 text-light-100 hover:bg-primary-400 focus:bg-primary-400 focus:ring-alert transition ease-in-out duration-300 rounded text-xs py-2 px-2 m-1',
    default:'bg-primary-500 text-light-100 hover:bg-primary-400 focus:bg-primary-400 focus:ring-alert transition ease-in-out duration-300 rounded text-base py-2 px-3 m-1',
    large:'bg-primary-500 text-light-100 hover:bg-primary-400 focus:bg-primary-400 focus:ring-alert transition ease-in-out duration-300 rounded text-lg py-3 px-5 m-1',
}

export const Button = (props: ButtonProps) => {
    const {variant = 'default'} = props
return(<button className={`${variantClasses[variant as keyof Record<ButtonVariants,string>]}`} {...props}>{props.children}</button>)
}