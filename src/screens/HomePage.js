import React from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import Graph from '../components/Graph';
import Header from '../components/Header';
import MiniCard from '../components/MiniCard';

function HomePage({navigation}) {
  // const {
  //   data = [],
  //   isLoading,
  //   error,
  // } = useQuery([DONATIONS_QUERY], DonationDB.getDonations);
  // //
  return (
    <SafeAreaView className="bg-white">
      <View className="bg-white h-screen box-border">
        <Header title="Home" />
        <View className="h-full">
          <View className="py-2 px-8 mx-4 bg-secondary h-28 rounded-2xl flex flex-row justify-between items-center ">
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

          {/* <View className="flex flex-row justify-between">
            <Text className="font-semibold text-2xl ">Statics</Text>
            <Image
              source={require('../assets/images/dot.png')}
              className="w-10"
            />
          </View> */}
          <View className="px-2">
            <Text className="text-sm font-pop">
              Donation Statistics medical
            </Text>
            <Graph />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomePage;
