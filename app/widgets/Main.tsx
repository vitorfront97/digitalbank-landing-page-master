import Image from "next/image";
import Button from "../components/Button";

export default function Main() {
  return (
    <main className="overflow-x-hidden pb-16 px-6 flex flex-col items-center bg-this-white bg-[url(/bg-intro-mobile.svg)] bg-top-right bg-no-repeat md:px-24 lg:bg-[url(/bg-intro-desktop.svg)] lg:bg-position-[top_-16rem_left_32rem] lg:flex-row-reverse xl:bg-position-[top_-16rem_left_38rem] 2xl:px-36 2xl:bg-position-[bottom_8rem_left_42rem]">
      <Image
        className="h-auto relative -top-29 lg:w-250 lg:-top-21 lg:-right-40 xl:-top-28 xl:-right-46"
        src="/image-mockups.png"
        width={375}
        height={0}
        alt="Celulares demonstrando a aplicação Digitalbank"
      />
      <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left xl:max-w-140">
        <h1 className="text-4xl text-this-blue-950 font-extralight lg:text-5xl 2xl:text-6xl">
          Next generation digital banking
        </h1>
        <p className="text-[14px]/4 text-this-gray-600 lg:text-lg 2xl:text-xl">
          Take your financial life online. Your Digitalbank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button />
      </div>
    </main>
  );
}
