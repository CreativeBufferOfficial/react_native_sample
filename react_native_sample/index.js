/**
 * @format
 */

import {AppRegistry, View, Text, TextInput} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
Text.defaultProps.adjustsFontSizeToFit = true;
View.defaultProps = Text.defaultProps || {};
View.defaultProps.allowFontScaling = false;
View.defaultProps.adjustsFontSizeToFit = true;

if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
}

AppRegistry.registerComponent(appName, () => App);
