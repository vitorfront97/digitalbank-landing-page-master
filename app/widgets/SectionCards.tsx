import SectionArticle from "../components/SectionCardsItem";

export default function Section() {
  return (
    <section className="pt-16 p-8 flex flex-col gap-8 bg-this-gray-100 text-center md:px-24 lg:text-left xl:px-36">
      <div className="flex flex-col gap-4">
        <h2 className="text-this-blue-950 text-3xl">Why choose Digitalbank?</h2>
        <p className="text-[14px]/4 text-this-gray-600">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12 xl:grid-cols-4">
        <SectionArticle src="icon-online.svg" title="Online Banking" alt="Mão segurando cartões">
          Our modern web and mobile applications allow you to keep track of your
          finances wherever you are in the world.
        </SectionArticle>
        <SectionArticle src="icon-budgeting.svg" title="Simple Budgeting" alt="Celular com aplicativo de banco na tela">
          See exactly where your money goes each month. Receive notifications
          when you’re close to hitting your limits.
        </SectionArticle>
        <SectionArticle src="icon-onboarding.svg" title="Fast Onboarding" alt="Pessoas trabalhando">
          We don’t do branches. Open your account in minutes online and start
          taking control of your finances right away.
        </SectionArticle>
        <SectionArticle src="icon-api.svg" title="Open API" alt="Chip de processador">
          Manage your savings, investments, pension, and much more from one
          account. Tracking your money has never been easier.
        </SectionArticle>
      </div>
    </section>
  );
}
