
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";
import {useTranslations} from "next-intl";

export function CommandDemo() {
    const t = useTranslations();
    return (
        <Command className="rounded-lg border shadow-md md:block hidden">
            <CommandInput placeholder={t("temp not Support Search!")} />
        </Command>
    );
}
