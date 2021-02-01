/*
  Amaç: async olarak bazı assetler uygulama içerisine import edilecek. Bu sebeple aşağıdaki 
        useCachedResources component oluşturulmuştur.
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
*/
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Uygulamayı oluşturmadan önce ihtiyacımız olan tüm kaynakları veya verileri yüklüyoruz.
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Font yükleniyor.
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // Eğer yükleme sırasında bir hata oluşursa console a yazdırıyoruz.
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
