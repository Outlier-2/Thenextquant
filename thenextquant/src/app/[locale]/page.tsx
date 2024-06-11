import { useTranslations } from 'next-intl';
import useTranslationsWithNamespace from "@/lib/useTranslationsWithNameSpace";

export default function Home() {
    const t = useTranslations();
    const test = useTranslationsWithNamespace("components.SubscribeFormModal");
    const title = useTranslations("components.SubscribeFormModal.onOK");
    return (
        <main>
            <p>{t("中国")}</p>
            <p>{title("Welcome to React")},</p>
            <p>{test("test")}</p>
        </main>
    );
}
