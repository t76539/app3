import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: {
                    "To get started, edit <1>src/App.js</1> and save to reload.": "To get started, edit <1>src/App.js</1> and save to reload.",
                    "Welcome to React": "Welcome to React and react-i18next",
                    welcome: "Hello <br/> <strong>World</strong>"
                }
            },
            ru: {
                translations: {
                    "To get started, edit <1>src/App.js</1> and save to reload.": "Вначале редактируем <1>src/App.js</1> и сохраняем для перезагрузки.",
                    "Welcome to React": "Добро пожаловать в React и react-i18next",
                    "Test1": "Это ТЕСТ#1, товарищи!",
                    "Test2": "Супертест#2",
                    "Configuration": "Конфигурация",
                    "RF Switch Configuration": "Конфигурация RF Switch",
                    "Statistics": "Статистика",
                    "Maintenance": "Управление",
                    "Download": "Загрузка",
                    "Licensing": "Лицензирование",
                    "Logout": "Выход"
                }
            }
        },
        fallbackLng: "en",
        debug: true,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;