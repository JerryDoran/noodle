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
  );
}
