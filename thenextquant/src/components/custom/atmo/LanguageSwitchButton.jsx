"use client";
import {useLocale} from "next-intl";
import {localeItems, useRouter, usePathname, defaultLocale} from '../../../../navigation';
import * as React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import useTranslationsWithNameSpace from "@/lib/useTranslationsWithNameSpace";

export default function LanguageSwitchButton() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    console.log("locale:", locale, "router:", router, "pathname:", pathname);

    const handleChangeLocale = (newLocale) => {
        router.push(pathname, {locale: newLocale});
    };

    return (
        <Select onValueChange={handleChangeLocale}>
            <SelectTrigger className="w-[180px] h-auto">
                <SelectValue placeholder={defaultLanguage()}/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup >
                    {localeItems.map((item) => (
                        <SelectItem key={item.code} value={item.code}>
                            <div className="flex flex-row items-center">
                                <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"
                                     className="inline-block ">
                                    <path fill="currentColor"
                                          d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path>
                                </svg>
                                <span className="ml-2">{item.name}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}

const defaultLanguage = () => {
    return (
        <div className="flex flex-row items-center">
            <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" className="inline-block">
                <path fill="currentColor"
                      d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path>
            </svg>
            <span className="ml-2">English</span>
        </div>
    )
}

