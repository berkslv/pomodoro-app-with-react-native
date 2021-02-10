/**
 * @file System color is indicated on the system as light or dark. If this is omitted, 
 *  it will be null, but this is not possible in practice. For this reason, focusing only on 
 *  colors without null cathing provides a simpler usage.
 *  Theme Note: The useColorScheme value is always either light or dark, but the built-in | type suggests that it can be null. 
 *  This will not happen in practice, so this | makes it a bit easier to work with.
 * @author Berk selvi
 * @license Apache-2.0
 */
import { ColorSchemeName, useColorScheme as _useColorScheme } from 'react-native';

export default function useColorScheme(): NonNullable<ColorSchemeName> {
  return _useColorScheme() as NonNullable<ColorSchemeName>;
}
