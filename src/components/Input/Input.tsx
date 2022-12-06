import React from 'react'

export type Props = {

  labelText?: string,
  placeholder?: string,
  className?: string,
  value?: string,
  name?: string,
  htmlFor?: string,
  /**
   * Callback for Input
   */
  onChangeInput: any,
  text?: string,
  helperText?: string,
}

export function Input({labelText, placeholder='', className='', value='', name='', htmlFor='',helperText='', onChangeInput}:Props) {    
    return (
        <div>
            <label className='text-text-01-normal font-medium text-sm leading-5'>
                {labelText}
            </label>
            <div className="relative">
                <input
                    id={htmlFor}
                    className={[
                        "relative w-64 pl-3 h-8 py-2 border rounded bg-ui-03 border-ui-06 text-text-01-normal leading-5 text-sm text-left hover:bg-ui-03 hover:border-ui-07 focus:bg-ui-03 focus:outline-none focus:border-interactive-01-active active:bg-ui-03",                        
                        className
                        ].join(' ')} 
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    onChange={ (e) => { onChangeInput(e.target.value) }}
                />
            </div>
            <p className='text-text-01-normal font-medium text-sm leading-5'>
                {helperText}
            </p>
        </div>
    )
}   
