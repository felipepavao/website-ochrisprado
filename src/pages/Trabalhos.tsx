import { Helmet } from "react-helmet-async";

export default function Trabalhos() {
  return (
    <>
      <Helmet>
        <title>Trabalhos — Chris Prado</title>
        <meta name="description" content="Projetos e trabalhos de Chris Prado." />
      </Helmet>
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">Portfólio</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Trabalhos</h1>
        <p className="text-lg text-muted-foreground">
          Em breve você vai encontrar aqui os projetos e cases do meu trabalho.
        </p>
      </section>
    </>
  );
}
