import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';

const constacts = [
  {
    name: 'Tahsin Chouham',
    email: 'tahsin@gmail.com',
    image: 'https://randomuser.me',
  },
  {
    name: 'Tahsin Chouham',
    email: 'wow@gmail.com',
    image: 'https://randomuser.me',
  },
];

const ContactScreen = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const renderItem = ({ item }) => <ContactListItem item={item} />;

  return (
    <View className="flex flex-1 ">
      <View className="flex flex-row border-2 border-gray-200 rounded-xl h-11 px-3 mx-2 my-2 ">
        <TextInput
          className=" flex-1"
          onChangeText={value => setSearchTerm(value)}
          value={searchTerm}
          placeholder="Search people"
        />
        {searchTerm.length > 0 && (
          <Pressable
            className="w-8  flex justify-center items-center"
            onPress={() => {
              setSearchTerm('');
            }}>
            <Text>x</Text>
          </Pressable>
        )}
      </View>
      <FlatList
        className="flex-1"
        data={constacts}
        renderItem={renderItem}
        keyExtractor={item => item.email}
      />
    </View>
  );
};

export default ContactScreen;

const ContactListItem = ({ item }) => (
  <View className="flex flex-row justify-between h-14 px-5 ">
    <View className="flex flex-row items-center space-x-5">
      <View className="bg-gray-400 rounded-full w-10 h-10 flex justify-center items-center">
        <Text>Pen SVg</Text>
      </View>
      <View className="flex items-center">
        <Text className="text-black text-sm font-medium ">{item.name}</Text>
      </View>
    </View>
    <View className="flex items-center justify-center">
      <Text>Arrow svg</Text>
    </View>
  </View>
);

ContactListItem.propTypes = {
  item: PropTypes.object.isRequired,
};
