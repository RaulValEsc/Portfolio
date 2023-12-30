import english from './en.json';
import spanish from './es.json';

const AVAILABLE_LANGUAGES = {
    ENGLISH: 'en',
    SPANISH: 'es',
}

export const getTranslations = (currentLocale?: string): any => {
    if (currentLocale == AVAILABLE_LANGUAGES.ENGLISH) {
        return english;
    }

    return spanish;
}