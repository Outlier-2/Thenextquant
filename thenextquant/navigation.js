import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'ja','ko','zh_cn'];
export const localePrefix = 'as-needed';
export const defaultLocale= "en";
export const localeItems= [
    { name: "English",code: "en", iso: "en-US", dir: "ltr" },
    { name: "中文",code: "zh_cn", iso: "zh-CN", dir: "ltr" },
    { name: "日本語",code: "ja", iso: "ja-JP", dir: "ltr" },
    { name: "한국인",code: "ko", iso: "ko-KR", dir: "ltr" },
]

export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales, localePrefix });
