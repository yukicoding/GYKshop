import Taro from '@tarojs/taro';
import { View, ScrollView } from '@tarojs/components';
import './index.scss';

export default (props) => {
  const scrollTop = 0;
  const Threshold = 20;
  return (
    <ScrollView
      className="scroll-container"
      scrollY
      scrollWithAnimation
      scrollTop={scrollTop}
      lowerThreshold={Threshold}
      upperThreshold={Threshold}
    >
      <View style={{ backgroundColor: 'red' }}>A</View>
      <View style={{ backgroundColor: 'red' }}>B</View>
      <View style={{ backgroundColor: 'red' }}>C</View>
    </ScrollView>
  );
};
