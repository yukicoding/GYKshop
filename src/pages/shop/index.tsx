/**
 * @description shop pages
 */
import Taro from '@tarojs/taro';
import { AtCard, AtGrid, AtDivider } from 'taro-ui';
import { Component, useState, useEffect } from 'react';
import { View, Image, ScrollView, Text, SwiperItem } from '@tarojs/components';
// import { AtButton } from "taro-ui";
// import ScrollList from "../../components/ScrollList";
// import "taro-ui/dist/style/components/button.scss"; // 按需引入
import './index.scss';

import { getShopList } from '../../utils/request/shop';
import { time } from 'console';

export default function Index() {
  const [checked, setChecked] = useState(0);
  const [shopList, setShopList] = useState<any[]>([]);
  const fetchBuyList = async () => {
    const data = await getShopList();
    setShopList(data.data.list);
    // Taro.request({
    //   url: 'http://127.0.0.1:9527/api/user/1',
    //   method: 'GET'
    // }).then((res) => console.log(res));
  };
  useEffect(() => {
    fetchBuyList();
  }, []);

  const scrollTop = 0;
  const Threshold = 20;

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
          {shopList.map((item, index) => {
            return (
              <View
                className={`leftScroll-item  ${
                  checked === item.id ? 'active' : ''
                }`}
                key={item.id}
                id={`left-${item.id}`}
                onClick={() => toRight(item.id)}
              >
                {item.label}
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
          {shopList.map((item, index) => {
            return (
              <View
                className={`rightScroll-item`}
                key={item.id}
                id={`right-${item.id}`}
              >
                <AtDivider content={item.label} />
                <View
                  className="rightScroll-item-view"
                  style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                  {item.product?.map((product) => (
                    <View
                      className="rightScroll-item-prd-view"
                      style={{ display: 'flex', flexDirection: 'column' }}
                    >
                      <Image
                        className='className="rightScroll-item-prd-image'
                        style={{ width: '30px', height: '30px' }}
                        src={product.image}
                      />
                      <Text className='className="rightScroll-item-prd-text'>
                        {product.label}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
