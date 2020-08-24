import { View, Button } from 'native-base';
import styled from 'styled-components';

export const HelloWorldView = styled(View)`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HelloWorldButton = styled(Button)`
  background: ${(props) => props.theme.colors.main.primary};
  align-self: center;
`;
