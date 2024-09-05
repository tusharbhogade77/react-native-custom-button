"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/CustomTextInput.tsx
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var CustomTextInput = function (_a) {
    var value = _a.value, onChangeText = _a.onChangeText, _b = _a.placeholder, placeholder = _b === void 0 ? "Enter text" : _b, _c = _a.borderColor, borderColor = _c === void 0 ? '#ccc' : _c, rest = __rest(_a, ["value", "onChangeText", "placeholder", "borderColor"]);
    return (react_1.default.createElement(react_native_1.View, { style: [styles.inputContainer, { borderColor: borderColor }] },
        react_1.default.createElement(react_native_1.TextInput, __assign({ style: styles.textInput, value: value, onChangeText: onChangeText, placeholder: placeholder }, rest))));
};
var styles = react_native_1.StyleSheet.create({
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
exports.default = CustomTextInput;
