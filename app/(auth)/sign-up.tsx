import CustomButton from '@/components/custom-button';
import CustomInput from '@/components/custom-input';
import { createUser } from '@/lib/appwrite';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Text, View } from 'react-native';

export default function SignUpScreen() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  async function handleSubmit() {
    if (!form.name || !form.email || !form.password) {
      return Alert.alert('Error', 'Please fill in all fields');
    }

    const email = form.email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Alert.alert('Error', 'Please enter a valid email address');
    }

    if (form.password.length < 6) {
      return Alert.alert(
        'Error',
        'Password must be at least 6 characters long'
      );
    }

    setIsSubmitting(true);

    try {
      // Call appwrite Sign Up function
      await createUser({
        email: form.email,
        password: form.password,
        name: form.name,
      });

      Alert.alert('Success', 'You have successfully signed up');
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
    <KeyboardAvoidingView className='gap-8 bg-white rounded-lg p-5'>
      <CustomInput
        placeholder='Enter your full name'
        value={form.name}
        onChangeText={(text) =>
          setForm((prev) => ({
            ...prev,
            name: text,
          }))
        }
        label='Name'
      />
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
        title='Sign Up'
      />

      <View className='flex justify-center flex-row gap-2'>
        <Text className='base-regular text-gray-100'>
          Already have an account?
        </Text>
        <Link href='/sign-in' className='base-bold text-primary'>
          Sign In
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
}
