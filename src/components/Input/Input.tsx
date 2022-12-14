import React, { HTMLInputTypeAttribute } from 'react';

interface CustomInputProps {
    label: string;
    placeholder: string;
    required?: boolean;
    type?: HTMLInputTypeAttribute;
    value: string;
    onChange: (value: string) => void;
}

export const Input = (props: CustomInputProps): JSX.Element => {
    function checkRequired(): JSX.Element {
        if (props.required) {
            return <div></div>}
        return <>
        </>
        ;
    }
    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        props.onChange(event.target.value);
    }

    return <div className="flex text-dark-500 flex-col py-2 px-4"> {props.label}
    {checkRequired()} <input type={props.type} value={props.value} placeholder={props.placeholder} onChange={handleChange}/>
    <div className="flex text-primary-300 flex-col py-2 px-1">This is required field</div>
    </div>
    ;
}

export default Input;
