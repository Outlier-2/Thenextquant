import { useTranslations } from 'next-intl';
import useTranslationsWithNamespace from "@/lib/useTranslationsWithNameSpace";
import LanguageSwitchButton from "@/components/custom/atmo/LanguageSwitchButton";
import {ModeToggle} from "@/components/custom/atmo/ModeToggle";
export default function Home() {
    const t = useTranslations();
    const test = useTranslationsWithNamespace("components.SubscribeFormModal");
    const title = useTranslations("components.SubscribeFormModal.onOK");
    return (
        <main>

            <p>{t("中国")}</p>
            <p>{test("Welcome to React")},</p>
            <p>{test("test")}</p>
            <LanguageSwitchButton />
            <ModeToggle />

        </main>
    );
}
