import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import TransactionCard from '../Components/TransactionCard';

function TransactionsScreen({navigation}) {
  return (
    <SafeAreaView className="bg-white rounded-t-2xl">
      <View className="h-screen p-5 rounded-t-[32px] bg-[#E0EDEA]">
        <Text className="text-xl font-bold font-sans text-black">
          Transactions
        </Text>
        <View className="mt-10">
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default TransactionsScreen;
