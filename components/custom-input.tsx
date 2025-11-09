import { CustomInputProps } from '@/type';
import cn from 'clsx';
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export default function CustomInput({
  placeholder = 'Enter text',
  value,
  onChangeText,
  label,
  secureTextEntry = false,
  keyboardType = 'default',
<<<<<<< HEAD
  type,
=======
>>>>>>> 5e27afa5add862ebb3f8094c4a29bb33b746f638
}: CustomInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className='w-full'>
      <Text className='label'>{label}</Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize='none'
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor='#888'
        className={cn(
          'input',
          isFocused ? 'border-primary' : 'border-gray-300'
        )}
      />
    </View>
  );
}
