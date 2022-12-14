import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import {
  FlatList,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { GET_ALL_FAMILIES } from '../apollo/quaries';
import ArrowRightIcon from '../Components/SVG/ArrowRightIcon';
import { FAMILY_TREE_SCREEN } from '../utils/constant';

const FamilyScreen = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const renderItem = ({ item }) => <FamilyListItem item={item} />;

  const { data, error, loading, refetch } = useQuery(GET_ALL_FAMILIES);

  const families = data?.getAllFamilies || [];

  return (
    <View className="flex flex-1">
      <View className="flex flex-row border-2 border-gray-200 rounded-xl h-11 px-3 mx-2 my-2 ">
        <TextInput
          className="flex-1"
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
        data={families}
        renderItem={renderItem}
        refreshing={loading}
        onRefresh={refetch}
        // when you have no family
        ListEmptyComponent={
          <View className="flex-1 justify-center items-center mt-20">
            <Text className="text-2xl font-bold">
              {error ? error.message : 'No Family'}
            </Text>
          </View>
        }
        keyExtractor={item => item.email}
      />
    </View>
  );
};

export default FamilyScreen;

const FamilyListItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(FAMILY_TREE_SCREEN, { familyId: item.email })
      }
      className="flex flex-row justify-between items-center h-14 px-5 border-b border-slate-200">
      <View className="flex flex-row items-center space-x-5">
        <Text className="text-black text-sm font-medium font-sans">
          {item?.name.replace(item?.familyName, '')} {item.familyName} family
        </Text>
        <Text>Faimly members {item?.noOfMembers}</Text>
      </View>
      <View className="flex items-center justify-center">
        <ArrowRightIcon />
      </View>
    </TouchableOpacity>
  );
};

FamilyListItem.propTypes = {
  item: PropTypes.object.isRequired,
};
