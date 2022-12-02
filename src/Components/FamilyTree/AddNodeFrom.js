import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import DatePicker from 'react-native-date-picker';
import LinearGradient from 'react-native-linear-gradient';

const AddNodeFrom = () => {
  const [state, setState] = useState({
    id: '',
    name: '',
    gender: 'male',
    value: '',
    dob: '',
    isOpen: false,
  });

  console.log(state);

  return (
    <View className="flex flex-1">
      <View className="flex flex-row justify-evenly">
        <TouchableOpacity
          onPress={() => setState({ ...state, gender: 'male' })}
          className={`flex justify-center items-center w-24 h-24  rounded-full border-blue-700 ${
            state.gender === 'male' ? 'border-2' : ''
          }`}>
          <LinearGradient
            colors={['#0a66c2', '#0a66c2']}
            className="flex w-20 h-20  rounded-full justify-center items-center font-semibold m-2">
            <Text className="text-white font-bold">Male</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setState({ ...state, gender: 'female' })}
          className={`flex justify-center items-center w-24 h-24  rounded-full border-blue-700  ${
            state.gender === 'female' ? 'border-2' : ''
          }`}>
          <LinearGradient
            colors={['#f76258', '#f75561', '#f52877']}
            className="flex w-20 h-20  rounded-full justify-center items-center font-semibold m-2">
            <Text className="text-white font-bold">Female</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <Autocomplete
        data={[]}
        value={state.value}
        onChangeText={text => setState({ ...state, value: text })}
        flatListProps={{
          keyExtractor: (_, idx) => idx,
          renderItem: ({ item }) => <Text>{item}</Text>,
        }}
        className="border-2 border-slate-300 rounded-lg"
      />
      <DatePicker
        modal
        open={state.isOpen}
        date={new Date()}
        onConfirm={date => setState({ ...state, dob: date, isOpen: false })}
        onCancel={() => setState({ ...state, isOpen: false })}
      />
    </View>
  );
};

export default AddNodeFrom;
