import I18n from 'react-native-i18n'
import en from './locale/en'
import zh from './locale/zh'

I18n.fallbacks = true;

I18n.translations = {
  en: en,
  'en-US': en,
  'en-UK': en,
  zh: zh,
  'zh-CN': zh,
  'zh-Hans-CN': zh,
}

export default I18n;