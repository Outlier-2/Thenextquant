import {NextIntlClientProvider, useMessages} from 'next-intl';
import {locales} from '../../../navigation';
import "./globals.css";
import {notFound} from "next/navigation";
import React from "react";
import {ThemeProvider} from "@/components/provider/ThemProvider";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Thenextquant",
    description: "Digital Currency Quantitative Development Kit for Professional Institutional Investors",
};

export default function RootLayout(
    {
        children, params: {locale}
    }: {
        children: React.ReactNode,
        params: { locale: string }
    }
) {

    if (!locales.includes(locale)) {
        notFound();
    }
    const messages = useMessages();

    const fonts = locale === "en" ? "font-roboto-mono" : "font-noto-serif-sc";
    return (
        <html suppressHydrationWarning={true} lang={locale}>
        <body suppressHydrationWarning={true} className={fonts}>
        <NextIntlClientProvider  locale={locale} messages={messages}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
