import { Helmet } from "react-helmet-async";

export default function Sobre() {
  return (
    <>
      <Helmet>
        <title>Sobre — Chris Prado</title>
        <meta name="description" content="Conheça a história de Chris Prado." />
      </Helmet>
      <section className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">Sobre</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Quem sou eu</h1>
        <div className="prose prose-neutral max-w-none text-foreground/80 leading-relaxed space-y-4">
          <p className="text-lg">
            Olá! Sou Chris Prado.
          </p>
          <p>
            Esta página está sendo construída. Em breve você vai conhecer minha história, trajetória e o que me move.
          </p>
        </div>
      </section>
    </>
  );
}
