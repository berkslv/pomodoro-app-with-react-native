/**
 * @file If you run React native application web-based, you will get null, not dark or light. 
 *  This will cause an error because we do not do null catching. For this reason, we are defining 
 *  a special function to handle this situation.
 *  Theme note: useColorScheme from react-native does not support web currently. You can replace.
 *  this with react-native-appearance if you would like theme support on web.
 * @author Berk selvi
 * @license Apache-2.0
 */
export default function useColorScheme() {
  return 'light';
}