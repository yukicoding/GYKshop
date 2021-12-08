/**
 * @description help page
 */

import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { AtButton, AtCard } from 'taro-ui';

// import "taro-ui/dist/style/components/button.scss"; // 按需引入
import './index.scss';

export default function Index() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 3, 23, 123, 123];
  return (
    <View className="index">
      {arr.map((item, index) => (
        <View key={index} className="card-view">
          <AtCard
            note="点击查看订单详情"
            extra="2021.12.8 12:00"
            title="林猪妮"
            thumb="http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG"
          >
            送到男生2栋410
          </AtCard>
        </View>
      ))}
    </View>
  );
}
