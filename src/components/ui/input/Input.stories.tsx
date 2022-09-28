import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Input from './Input';


export default {
    title: 'Input',
    component: Input,
} as ComponentMeta<typeof Input>;


const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {type: 'text', name: 'input-name', value: '', placeholder: 'This is input'};

export const Rounded = Template.bind({});
Rounded.args = {...Default.args, rounded: true};

export const Error = Template.bind({});
Error.args = {...Default.args, error: true};

export const Textarea = Template.bind({});
Error.args = {...Default.args, type: 'textarea'};
