import { getLanguageCookie, setLanguageCookie } from "@/lang-cookie";
import { useRouter } from "next/navigation";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import React, { useEffect } from "react";
import { Button } from "@nextui-org/button";
import { IoLanguageOutline } from "react-icons/io5";


export default function ButtonLang() {
  const { refresh } = useRouter();
  // const { i18n } = useTranslation("loginregister")
  // Get the current language from the cookie (if set)
  const currentLanguage = getLanguageCookie();

  useEffect(() => {
    // Set the initial language to the one from the cookie (if available)
    if (currentLanguage) {

      document.body.dir = currentLanguage == "ar" ? "rtl" : "ltr"
      changeLanguage(currentLanguage);

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLanguage]);

  const changeLanguage = (lang: string) => {

    setLanguageCookie(lang);
    refresh();

    // Force a re-render to update the UI with the new language
  };

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly variant="light" className="">
            <IoLanguageOutline className="h-4 w-4" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu variant="light" aria-label="Change language Dropdown">
          {
            [
              { code: "en", name: "English", startContent: "🇺🇸" },
              { code: "fr", name: "Française", startContent: "🇫🇷" },
              { code: "ar", name: "العربية", startContent: "🇸🇦" }
            ].map((el, k) => {
              return <DropdownItem
                onClick={() => changeLanguage(el.code)}
                key={k}
                startContent={el.startContent}
              >
                <span className={(getLanguageCookie() == el.code) ? " !font-bold " : ""}>
                  {el.name}
                </span>
              </DropdownItem>
            })
          }
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
