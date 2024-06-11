import {NextIntlClientProvider, useMessages} from 'next-intl';
import {locales} from '../../../navigation';
import "./globals.css";
import {notFound} from "next/navigation";
import React from "react";
import {ThemeProvider} from "@/components/provider/ThemProvider";


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
        <head>
            <title>Thenextquant</title>
            <meta name="description"
                  content="Digital Currency Quantitative Development Kit for Professional Institutional Investors"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="./favicon.ico"/>
        </head>
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
