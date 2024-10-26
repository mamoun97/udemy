import Cookies from 'js-cookie';

const LANGUAGE_COOKIE_KEY = 'userLanguage';

export function setLanguageCookie(lang: string) {
  Cookies.set(LANGUAGE_COOKIE_KEY, lang, { expires: 365 }); // Set the language cookie to expire in 365 days (adjust as needed)
}

export function getLanguageCookie() {
  return Cookies.get(LANGUAGE_COOKIE_KEY);
}