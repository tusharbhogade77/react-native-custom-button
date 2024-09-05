// src/CustomTextInput.tsx
import React from 'react';
import { TextInput, StyleSheet, View, TextInputProps } from 'react-native';

interface CustomTextInputProps extends TextInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    borderColor?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ 
    value, 
    onChangeText, 
    placeholder = "Enter text", 
    borderColor = '#ccc', 
    ...rest 
}) => {
    return (
        <View style={[styles.inputContainer, { borderColor }]}>
            <TextInput
                style={styles.textInput}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                {...rest}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
    },
    textInput: {
        fontSize: 16,
    },
});

export default CustomTextInput;
