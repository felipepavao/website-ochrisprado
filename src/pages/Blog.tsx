import { Helmet } from "react-helmet-async";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog — Chris Prado</title>
        <meta name="description" content="Textos e reflexões de Chris Prado." />
      </Helmet>
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">Blog</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Ideias</h1>
        <p className="text-lg text-muted-foreground">
          Em breve você vai encontrar aqui textos, reflexões e ideias que valem ser compartilhadas.
        </p>
      </section>
    </>
  );
}
