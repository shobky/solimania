import { useLocale, useTranslations } from "next-intl";
import React, { Suspense, lazy } from "react";
import Link from "next/link";
const OurProduct = lazy(() => import("@/components/catalogImages/OurProduct"));

export default function OurProductPage() {
  const t = useTranslations("product");
  const locale = useLocale();

  return (
    <div
      className={`flex flex-col lg:flex-row justify-between align-top  lg:p-12 gap-2 min-h-screen
      ${locale === "ar" && "lg:flex lg:flex-row-reverse text-right"}
      `}
    >
      <div className=" w-full lg:w-[35%] h-fit p-5 ">
        <h1 className=" text-7xl font-medium">{t("title")}</h1>
        <ul
          className={` text-zinc-800 list-decimal leading-loose ml-6 mt-5 h-fit  mb-3 lg:mb-10
          ${locale === "ar" && "list-none"}
          `}
        >
          <li>{t("1")} </li>
          <li>{t("2")} </li>
          <li>{t("3")} </li>
          <li>{t("4")} </li>
          <li>{t("5")} </li>
          <li>{t("6")} </li>
          <li>{t("7")} </li>
          <li>{t("8")} </li>
          <li>{t("9")} </li>
        </ul>
        <Link className="float-right lg:float-none" href={`/${locale}/maintenance_contracts`}>
          Next:{" "}
          <span className="underline text-[--primary] cursor-pointer">
            Maintenance contracts{" "}
          </span>
        </Link>
      </div>
      <Suspense>
        <OurProduct />
      </Suspense>
    </div>
  );
}
