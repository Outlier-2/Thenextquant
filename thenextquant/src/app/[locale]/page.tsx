"use client";
import { useTranslations } from "next-intl";
import useTranslationsWithNamespace from "@/lib/useTranslationsWithNameSpace";
import LanguageSwitchButton from "@/components/custom/atmo/LanguageSwitchButton";
import { ModeToggle } from "@/components/custom/atmo/ModeToggle";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const t = useTranslations();
  const test = useTranslationsWithNamespace("components.SubscribeFormModal");
  const title = useTranslations("components.SubscribeFormModal.onOK");
  return (
    <main>
      <Nav />
      <ContextMenuBackage />
      <Footer />
    </main>
  );
}

function ResizableLeftRightLayout() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[92vh]  rounded-lg w-full h-auto"
    >
      <ResizablePanel defaultSize={15} className="hidden md:block">
        <div className="flex h-auto  justify-center p-6">
          <span className="font-semibold">
            <LeftMenu />
          </span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={85}>
        <div className="flex h-auto p-6">
          <span className="font-semibold">
            <IndexRightContent />
          </span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

function ContextMenuBackage() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-auto w-full items-center justify-center rounded-md  border-dashed text-sm">
        <ResizableLeftRightLayout />
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              Save Page As...
              <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Show Bookmarks Bar
          <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="pedro">
          <ContextMenuLabel inset>People</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuRadioItem value="pedro">
            Pedro Duarte
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}

import { BookOpenText } from "lucide-react";
import { PersonStanding } from "lucide-react";

export function LeftMenu() {
  const t = useTranslations();
  const left_menu_button_items = [
    {
      url: "https://alfredorlandos-organization.gitbook.io/thenextquant/",
      name: "文档",
      icon: <BookOpenText />,
    },
    {
      url: "url2",
      name: "会员中心",
      icon: <PersonStanding />,
    },
  ];

  const links = left_menu_button_items.map((item, index) => (
    <div>
      <li key={index} className="flex items-center">
        <Link href={item.url}>
          <span className="hover:bg-gray-100 flex flex-row dark:hover:bg-red-100 rounded-md gap-2 justify-center items-center ">
            {item.icon}
            {t(`${item.name}`)}
          </span>
        </Link>
      </li>
    </div>
  ));
  return <ul> {links}</ul>;
}

export function IndexRightContent() {
  const t = useTranslations("Index.Chart");
  return (
    // 1. 你的资产是否总是缩水（图表）
    // 2. 其他人情况对比
    // 3. 怎么去解决他
    // 4. 选择我们
    // 5. 我们的优势

    <div className="flex h-auto flex-col gap-4 p-4">
      <HeroSection />
      <div className="flex">
        <RichInterface />
        <OutOfBox />
        <FlexibleExtension />
      </div>

      <div>
        <br />
        <div
          className="
        flex justify-center"
        >
          <h2 className="scroll-m-10 text-2xl  tracking-tight lg:text-2xl">
            {t("你的资产是否总是缩水?,在这里让我改变他！！")}
          </h2>
        </div>
        <br />
        <div className="flex flex-col sm:flex-row justify-center">
          <div>
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              {t("你资产的情况")}
            </h2>
            <FakeChart data={declinechartData} info={declinedate} />
          </div>
          <Image
            src="/arrow.gif"
            alt="arrow"
            width={200}
            height={100}
            unoptimized={true}
          ></Image>
          <div>
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              {t("使用我们的框架")}
            </h2>
            <FakeChart data={risechartData} info={raisedate} />
          </div>
        </div>
      </div>
      <AboutUS />
    </div>
  );
}

const HeroSection = () => {
  const t = useTranslations("Index.Chart");
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="h-[10vh]"></div>
      <div className="flex justify-center flex-col items-center">
        <img src="/thenextquant.png" alt="Logo" className="w-30 h-30 mb-8" />

        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tigh mt-auto">
          {t("什么是TheNextQuant ?")}
        </h2>
        <p className="mt-6 border-l-2 pl-6 italic">
          {t(
            "是投资机构都在使用的专业的量化工具包,利用他让你的智慧策略与收益相结合"
          )}
        </p>
        <br></br>
        <br></br>
      </div>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600">
          快速开始
        </button>
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600">
          成为会员
        </button>
      </div>
    </div>
  );
};

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Dot, Line, LineChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Nav } from "@/components/custom/product/Nav";
import Footer from "@/components/custom/product/Footer";
import { AboutUS } from "@/components/custom/atmo/AboutUS";
import FlexibleExtension from "@/components/custom/atmo/FlexibleExtension";
import OutOfBox from "@/components/custom/atmo/OutOfBox";
import RichInterface from "@/components/custom/atmo/RichInterface";

const declinechartData = [
  { browser: "chrome", visitors: 275, fill: "#1DC354" },
  { browser: "safari", visitors: 200, fill: "#1DC354" },
  { browser: "firefox", visitors: 187, fill: "#1DC354" },
  { browser: "edge", visitors: 173, fill: "#1DC354" },
  { browser: "other", visitors: 90, fill: "#1DC354" },
];

const risechartData = [
  { browser: "other", visitors: 90, fill: "#1DC354" },
  { browser: "edge", visitors: 173, fill: "#1DC354" },
  { browser: "firefox", visitors: 187, fill: "#1DC354" },
  { browser: "safari", visitors: 200, fill: "#1DC354" },
  { browser: "chrome", visitors: 275, fill: "#1DC354" },
];
const declinedate = {
  title: "资产下降",
  info: "这个月降低了5%",
};
const raisedate = {
  title: "资产上升",
  info: "这个月上升了5%",
};
const chartConfig = {
  visitors: {
    label: "Assert",
    color: "red",
  },
} satisfies ChartConfig;

export function FakeChart({ data, info }) {
  const t = useTranslations("Index.Chart");
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t(info.title)}</CardTitle>
        <CardDescription>AlfredOrlando 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              top: 24,
              left: 24,
              right: 24,
            }}
          >
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  nameKey="visitors"
                  hideLabel
                />
              }
            />
            <Line
              dataKey="visitors"
              type="natural"
              stroke="var(--color-visitors)"
              strokeWidth={2}
              dot={({ payload, ...props }) => {
                return (
                  <Dot
                    key={payload.browser}
                    r={5}
                    cx={props.cx}
                    cy={props.cy}
                    fill={payload.fill}
                    stroke={payload.fill}
                  />
                );
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {t(`${info.info}`)} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          {t("展示这5个月的数据")}
        </div>
      </CardFooter>
    </Card>
  );
}
