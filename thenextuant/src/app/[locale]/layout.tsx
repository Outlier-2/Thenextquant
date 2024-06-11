import type {Metadata} from "next";
import {NextIntlClientProvider, useMessages} from 'next-intl';
import {locales} from '../../../navigation';
import "./globals.css";
import {notFound} from "next/navigation";

export const metadata: Metadata = {
    title: "Thenextquant",
    description: "Digital Currency Quantitative Development Kit for Professional Institutional Investors",
};
export default function RootLayout(
    {
        children, params: { locale }
    } : {
        children: React.ReactNode,
        params: { locale: string }
    }
) {

    if (!locales.includes(locale)) {
        notFound();
    }
    const messages = useMessages();
    return (
        <html lang={locale}>
        <head>
            <link rel="icon" href="./favicon.ico" type="image/png"/>
        </head>
        <body className="font-roboto-mono">
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
