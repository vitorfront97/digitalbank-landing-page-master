import Image from "next/image";
import Button from "../components/Button";

export default function Main() {
  return (
    <main className="touch-none pb-16 flex flex-col items-center bg-this-white bg-[url(/bg-intro-mobile.svg)] bg-top-right bg-no-repeat sm:px-8 sm:pb-0 sm:justify-between md:px-24 md:bg-[url(/bg-intro-desktop.svg)] md:bg-position-[top_-16rem_left_32rem] lg:items-start lg:flex-row-reverse lg:bg-position-[top_-16rem_left_26rem] xl:px-36 xl:bg-position-[top_-16rem_left_34rem] 2xl:bg-position-[top_-16rem_right_-26rem]">
      <div className="px-4 sm:max-w-1/2">
        <Image
          className="max-w-[clamp(350px,60vw,700px)] h-auto relative top-[-7.8rem] left-1/2 -translate-x-1/2 lg:-top-32 lg:-left-5 lg:translate-none xl:-top-36 xl:left-9 2xl:left-41"
          src="/image-mockups.png"
          width={700}
          height={0}
          alt="Celulares demonstrando a aplicação Digitalbank"
        />
      </div>
      <div className="flex flex-col items-center gap-6 text-center lg:mt-24 lg:max-w-1/2 lg:items-start lg:text-left 2xl:px-8">
        <h1 className="text-[clamp(2.5rem,4vw,3.75rem)] text-this-blue-950 font-extralight">
          Next generation digital banking
        </h1>
        <p className="text-[clamp(1rem,4vw,1.25rem)] leading-5 text-this-gray-600 sm:leading-6 md:leading-7">
          Take your financial life online. Your Digitalbank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button />
      </div>
    </main>
  );
}