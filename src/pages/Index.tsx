import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Chris Prado</title>
        <meta name="description" content="Chris Prado — em construção." />
      </Helmet>

      {/* Hero */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 text-center pt-16">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">
            Bem-vindo ao meu espaço
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Chris Prado
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Este site está sendo construído. Em breve você vai encontrar aqui meu trabalho, minhas ideias e formas de se conectar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/sobre">
                Conheça minha história <ArrowRight size={16} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contato">Fale comigo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Teaser sections */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8">
        {[
          {
            label: "Sobre",
            title: "Quem sou eu",
            description: "Minha história, minha trajetória, e o que me move.",
            href: "/sobre",
          },
          {
            label: "Trabalhos",
            title: "O que faço",
            description: "Projetos, entregas e cases do meu trabalho.",
            href: "/trabalhos",
          },
          {
            label: "Blog",
            title: "O que penso",
            description: "Textos, reflexões e ideias que valem ser compartilhadas.",
            href: "/blog",
          },
        ].map((card) => (
          <Link
            key={card.href}
            to={card.href}
            className="group p-8 rounded-xl border border-border bg-card hover:border-foreground/20 transition-all duration-200"
          >
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">
              {card.label}
            </p>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-foreground transition-colors">
              {card.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {card.description}
            </p>
            <div className="mt-4 flex items-center gap-1 text-sm font-medium text-foreground/60 group-hover:text-foreground transition-colors">
              Ver mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
