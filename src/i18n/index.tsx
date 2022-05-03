import i18next from 'i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { plTranslations } from './pl';
import { enTranslations } from './en';

const resources = {
	pl: {
		translation: plTranslations
	},
	en: {
		translation: enTranslations
	}
};
const DEFAULT_LANGUAGE = 'pl';

i18n.use(initReactI18next).init({
	resources,
	lng: DEFAULT_LANGUAGE,
	keySeparator: false,
	interpolation: {
		escapeValue: false
	}
});

export const changeLng = (lng: string) =>
	i18next.changeLanguage(lng).then((t) => t('key'));

export default i18n;
