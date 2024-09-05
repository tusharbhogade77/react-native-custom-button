import React from 'react';
import { TextInputProps } from 'react-native';
interface CustomTextInputProps extends TextInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    borderColor?: string;
}
declare const CustomTextInput: React.FC<CustomTextInputProps>;
export default CustomTextInput;
