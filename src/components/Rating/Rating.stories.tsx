import { Meta, Story } from '@storybook/react';
import { Rating } from './Rating';

export default {
    title: 'Rating',
    component: Rating,
    argTypes:{
        type:{
            options:['default','number','hidden'],
            defaultValue:'default',
            control:{
                type:'radio'
            },
            type:{
                name:'string'
            }
        },
        variant:{
            options:['hearts','stars'],
            defaultValue:'hearts',
            control:{
                type:'radio'
            },
            type:{
                name:'string'
            }
        },
        rate:{
            defaultValue:5,
            type:{
                name:'number',
                require:true
            },
            
        }
    }
  } as Meta;

const Template: Story = (args) => <Rating {...args}/>

export const BasicRating = Template.bind({})