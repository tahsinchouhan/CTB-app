/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Dimensions, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;

function Graph() {
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <View className="flex justify-center items-center px-2 py-2">
      <LineChart
        data={data}
        width={windowWidth - (windowWidth * 2) / 100}
        // yAxisLabel="₹"
        yAxisSuffix="k"
        xAxisLabel="M"
        height={300}
        chartConfig={{
          backgroundColor: '#209FA5',
          backgroundGradientFrom: '#b9b9b9',
          backgroundGradientTo: '#209fa0',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
            padding: 0,
            margin: 0,
          },
          propsForDots: {
            r: '4',
            strokeWidth: '1',
            stroke: '#000',
          },
        }}
        // verticalLabelRotation={30}
      />
    </View>
  );
}

export default Graph;
