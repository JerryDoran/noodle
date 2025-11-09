<<<<<<< HEAD
import { CustomButtonProps } from '@/type';
import cn from 'clsx';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

export default function CustomButton({
  title = 'Click Me',
  onPress,
  style,
  textStyle,
  leftIcon,
  isLoading = false,
}: CustomButtonProps) {
  return (
    <TouchableOpacity className={cn('custom-btn', style)} onPress={onPress}>
      {leftIcon}
      <View className='flex-center flex-row'>
        {isLoading ? (
          <ActivityIndicator size='small' color='white' />
        ) : (
          <Text className={cn('paragraph-semibold text-white', textStyle)}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
=======
import { Text, View } from 'react-native';
export default function CustomButton() {
  return (
    <View>
      <Text>CustomButton</Text>
    </View>
>>>>>>> 5e27afa5add862ebb3f8094c4a29bb33b746f638
  );
}
