import { useTranslations } from "next-intl";
import React from "react";

export function License() {
  const t = useTranslations("License");
  return (
    <div className="rounded-2xl text-white p-10">
      <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {t("许可证")}
      </h2>
      <p className="mt-6 border-l-2 pl-6 italic">
        <div className="p-6 rounded-lg shadow-md h-auto">
          <h2 className="text-2xl font-bold mb-4">{t("许可证")}</h2>
          <p className="mb-4">
            {t(
              "当您从使用Thenextquant时，您实际上是在使用该开发包的许可。要了解我们的许可证，请阅读以下详细信息。"
            )}
          </p>
          <p className="mb-4">{t("我们的免费项目都在MIT许可下。")}</p>
          <p className="mb-4">{t("我们的高级项目覆盖使用许可和开发许可。")}</p>

          <h3 className="text-xl font-semibold mb-2">{t("功能比较")}</h3>
          <table className="w-full mb-4 border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-200 p-2">{t("功能")}</th>
                <th className="border border-gray-200 p-2">
                  {t("普通许可证")}
                </th>
                <th className="border border-gray-200 p-2">
                  {t("开发者许可证")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-2">
                  {t("阅读源代码")}
                </td>
                <td className="border border-gray-200 p-2">✔</td>
                <td className="border border-gray-200 p-2">✔</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">
                  {t("创建单个应用")}
                </td>
                <td className="border border-gray-200 p-2">✔</td>
                <td className="border border-gray-200 p-2">✔</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">
                  {t("创建多个应用")}
                </td>
                <td className="border border-gray-200 p-2">✘</td>
                <td className="border border-gray-200 p-2">✔</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">
                  {t("为第三方创建单个应用")}
                </td>
                <td className="border border-gray-200 p-2">✘</td>
                <td className="border border-gray-200 p-2">✔</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">
                  {t("为第三方创建多个应用")}
                </td>
                <td className="border border-gray-200 p-2">✘</td>
                <td className="border border-gray-200 p-2">✔</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">
                  {t("创建SaaS服务")}
                </td>
                <td className="border border-gray-200 p-2">✘</td>
                <td className="border border-gray-200 p-2">✔</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">
                  {t("创建量化工具销售")}
                </td>
                <td className="border border-gray-200 p-2">✘</td>
                <td className="border border-gray-200 p-2">✔</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">
                  {t("销售给第三方")}
                </td>
                <td className="border border-gray-200 p-2">✘</td>
                <td className="border border-gray-200 p-2">✔</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">
                  {t("将框架分拆销售")}
                </td>
                <td className="border border-gray-200 p-2">✘</td>
                <td className="border border-gray-200 p-2">✔</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">
                  {t("基于Thenextquant创建任何框架/工具包/软件供第三方使用")}
                </td>
                <td className="border border-gray-200 p-2">✘</td>
                <td className="border border-gray-200 p-2">✔</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl font-semibold mb-2">
            {t("普通许可注意事项")}
          </h3>
          <p className="mb-4">
            {t(
              "如果您拥有普通许可，则可以向客户收取费用以创建最终产品。但是，如果您有多个客户或多个项目，则需要获取扩展（分销商）许可。"
            )}
          </p>

          <h3 className="text-xl font-semibold mb-2">{t("普通许可")}</h3>
          <p className="mb-4">
            {t(
              "普通许可授予您（购买者）非独家的全球许可，使您有权使用Thenextquant商业版本。阅读本许可证的其余部分，了解适用于您使用该项目的详细信息。"
            )}
          </p>
          <p className="mb-4">
            {t(
              "您被许可使用该许可为您自己或一个客户创建一个单一的最终产品（“单个应用程序”）。"
            )}
          </p>
          <p className="mb-4">{t("最终产品是以下之一：")}</p>
          <ul className="list-disc list-inside mb-4">
            <li>{t("Thenextquant出售的Pro版本")}</li>
            <li>
              {t(
                "该版本是根据您的需求，量身定制的开发工具包，您不能将其再出售给其他第三方"
              )}
            </li>
            <li>{t("Thenextquant出售的Cloud版本")}</li>
            <li>
              {t(
                "该版本与您购买时的账号一一绑定，您也不得转给第三方或租给第三方进行使用"
              )}
            </li>
          </ul>
          <p className="mb-4">
            {t(
              "对于Pro版本，你可以定制或者修改Thenextquant操作界面（React部分）。"
            )}
          </p>
          <p className="mb-4">
            {t("对于Cloud版本，你可以购买/租用Thenextquant操作界面的主题。")}
          </p>
          <p className="mb-4">
            {t(
              "如果你想把您正在使用的Pro版本销售给其他人，请您获取分销商许可。"
            )}
          </p>
          <p className="mb-4">
            {t(
              "您不能修改Thenextquant界面后，将其出售或交给多个客户。您也不能在没有获取分销商许可的情况下将项目放在您的网站上供您的用户下载。"
            )}
          </p>
          <p className="mb-4">
            {t(
              "您不能在任何应用程序中使用该工具包，以允许最终用户根据其特定需求定制数字或物理产品，例如“按需”，“按订单生产”或“自己构建”应用程序。只有当您为包含使用应用程序创建的项目的每个最终产品购买单独的许可证时，才能以这种方式使用项目。"
            )}
          </p>
          <p className="mb-4">
            {t(
              "您不能基于Thenextquant创建量化相关的产品或工具包再出售或出租给第三方。"
            )}
          </p>
          <p className="mb-4">
            {t(
              "您不得允许最终产品的最终用户提取Thenextquant相关部分或模块并将其与最终产品分开使用。"
            )}
          </p>
          <p className="mb-4">
            {t(
              "对于某些模块，模块的组成部分将来自其他地方，并且不同的许可条款可能适用于该组件，例如其他人的许可证或开源或创意公共许可证。如果是这样，您将找到项目描述页面或项目下载文件中标识的组件。另一个许可证将适用于该组件而不是此许可证。此许可证将适用于该项目的其余部分。"
            )}
          </p>
          <p className="mb-4">
            {t(
              "Thenextquant底层框架包含Thenextquant的知识产权和软件版权登记的核心技术模块。Thenextquant的知识产权和软件版权适用于Thenextquant的底层模块。同时适用于Thenextquant的通用业务模块。"
            )}
          </p>
          <p className="mb-4">
            {t(
              "如果您违反此许可证，则意味着该此许可的终止。如果发生这种情况，你必须停止使用该项目，直到您从中所有相关的项目中删除该项目。"
            )}
          </p>
        </div>
      </p>
    </div>
  );
}
