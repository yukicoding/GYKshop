import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";

// import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

export default function Index() {
  const toBuy = () => {
    Taro.redirectTo({
      url: "/pages/shop/index"
    });
  };
  const toHelp = () => {
    Taro.navigateTo({
      url: "shop"
    });
  };
  return (
    <View className="index">
      <View className="btn-group at-row at-row__justify--around">
        <AtButton className="at-col at-col-4" type="primary" onClick={toBuy}>
          送货上门
        </AtButton>
        <AtButton className="at-col at-col-4" type="secondary" onClick={toHelp}>
          跑腿接单
        </AtButton>
      </View>
    </View>
  );
}
