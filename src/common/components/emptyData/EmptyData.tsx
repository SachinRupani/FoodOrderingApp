import {Text, View} from 'react-native';
import {EmptyDataPropTypes} from './EmptyDataPropsType';
import {useTheme} from '@react-navigation/native';
import {emptyDataStyles} from '../../styles/EmptyData.styles';
import Ionicon from 'react-native-vector-icons/Ionicons';

export const EmptyData = ({strMessage, iconName}: EmptyDataPropTypes) => {
  const appTheme = useTheme();
  const emptyDataStylesToUse = emptyDataStyles(appTheme);
  return (
    <View style={emptyDataStylesToUse.container}>
      {/* Empty Data Icon */}
      <Ionicon name={iconName} size={24} color={appTheme.colors.text} />

      {/* Empty Data Text */}
      <Text style={emptyDataStylesToUse.textStyle}>{strMessage}</Text>
    </View>
  );
};
