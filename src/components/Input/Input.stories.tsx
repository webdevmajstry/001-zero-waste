import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Input, Props } from './Input';

export default {
  title: 'General/Input',
  component: Input,
} as Meta;

const Template: Story<Props> = () => {    
    const [localValue, setValue] = useState<string>('');
    const onChangeInput = (inputValue: string) => {
        setValue(inputValue);
    }
    return (
        <><Input
            labelText='Label'
            placeholder='Placeholder'
            className='test-class-name'
            name='test-name'
            value={localValue}
            htmlFor='test-for'
            onChangeInput={onChangeInput}
            helperText='This is helperText'
            />
        </>

    )
}

export const Default: Story<Props> = Template.bind({});
Default.parameters = {
  design: {
    url: ''
  }
}
