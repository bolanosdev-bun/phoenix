'use client';
import React from 'react';
import type { ButtonProps } from './types'
export const Button: React.FC<ButtonProps> = ({text}) => {
    return <button>{text}</button>
}