import translationNamespaces from "@/config/translationNamespaces";

import { useTranslations as useNextIntlTranslations } from 'next-intl';

function useTranslationsWithNamespace(namespaceKey: string) {
    const namespace = translationNamespaces[namespaceKey] || '';
    const t = useNextIntlTranslations(namespace);

    function translate(key: string, defaultMsg = 'Translation not available') {
        const translation = t(key, { defaultMessage: '' });
        return translation || defaultMsg;
    }

    return translate;
}

export default useTranslationsWithNamespace;

