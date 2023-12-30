import english from "./en.json";
import spanish from "./es.json";

// Declare the available languages on the application
const AVAILABLE_LANGUAGES = {
    ENGLISH: "en",
    SPANISH: "es",
};

export const getTranslations = (currentLocale?: string): any => {
    // Check if the current locale is english
    if (currentLocale == AVAILABLE_LANGUAGES.ENGLISH) {
        // Return english language
        return english;
    }

    // By default, return spanish language
    return spanish;
};
