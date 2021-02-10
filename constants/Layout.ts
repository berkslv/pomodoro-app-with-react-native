/**
 * @file These variables are not used right now. But maybe we need these in the future.
 * @author Berk selvi
 * @license Apache-2.0
 */
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const deviceDimensions = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};

