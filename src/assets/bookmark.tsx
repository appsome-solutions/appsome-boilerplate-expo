import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const UserSvg: React.FC = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="#f00" stroke="#ff0">
    <Circle cx={12} cy={8} r={7} />
    <Path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
  </Svg>
);

export default UserSvg;
