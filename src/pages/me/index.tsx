/**
 * @description index page
 */

import Taro from '@tarojs/taro';
import { Component, useState } from 'react';
import { View, Text } from '@tarojs/components';
import { AtButton, AtTabBar } from 'taro-ui';
import { Router } from 'tarojs-router-next';

// import "taro-ui/dist/style/components/button.scss"; // 按需引入
import './index.scss';

export default function Index() {
  const [currentBtn, setCurrentBtn] = useState(0);
  return (
    <View className="index">
      this is me
      {/* <View className="btn-group at-row at-row__justify--around">
        <AtButton
          className="btn at-col at-col-4"
          type="primary"
          onClick={toBuy}
        >
          送货上门
        </AtButton>
        <AtButton className="at-col at-col-4" type="secondary" onClick={toHelp}>
          跑腿接单
        </AtButton>
      </View> */}
      {/* <AtTabBar
        fixed
        tabList={[
          { title: '送货上门', iconType: 'lightning-bolt' },
          { title: '跑腿接单', iconType: 'phone' },
          { title: '个人信息', iconType: 'user', text: '100', max: 99 }
        ]}
        onClick={setCurrentBtn}
        current={currentBtn}
      /> */}
    </View>
  );
}
