"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/CustomButton.tsx
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var CustomButton = function (_a) {
    var title = _a.title, onPress = _a.onPress, _b = _a.color, color = _b === void 0 ? '#fff' : _b, _c = _a.backgroundColor, backgroundColor = _c === void 0 ? '#007bff' : _c;
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: [styles.button, { backgroundColor: backgroundColor }], onPress: onPress },
        react_1.default.createElement(react_native_1.Text, { style: [styles.text, { color: color }] }, title)));
};
var styles = react_native_1.StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
    },
});
exports.default = CustomButton;
