import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';


storiesOf('Button', module)
    .add('Primary', () => <Button type="primaryOne" label="Do Something" />)
    .add('Outline Primary', () => <Button type="primary" outline label="Do Something" />)
    .add('Faded Primary', () => <Button type="primary" faded label="Do Something" />)
    .add('Large Primary', () => <Button type="primary" large label="Do Something" />)
    .add('Outline Large Primary', () => <Button type="primary" large outline label="Do Something" />)
    .add('Faded Large Primary', () => <Button type="primary" large faded label="Do Something" />)
    .add('Danger', () => <Button type="dangerOne" label="Do Something" />)
    .add('Outline Danger', () => <Button type="danger" outline label="Do Something" />)
    .add('Faded Danger', () => <Button type="danger" faded label="Do Something" />)
    .add('Large Danger', () => <Button type="danger" large label="Do Something" />)
    .add('Outline Large Danger', () => <Button type="danger" large outline label="Do Something" />)
    .add('Faded Large Danger', () => <Button type="danger" large faded label="Do Something" />)
    .add('Success', () => <Button type="successOne" label="Do Something" />)
    .add('Outline Success', () => <Button type="success" outline label="Do Something" />)
    .add('Faded Success', () => <Button type="success" faded label="Do Something" />)
    .add('Large Success', () => <Button type="success" large label="Do Something" />)
    .add('Outline Large Success', () => <Button type="success" large outline label="Do Something" />)
    .add('Faded Large Success', () => <Button type="success" large faded label="Do Something" />)
    .add('Warning', () => <Button type="warningOne" label="Do Something" />)
    .add('Outline Warning', () => <Button type="warning" outline label="Do Something" />)
    .add('Faded Warning', () => <Button type="warning" faded label="Do Something" />)
    .add('Large Warning', () => <Button type="warning" large label="Do Something" />)
    .add('Outline Large Warning', () => <Button type="warning" large outline label="Do Something" />)
    .add('Faded Large Warning', () => <Button type="warning" large faded label="Do Something" />)
    .add('Default', () => <Button type="defaultOne" label="Do Something" />)
    .add('Outline Default', () => <Button type="default" outline label="Do Something" />)
    .add('Faded Default', () => <Button type="default" faded label="Do Something" />)
    .add('Large Default', () => <Button type="default" large label="Do Something" />)
    .add('Outline Large Default', () => <Button type="default" large outline label="Do Something" />)
    .add('Faded Large Default', () => <Button type="default" large faded label="Do Something" />)
    .add('Cart Icon Text', () => <Button type="icontext" cart label="Add To Cart" />)
    .add('Heart Icon Text', () => <Button type="icontext" heart label="Add To Favorties" />)
    .add('Heart Icon', () => <Button type="icon" heart label="" />)
    .add('Cart Icon', () => <Button type="icon" cart label="" />)






