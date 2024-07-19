import {Github} from 'lucide-react';
import {useTranslations} from "next-intl";
import Link from "next/link";
import Image from "next/image";
import {CommandDemo} from "@/components/custom/elememt/Command";
import {ModeToggle} from "@/components/custom/atmo/ModeToggle";
import LanguageSwitchButton from "@/components/custom/atmo/LanguageSwitchButton";
import {Button} from "@/components/ui/button";
import {ConnectButton} from "@rainbow-me/rainbowkit";

export function Nav() {
    const t = useTranslations();
    return (
        <div className="flex flex-row h-[6vh] justify-center items-center ">
            <div className="basis-1/4">
                <Link href="/" className="flex justify-center items-center  ">
                    <Image width={40} height={40} src="/thenextquant.png" alt="logo"/>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
                        TheNextQuant
                    </h3>
                </Link>
            </div>
            <div className="basis-1/4">
                <CommandDemo/>
            </div>
            <div className="basis-1/2 flex flex-row justify-end items-center gap-x-3 mr-2">
                <div className="flex-row gap-x-3 hidden md:flex">
                    <ModeToggle/>
                    <LanguageSwitchButton/>
                    <Link href="https://github.com/TheNextQuant/thenextquant">
                        <Button variant="outline" size="icon">
                            <Github/>
                        </Button>
                    </Link>
                </div>
                <div>
                    <ConnectButton label={t("Sign")}/>
                </div>
            </div>
        </div>
    );
}
