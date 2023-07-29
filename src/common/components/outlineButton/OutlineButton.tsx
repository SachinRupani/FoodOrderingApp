import {Text, TouchableOpacity, View} from 'react-native';
import {OutlineButtonPropTypes} from './OutlineButtonPropsType';
import {useTheme} from '@react-navigation/native';
import {outlineButtonStyles} from '../../styles/OutlineButton.styles';

export const OutlineButton = ({
  titleText,
  onButtonClick,
  outlineAndTextColorString,
}: OutlineButtonPropTypes): JSX.Element => {
  const appTheme = useTheme();
  const outlineButtonStylesToUse = outlineButtonStyles(
    appTheme,
    outlineAndTextColorString,
  );
  return (
    <TouchableOpacity
      onPress={onButtonClick}
      activeOpacity={0.6}
      style={outlineButtonStylesToUse.container}>
      <Text style={outlineButtonStylesToUse.btnTextStyle}>{titleText}</Text>
    </TouchableOpacity>
  );
};
