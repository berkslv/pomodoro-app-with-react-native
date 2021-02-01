/*
  Amaç: Bu değişkenler dark-ligt temaya göre renk belirlemek için kullanılır.
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
*/
const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};

export const lightThemeColors = {
  PRIMARY: "#ffffff",
  SECONDARY: "#000000",

  CARD_OUT: "#000000",
  CARD_IN: "#fafafa",
  CARD_TEXT: "#000000",

  TIMER_WORK: "#000000",
  LONG_BREAK: "#5cc477",
  SHORT_BREAK: "#0e5cc1",
  WORK: "#000000",

  START_IN:"#dfffcc",
  START_OUT:"#a3e8b0",
  START_TEXT:"#59ba82",

  PAUSE_IN: "#fffae3",
  PAUSE_OUT: "#ffe566",
  PAUESE_TEXT: "#de8e2c",

  RESUME_IN: "#dfffcc",
  RESUME_OUT: "#a3e8b0",
  RESUME_TEXT: "#59ba82",

  CANCEL_IN : "#ebebeb",
  CANCEL_OUT: "#545454",
  CANCEL_TEXT: "#545454",

  DISABLE_IN: "#d9d9d9",
  DISABLE_OUT:"#e8e8e8",
  DISABLE_TEXT:"#a1a1a1",

  ERROR:"#ff2200",
}

export const darkThemeColors = {
  PRIMARY: "#000000",
  SECONDARY: "#f0f0f0",
  TIMER_WORK: "#595959",

  CARD_OUT: "#292929",
  CARD_IN: "#1c1c1e",
  CARD_TEXT: "#f7f7f7",

  LONG_BREAK: "#20f5b8",
  SHORT_BREAK: "#0081EB",
  WORK: "#000000",

  START_IN:"#0c3316",
  START_OUT:"#0c3316", 
  START_TEXT:"#2ed158",  

  PAUSE_IN: "#332002",
  PAUSE_OUT: "#332002",
  PAUESE_TEXT: "#fe9f0c",

  RESUME_IN: "#0c3316",
  RESUME_OUT: "#0c3316",
  RESUME_TEXT: "#2ed158",

  CANCEL_IN : "#1c1c1e",
  CANCEL_OUT: "#1c1c1e",
  CANCEL_TEXT: "#fefefe",

  DISABLE_IN: "#1c1c1e",
  DISABLE_OUT:"#1c1c1e",
  DISABLE_TEXT:"#5a5a5e",

  ERROR:"#ff2200",
}