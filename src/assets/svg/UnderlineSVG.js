import {StyleSheet, Text, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import * as React from 'react';

const UnderlineSVG = ({...props}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={7}
      viewBox="0 0 53 7"
      fill="none"
      {...props}>
      <Path d="M0 6.5H52.5V0.5" stroke="#1A1A27" />
    </Svg>
  );
};

export const LoginEyeIcon = ({...props}) => {
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={10}
    viewBox="0 0 15 10"
    fill="none"
    {...props}>
    <Path
      d="M7.28019 0.137413C4.11698 0.137413 1.41561 2.10493 0.321136 4.88222C1.41561 7.65951 4.11698 9.62702 7.28019 9.62702C10.4434 9.62702 13.1448 7.65951 14.2392 4.88222C13.1448 2.10493 10.4434 0.137413 7.28019 0.137413ZM7.28019 8.04542C5.5341 8.04542 4.11698 6.62831 4.11698 4.88222C4.11698 3.13613 5.5341 1.71902 7.28019 1.71902C9.02627 1.71902 10.4434 3.13613 10.4434 4.88222C10.4434 6.62831 9.02627 8.04542 7.28019 8.04542ZM7.28019 2.9843C6.23 2.9843 5.38226 3.83204 5.38226 4.88222C5.38226 5.9324 6.23 6.78014 7.28019 6.78014C8.33037 6.78014 9.17811 5.9324 9.17811 4.88222C9.17811 3.83204 8.33037 2.9843 7.28019 2.9843Z"
      fill="#1A1A27"
    />
  </Svg>;
};

export default UnderlineSVG;

const styles = StyleSheet.create({});
