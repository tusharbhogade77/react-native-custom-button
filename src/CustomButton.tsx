// src/CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

interface CustomButtonProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    color?: string;
    backgroundColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, color = '#fff', backgroundColor = '#007bff' }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
            onPress={onPress}
        >
            <Text style={[styles.text, { color }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
    },
});

export default CustomButton;
