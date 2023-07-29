import {useTheme} from '@react-navigation/native';
import {TextInput, View} from 'react-native';
import {searchBarStyles} from '../../styles/SearchBar.styles';
import {useEffect, useState} from 'react';
import {SearchBarPropTypes} from './SearchBarPropsType';
import Ionicon from 'react-native-vector-icons/Ionicons';

export const SearchBar = ({
  onSearchTextChange,
  shouldEmptyTextOnReset,
  placeholderText,
}: SearchBarPropTypes): JSX.Element => {
  const appTheme = useTheme();
  const searchBarStylesToUse = searchBarStyles(appTheme);

  // State hooks
  const [searchInputText, setSearchInputText] = useState<string>('');

  // useEffect hook to listen for change in the searchInputText state data
  useEffect(() => {
    // Callback function triggered on text changed in search box
    onSearchTextChange(searchInputText);
  }, [searchInputText]);

  useEffect(() => {
    if (shouldEmptyTextOnReset) {
      setSearchInputText('');
    }
  }, [shouldEmptyTextOnReset]);

  return (
    <View style={searchBarStylesToUse.container}>
      {/* Search Icon */}
      <Ionicon
        style={searchBarStylesToUse.searchIconStyle}
        name="search"
        size={20}
        color={appTheme.colors.border}
      />

      {/* Search Input Component */}
      <TextInput
        placeholder={placeholderText}
        placeholderTextColor={appTheme.colors.border}
        editable={true}
        multiline={false}
        numberOfLines={1}
        maxLength={128}
        keyboardType="email-address"
        style={searchBarStylesToUse.inputTextStyle}
        value={searchInputText}
        onChangeText={updatedText => {
          // Hook to set the updated value in Text input
          setSearchInputText(updatedText);
        }}
      />

      {/* Remove all text icon (Cross icon) */}
      {searchInputText.trim().length > 0 && (
        <Ionicon
          name="close"
          size={24}
          color={appTheme.colors.border}
          onPress={() => setSearchInputText('')}
        />
      )}
    </View>
  );
};
