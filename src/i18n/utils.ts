import { ui } from "./ui";

export const DEFAULT_LOCALE = "nl";

export const LOCALES = {
  en: "en-US",
  nl: "be-nl",
  fr: "be-fr",
};

export type UiType = keyof typeof ui;

export function getLangFromUrl(url: URL): UiType {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as UiType;
  return DEFAULT_LOCALE as UiType;
}

export function useTranslations(lang?: UiType) {
  return function t(
    key: keyof (typeof ui)[typeof DEFAULT_LOCALE],
    ...args: any[]
  ) {
    let translation =
      ui[lang ?? DEFAULT_LOCALE][key] || ui[DEFAULT_LOCALE][key];
    if (args.length > 0) {
      for (let i = 0; i < args.length; i++) {
        translation = translation.replace(`{${i}}`, args[i]);
      }
    }
    return translation;
  };
}

export function pathNameIsInLanguage(pathname: string, lang: UiType): boolean {
  return (
    pathname.startsWith(`/${lang}`) ||
    (lang === DEFAULT_LOCALE && !pathNameStartsWithLanguage(pathname))
  );
}

function pathNameStartsWithLanguage(pathname: string): boolean {
  const languages = Object.keys(ui);
  for (let i = 0; i < languages.length; i++) {
    const lang = languages[i];
    if (pathname.startsWith(`/${lang}`)) {
      return true;
    }
  }
  return false;
}

export function getLocalizedPathname(pathname: string, lang: string): string {
  if (pathNameStartsWithLanguage(pathname)) {
    const availableLanguages = Object.keys(ui).join("|");
    const regex = new RegExp(`^\/(${availableLanguages})`);
    return pathname.replace(regex, `/${lang}`);
  }
  return `/${lang}${pathname}`;
}
