
import {useTranslations} from "next-intl";
import React from "react";

export function AboutUS() {
    const t = useTranslations("Index.Chart")
    return (<div className="rounded-2xl p-10">
            <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{t("我们的优势")}</h2>
            <p
                className="mt-6 border-l-2 pl-6 italic">
                {t("Thenextquant的背后是一个填过各个交易所无数坑的团队，该团队集计算机工程师，量化研究员，策略工程师，币圈老人与币圈金融机构等各角色为一体，历时3年匠心打造的面向数字货币市场的量化交易开发包。\n" +
                "Thenextquant是为了减少机构或专业人士在各个交易所接口上花费的时间，使其将更多精力放在策略本身而不是封装处理不同交易所不同接口的修修补补中。\n" +
                "Thenextquant的推出就是为了减化数字货币的量化复杂度，帮助同行将其量化能力真正发挥出来，一起和同行促进数字货币量化行业的发展。\n" +
                "Thenextquant目前的客户主要是正在转型数字货币的传统券商，传统金融转型数字货币的做市商及有一定规模和策略的量化团队。\n" +
                "我们希望借我们之力及同行的一起努力，能帮助大家真正建立起各自的盈利量化策略，我们期望成为您量化策略赚钱背后的坚定技术支撑者，您开发优化您的策略，策略运行的基础环境交给我们即可。\n" +
                "我们的愿景是成为数字货币机构量化的推进器。")}</p>
        </div>
    )
}

export function AboutUSPage() {
  const t = useTranslations("Index.Chart");
  return (
    <div className="rounded-2xl p-10">
      <h2 className="text-white scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {t("我们的优势")}
      </h2>
      <p className="text-white mt-6 border-l-2 pl-6 italic">
        {t(
          "Thenextquant的背后是一个填过各个交易所无数坑的团队，该团队集计算机工程师，量化研究员，策略工程师，币圈老人与币圈金融机构等各角色为一体，历时3年匠心打造的面向数字货币市场的量化交易开发包。\n" +
            "Thenextquant是为了减少机构或专业人士在各个交易所接口上花费的时间，使其将更多精力放在策略本身而不是封装处理不同交易所不同接口的修修补补中。\n" +
            "Thenextquant的推出就是为了减化数字货币的量化复杂度，帮助同行将其量化能力真正发挥出来，一起和同行促进数字货币量化行业的发展。\n" +
            "Thenextquant目前的客户主要是正在转型数字货币的传统券商，传统金融转型数字货币的做市商及有一定规模和策略的量化团队。\n" +
            "我们希望借我们之力及同行的一起努力，能帮助大家真正建立起各自的盈利量化策略，我们期望成为您量化策略赚钱背后的坚定技术支撑者，您开发优化您的策略，策略运行的基础环境交给我们即可。\n" +
            "我们的愿景是成为数字货币机构量化的推进器。"
        )}
      </p>
    </div>
  );
}

