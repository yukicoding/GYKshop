/**
 * @description shop pages
 */
import Taro from '@tarojs/taro';
import { Component, useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Swiper,
  SwiperItem
} from '@tarojs/components';
// import { AtButton } from "taro-ui";
// import ScrollList from "../../components/ScrollList";
// import "taro-ui/dist/style/components/button.scss"; // 按需引入
import './index.scss';
import '../../mock/api';
export default function Index() {
  const [checked, setChecked] = useState(0);
  const fetchBuyList = async () => {
    Taro.request({
      url: '/api',
      method: 'GET'
    }).then((res) => console.log(res));
  };
  useEffect(() => {
    fetchBuyList();
  }, []);

  const scrollTop = 0;
  const Threshold = 20;
  const left = [1, 23, 4, 5, 6, 764, 5, 234, 532, 5, 32, 523, 5, 235];

  /**
   *
   * @param index current index
   */
  const toRight = (index: number) => {
    setChecked(index);
  };
  return (
    <View className="shop">
      <View className="left">
        <ScrollView
          className="left-scrollview"
          scrollY
          scrollWithAnimation
          scrollTop={scrollTop}
          lowerThreshold={Threshold}
          upperThreshold={Threshold}
        >
          {left.map((item, index) => {
            return (
              <View
                className={`leftScroll-item  ${
                  checked === index ? 'active' : ''
                }`}
                key={index}
                id={`left-${index}`}
                onClick={() => toRight(index)}
              >
                {item}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View className="main">
        <ScrollView
          className="main-scrollview"
          scrollY
          scrollWithAnimation
          scrollIntoView={`right-${checked}`}
          scrollTop={scrollTop}
          lowerThreshold={Threshold}
          upperThreshold={Threshold}
        >
          {[12, 124, 124, 12, 4, 4, 2, 5, 15, 1, 5, 12, 512, 1].map(
            (item, index) => {
              return (
                <View
                  className={`rightScroll-item`}
                  key={index}
                  id={`right-${index}`}
                >
                  Test{index}
                </View>
              );
            }
          )}
        </ScrollView>
      </View>
    </View>
  );
}
