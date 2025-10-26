import { offers } from '@/constants';
import cn from 'clsx';
import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CartButton from '@/components/cart-button';
import arrowDown from '../../assets/icons/arrow-down.png';
import arrowRight from '../../assets/icons/arrow-right.png';

export default function IndexPage() {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <FlatList
        ListHeaderComponent={() => (
          <View className='flex-between flex-row w-full my-5 px-5'>
            <View className='flex-start'>
              <Text className='small-bold text-primary'>DELIVER TO</Text>
              <TouchableOpacity className='flex-center flex-row gap-x-1 mt-0.5'>
                <Text className='paragraph-bold text-dark-100'>Austintown</Text>
                <Image
                  source={arrowDown}
                  className='size-3'
                  resizeMode='contain'
                />
              </TouchableOpacity>
            </View>
            <CartButton />
          </View>
        )}
        data={offers}
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;
          return (
            <View className=''>
              <Pressable
                className={cn(
                  'offer-card',
                  isEven ? 'flex-row-reverse' : 'flex-row'
                )}
                style={{ backgroundColor: item.color }}
                android_ripple={{ color: '#fffff22' }}
              >
                {({ pressed }) => (
                  <React.Fragment>
                    <View className='h-full w-1/2'>
                      <Image
                        source={item.image}
                        className='size-full'
                        resizeMode='contain'
                      />
                    </View>
                    <View
                      className={cn(
                        'offer-card__info',
                        isEven ? 'pl-10' : 'pr-10'
                      )}
                    >
                      <Text className='h1-bold text-white leading-tight'>
                        {item.title}
                      </Text>
                      <Image
                        source={arrowRight}
                        className='size-12'
                        resizeMode='contain'
                        tintColor='#ffffff'
                      />
                    </View>
                  </React.Fragment>
                )}
              </Pressable>
            </View>
          );
        }}
        contentContainerClassName='pb-28 px-5'
      />
    </SafeAreaView>
  );
}
