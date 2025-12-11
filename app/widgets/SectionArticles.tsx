import SectionArticlesItem from "../components/SectionArticlesItem";

export default function SectionArticles() {
  return (
    <section className="pt-12 flex flex-col items-center gap-12">
      <h3 className="text-this-blue-950 text-3xl">Lastest Articles</h3>
      <div className="px-6 grid grid-cols-1 gap-12 md:grid-cols-2 md:px-24 xl:px-36 xl:grid-cols-4">
        <SectionArticlesItem
          src="/image-currency.jpg"
          alt="Dinheiro amontoado"
          author="Claire Robinson"
          title="Receive money in any currency with no fees"
        >
          The world is getting smaller and we’re becoming more mobile. So why
          should you be forced to only receive money in a single …
        </SectionArticlesItem>
        <SectionArticlesItem
          src="/image-restaurant.jpg"
          alt="Prato com comida em mesa de restaurante"
          author="Wilson Hutton"
          title="Treat yourself without worrying about money"
        >
          Our simple budgeting feature allows you to separate out your spending
          and set realistic limits each month. That means you …
        </SectionArticlesItem>
        <SectionArticlesItem
          src="/image-plane.jpg"
          alt="Visão do horizonte da janela de um avião"
          author="Wilson Hutton"
          title="Take your Digitalbank card wherever you go"
        >
          We want you to enjoy your travels. This is why we don’t charge any
          fees on purchases while you’re abroad. We’ll even show you …
        </SectionArticlesItem>
        <SectionArticlesItem
          src="/image-confetti.jpg"
          alt="Confetes de festa"
          author="Claire Robinson"
          title="Our invite-only Beta accounts are now live!"
        >
          After a lot of hard work by the whole team, we’re excited to launch
          our closed beta. It’s easy to request an invite through the site ...
        </SectionArticlesItem>
      </div>
    </section>
  );
}
