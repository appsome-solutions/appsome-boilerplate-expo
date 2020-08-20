import { H1, View, Text } from 'native-base';
import styled from 'styled-components';

export const ErrorTitle = styled(H1)`
  color: ${(props) => props.theme.colors.main.primary};
  font-size: 30px;
`;

export const ErrorView = styled(View)`
  padding: 15px;
`;

export const ErrorText = styled(Text)`
  color: red;
`;
