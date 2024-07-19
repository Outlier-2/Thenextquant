
import React from "react";
import Link from "next/link";
import {useTranslations} from "next-intl";

function Footer() {
    const t = useTranslations();
    return (
        <footer className="bg-gray-800 text-white py-8 w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    {/* Logo */}
                    <div className="w-full flex items-center md:w-1/4 text-center md:text-left mb-4 md:mb-0">
                        <img
                            src="/thenextquant.png"
                            alt="Logo"
                            className="h-12 mx-auto md:mx-0"
                        />
                        <h1 className="text-lg">ThenextQuant</h1>
                    </div>

                    {/* 许可证 */}
                    <div className="w-full md:w-1/4 text-center mb-4 md:mb-0">
                        <Link href="/license">
                            <h2 className="text-lg font-semibold">{t("许可证")}</h2>
                        </Link>
                    </div>

                    {/* 关于我们 */}
                    <div className="w-full md:w-1/4 text-center mb-4 md:mb-0">
                        <Link href="/about">
                            <h2 className="text-lg font-semibold">{t("关于我们")}</h2>
                        </Link>
                    </div>

                    {/* 解释框架 */}
                    <div className="w-full md:w-1/4 text-center md:text-right">
                        <Link href="/">
                            <h2 className="text-lg font-semibold">{t("了解框架")}</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer
