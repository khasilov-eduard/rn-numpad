import { StyleSheet, Dimensions } from 'react-native';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  input: {
    width: '100%',
    paddingVertical: 14,
    backgroundColor: 'transparent',
  },
  display: {
    padding: 20,
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  activeDisplay: {
    backgroundColor: '#000',
  },
  activeDisplayText: {},
  invalidDisplayText: {},
  displayText: {
    fontSize: 30,
    color: '#FFF',
  },
  placeholderDisplayText: {
    color: '#ddd',
  },
  cursor: {
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
  },
  pad: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: hp('0.8%'),
    width: '33%',
  },
  buttonText: {
    color: '#D9BA7E',
    fontSize: hp('4%'),
    textAlign: 'center',
  },
  hide: {
    paddingVertical: 5,
    alignItems: 'center',
  },
  blinkOn: {
    borderBottomColor: '#ddd',
  },
  blinkOff: {
    borderBottomColor: 'transparent',
  },
});
