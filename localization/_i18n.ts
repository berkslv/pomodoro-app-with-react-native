import I18n from 'i18n-js';
import * as Localization from 'expo-localization';
import en from './lang/en';
import es from './lang/es';
import hi from './lang/hi';
import ja from './lang/ja';
import ko from './lang/ko';
import pt from './lang/pt';
import ru from './lang/ru';
import tr from './lang/tr';
import zh from './lang/zh';



I18n.locale= Localization.locale;

I18n.fallbacks = true;

I18n.locales.no = 'en';

I18n.translations = {
  en, // UI test confirmed - english
  es, // UI test confirmed - espanyol
  hi, // UI test confirmed - hindu
  ja, // UI test confirmed - japan
  ko, // UI test confirmed - korean
  pt, // UI test confirmed - portuguese
  ru, // UI test confirmed - russian
  tr, // UI test confirmed - turkish
  zh, // UI test confirmed - chinese 
};

export default I18n;