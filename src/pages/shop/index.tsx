import { Component, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Swiper,
  SwiperItem
} from "@tarojs/components";
// import { AtButton } from "taro-ui";
// import ScrollList from "../../components/ScrollList";
// import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

export default function Index() {
  const [checked, setChecked] = useState(null);
  
  const scrollTop = 0;
  const Threshold = 20;
  const left = [1, 23, 4, 5, 6, 764, 5, 234, 532, 5, 32, 523, 5, 235];
  const toRight = (index:number)=>{
    setChecked(index)
  }
  return (
    <View className='shop'>
      <View className='left'>
        <ScrollView
          className='left-scrollview'
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
                  checked === index ? "active" : ""
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
      <View className='main'>
        <ScrollView
          className='main-scrollview'
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
                  className={`rightScroll-item `}
                  key={index}
                  id={`right-${index}`}
                >
                  <Image
                    style='width: 300px;height: 100px;background: #fff;'
                    src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
                  />
                </View>
              );
            }
          )}
        </ScrollView>
      </View>
    </View>
  );
}
