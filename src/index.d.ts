// src/index.d.ts
import { GestureResponderEvent } from 'react-native';

export interface CustomButtonProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    color?: string;
    backgroundColor?: string;
}
