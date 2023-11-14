/* eslint-disable react-hooks/rules-of-hooks */
import "./globals.scss";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import useTextDirection from "../../hooks/useTextDirection";
import { notFound } from "next/navigation";
import { josefinSans } from "../../assets/fonts/fonts";

export const metadata: Metadata = {
    title: "Cleaning Service",
    description: "Order your cleaner!",
};

export function generateStaticParams() {
    return [{ locale: "en" }, { locale: "he" }];
}

export default async function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const direction = useTextDirection(locale);

    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale} dir={direction}>
            <body className={josefinSans.className}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
