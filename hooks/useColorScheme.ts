/*
  Amaç: Sistem üzerinde light veya dark olarak sistem rengi belirtilir. Eğer bu belirtilmezse null olacaktır 
        fakat bu pratikte pek mümkün değildir. Bu sebeple null cathing yapmadan sadece renklere odaklanmak 
        daha basit bir kullanım sağlar.
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
  Theme note: The useColorScheme value is always either light or dark, but the built-in | type suggests that it can be null. This will not happen in practice, so this | makes it a bit easier to work with.
*/
import { ColorSchemeName, useColorScheme as _useColorScheme } from 'react-native';

export default function useColorScheme(): NonNullable<ColorSchemeName> {
  return _useColorScheme() as NonNullable<ColorSchemeName>;
}
