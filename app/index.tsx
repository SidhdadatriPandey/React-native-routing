import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();

  function handleClick() {
    router.push('/(tabs)');
  }
  function handleClick2() {
    router.push('/explore');
  }

  return (
    <View style={{flexDirection:'row', gap:100, marginHorizontal:"auto"}}>
      <TouchableOpacity onPress={handleClick}>
        <View style={{ paddingTop: 100 }}>
          <Text>Go1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleClick2}>
        <View style={{ paddingTop: 100 }}>
          <Text>Go2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleClick}>
        <View style={{ paddingTop: 100 }}>
          <Text>Go3</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Index;
