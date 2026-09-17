import PageHero from "./PageHero";
import ContentBlocks from "./ContentBlocks";
import Reveal from "./Reveal";

export default function ContentPage({ eyebrow, title, description, crumbs, blocks, sidebar }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} crumbs={crumbs} />
      <div className="container-page py-14 sm:py-16">
        <div className={sidebar ? "grid gap-10 lg:grid-cols-[1fr_280px]" : ""}>
          <Reveal as="article" className="max-w-3xl rounded-3xl border border-ink-100 bg-white p-7 sm:p-10">
            <ContentBlocks blocks={blocks} />
          </Reveal>
          {sidebar && <aside className="lg:pt-2">{sidebar}</aside>}
        </div>
      </div>
    </>
  );
}
