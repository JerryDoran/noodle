import CustomButton from '@/components/custom-button';
import CustomInput from '@/components/custom-input';
import { images } from '@/constants';
import { Slot } from 'expo-router';
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';

export default function AuthLayout() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        className='bg-white h-full'
        keyboardShouldPersistTaps='handled'
      >
        <View
          className='w-full relative'
          style={{ height: Dimensions.get('screen').height / 2.25 }}
        >
          <ImageBackground
            source={images.loginGraphic}
            className='size-full rounded-b-lg'
          />
          <Image
            source={images.logo}
            className='absolute z-10 self-center size-48 -bottom-16'
          />
        </View>
        <View className='mt-10 px-6 space-y-6'>
          <CustomInput
            placeholder='Enter your email'
            value={''}
            onChangeText={() => {}}
            label='Email'
            keyboardType='email-address'
          />
          <CustomButton />
        </View>
      </ScrollView>

      <Slot />
    </KeyboardAvoidingView>
  );
}
