import {BarChart} from 'react-native-chart-kit';

import React from 'react';
import {Dimensions, View} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Graph = () => {
  const data = {
    labels: ['This Month', 'Last Month'],
    datasets: [
      {
        data: [40, 45, 50],
      },
    ],
  };
  const chartConfig = {
    // backgroundGradientFrom: '#209FA5',
    backgroundGradientFromOpacity: 0,
    // backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `#000`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.7,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <View className="py-4">
      <BarChart
        data={data}
        width={windowWidth - 40}
        height={300}
        yAxisLabel="Rs "
        chartConfig={chartConfig}
        // verticalLabelRotation={30}
      />
    </View>
  );
};

export default Graph;
