import React from 'react';
import { GestureResponderEvent } from 'react-native';
interface CustomButtonProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    color?: string;
    backgroundColor?: string;
}
declare const CustomButton: React.FC<CustomButtonProps>;
export default CustomButton;
