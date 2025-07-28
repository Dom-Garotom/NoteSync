import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, TextInputKeyPressEventData, NativeSyntheticEvent } from 'react-native';

interface VerificationCodeInputProps {
  onCodeFilled?: (code: string) => void;
  codeLength?: number;
}

const VerificationCodeInput: React.FC<VerificationCodeInputProps> = ({
  onCodeFilled,
  codeLength = 6,
}) => {
  const [code, setCode] = useState<string[]>(Array(codeLength).fill(''));
  const inputsRef = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    if (/^\d?$/.test(text)) {
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);

      if (text && index < codeLength - 1) {
        inputsRef.current[index + 1]?.focus();
      }

      if (newCode.every((digit) => digit !== '') && onCodeFilled) {
        onCodeFilled(newCode.join(''));
      }
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {code.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputsRef.current[index] = ref)}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          keyboardType="number-pad"
          maxLength={1}
          style={styles.input}
          returnKeyType="done"
        />
      ))}
    </View>
  );
};

export default VerificationCodeInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'    
  },

  input: {
    width: 50,
    height: 54,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 24,
  },
});
