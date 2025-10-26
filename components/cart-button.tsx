import { Image, Text, TouchableOpacity, View } from 'react-native';
import bag from '../assets/icons/bag.png';

export default function CartButton() {
  const totalItems = 3;
  return (
    <TouchableOpacity className='cart-btn' onPress={() => {}}>
      <Image source={bag} className='size-5' resizeMode='contain' />
      {totalItems > 0 && (
        <View className='cart-badge'>
          <Text className='small-bold text-white'>{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
