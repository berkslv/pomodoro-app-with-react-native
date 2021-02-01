/*
  Amaç: React native uygulamasını web tabanlı çalıştıracak olursan dark veya light değil null alacaksındır. 
        Bu durum null catching yapmadığımız için hata doğuracaktır. Bu sebeple bu durumu ele alamk için özel 
        bir fonksiyon tanımlıyoruz.
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
  Theme note: useColorScheme from react-native does not support web currently. You can replace. | this with react-native-appearance if you would like theme support on web.
*/
export default function useColorScheme() {
  return 'light';
}