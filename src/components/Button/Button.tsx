import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {variant?:string,size?:string};

export const Button = (props: ButtonProps) => {
    const {variant = 'default'} = props
    let btnClass:string=''
    switch (props.size) {
        case 'small':
            btnClass = `${variant} btn-small`;
            break;
        case 'large':
            btnClass = `${variant} btn-large`;
            break;
        default:
            btnClass = `${variant} btn`;
            break;
    }
return(<button className={`${btnClass}`} {...props}>{props.children}</button>)
}