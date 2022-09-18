import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import Graph from '../Components/Graph';
import Header from '../Components/Header';
import MiniCard from '../Components/MiniCard';

function HomePage({navigation}) {
  const {isLoading, error, data} = useQuery(['repoData'], () => {
    console.log('ddbv');
    return [];
  });

  if (isLoading) console.log(isLoading);

  if (error) console.log(error);
  console.log(data, isLoading, error);
  return (
    <SafeAreaView className="bg-white">
      <View className="bg-white h-screen box-border p-6">
        <Header title="Home" />
        <View className="h-full">
          <View className="py-2 px-8 bg-secondary h-28 rounded-2xl flex flex-row justify-between items-center ">
            <Text className="text-white font-bold text-lg w-[50%]">
              Start new Fundraising
            </Text>
            <Pressable
              onPress={() => {
                navigation.push('Home');
              }}
              className="w-full">
              <View className="p-1 w-[45%] py-6 flex bg-white m-4 rounded-2xl">
                <Text className=" text-md font-normal text-black text-center">
                  Start Now
                </Text>
              </View>
            </Pressable>
          </View>

          <View className=" py-6 flex justify-center flex-row ">
            <MiniCard
              src={require('../assets/images/medical.png')}
              cardTitle="medical"
            />
            <MiniCard
              src={require('../assets/images/education.png')}
              cardTitle="Education"
            />
            <MiniCard
              src={require('../assets/images/disaster.png')}
              cardTitle="Disaster"
            />
            <MiniCard
              src={require('../assets/images/others.png')}
              cardTitle="Other"
            />
          </View>

          <View className="flex flex-row justify-between">
            <Text className="font-semibold text-2xl ">Statics</Text>
            <Image
              source={require('../assets/images/dot.png')}
              className="w-10"
            />
          </View>
          <View>
            <Graph />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomePage;
