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
      {/* <p>{t("中国")}</p>
      <p>{test("Welcome to React")},</p>
      <p>{test("test")}</p> */}
      <ContextMenuBackage />
      <Footer />
    </main>
  );
}

export function Nav() {
  const t = useTranslations();
  const router = useRouter();
  return (
    <div className="flex flex-row h-[6vh] justify-center items-center ">
      <div className="basis-1/4">
        <Link href="/" className="flex justify-center items-center  ">
          <Image width={40} height={40} src="/thenextquant.png" alt="logo" />
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
            TheNextQuant
          </h3>
        </Link>
      </div>
      <div className="basis-1/4">
        <CommandDemo />
      </div>
      <div className="basis-1/2 flex flex-row justify-end items-center gap-x-3 mr-2">
        <div className="flex-row flex gap-x-3 hidden md:flex">
          <ModeToggle />
          <LanguageSwitchButton />
        </div>
        <div>
          <ConnectButton label={t("Sign")} />
        </div>
      </div>
    </div>
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
      <ContextMenuTrigger className="flex h-auto w-full items-center justify-center rounded-md border border-dashed text-sm">
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

import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

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
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function CommandDemo() {
  const t = useTranslations();
  return (
    <Command className="rounded-lg border shadow-md md:block hidden">
      <CommandInput placeholder={t("temp not Support Search!")} />
    </Command>
  );
}

import { BookOpenText } from "lucide-react";
import { PersonStanding } from "lucide-react";
export function LeftMenu() {
  const t = useTranslations();
  const left_menu_button_items = [
    {
      url: "url1",
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
  return <ul>{links}</ul>;
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
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {t("什么是TheNextQuant ?")}
        </h1>
        <p className="mt-6 border-l-2 pl-6 italic">
          {t("是投资机构都在使用的专业的量化工具包,利用他让你的智慧策略与收益想结合")}
        </p>
        <br />
        <div className="flex flex-col sm:flex-row">
          <div>
            <h2>{t("你资产的情况")}</h2>
            <FakeChart data={declinechartData} />
          </div>
          <Image src="/arrow.gif" alt="arrow" width={200} height={100} unoptimized={true}></Image>
          <div>
            <h2>{t("使用我们的框架")}</h2>
            <FakeChart data={risechartData} />
          </div>
        </div>
      </div>
    </div>
  );
}

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

const chartConfig = {
  visitors: {
    label: "Assert",
    color: "red",
  },
} satisfies ChartConfig;

export function FakeChart({ data }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Dots Colors</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
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
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}

import React from "react";

function Footer() {
  const t = useTranslations();
  return (
    <footer className="bg-gray-800 text-white py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo */}
          <div className="w-full flex items-center md:w-1/4 text-center md:text-left mb-4 md:mb-0">
            <img
              src="/thenextquant.png"
              alt="Logo"
              className="h-12 mx-auto md:mx-0"
            />
            <h1 className="text-lg">ThenextQuant</h1>
          </div>

          {/* 许可证 */}
          <div className="w-full md:w-1/4 text-center mb-4 md:mb-0">
            <Link href="/license">
              <h2 className="text-lg font-semibold">{t("许可证")}</h2>
            </Link>
          </div>

          {/* 关于我们 */}
          <div className="w-full md:w-1/4 text-center mb-4 md:mb-0">
            <Link href="/about">
              <h2 className="text-lg font-semibold">{t("关于我们")}</h2>
            </Link>
          </div>

          {/* 解释框架 */}
          <div className="w-full md:w-1/4 text-center md:text-right">
            <Link href="/">
              <h2 className="text-lg font-semibold">{t("了解框架")}</h2>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
