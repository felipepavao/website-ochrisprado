import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

export default function Contato() {
  return (
    <>
      <Helmet>
        <title>Contato — Chris Prado</title>
        <meta name="description" content="Entre em contato com Chris Prado." />
      </Helmet>
      <section className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">Contato</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Fale comigo</h1>
        <p className="text-lg text-muted-foreground mb-10">
          Quer conversar? Me manda uma mensagem.
        </p>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium mb-2">Nome</label>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Mensagem</label>
            <textarea
              rows={5}
              placeholder="Como posso te ajudar?"
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
            />
          </div>
          <Button type="submit" size="lg" className="w-full">
            Enviar mensagem
          </Button>
        </form>
      </section>
    </>
  );
}
