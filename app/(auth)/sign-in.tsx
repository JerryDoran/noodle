import CustomButton from '@/components/custom-button';
import CustomInput from '@/components/custom-input';
import { signIn } from '@/lib/appwrite';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, View } from 'react-native';

export default function SignInScreen() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  async function handleSubmit() {
    const { email, password } = form;
    if (!email || !password) {
      return Alert.alert('Error', 'Please enter a valid email and password');
    }

    if (password.length < 6) {
      return Alert.alert(
        'Error',
        'Password must be at least 6 characters long'
      );
    }

    setIsSubmitting(true);

    try {
      await signIn({ email, password });

      Alert.alert('Success', 'You have successfully signed in');
      router.push('/');
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Error', error.message);
      } else {
        Alert.alert('Error', String(error));
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <View className='gap-8 bg-white rounded-lg p-5'>
      <CustomInput
        placeholder='Enter your email'
        value={form.email}
        onChangeText={(text) =>
          setForm((prev) => ({
            ...prev,
            email: text,
          }))
        }
        label='Email'
        keyboardType='email-address'
      />
      <CustomInput
        placeholder='Enter your password'
        value={form.password}
        onChangeText={(text) =>
          setForm((prev) => ({
            ...prev,
            password: text,
          }))
        }
        label='Password'
        secureTextEntry
      />
      <CustomButton
        isLoading={isSubmitting}
        onPress={handleSubmit}
        title='Sign In'
      />

      <View className='flex justify-center flex-row gap-2'>
        <Text className='base-regular text-gray-100'>
          Don&apos;t have an account?
        </Text>
        <Link href='/sign-up' className='base-bold text-primary'>
          Sign Up
        </Link>
      </View>
    </View>
  );
}
