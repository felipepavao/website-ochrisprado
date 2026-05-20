import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-bold text-muted-foreground/30 mb-4">404</h1>
      <p className="text-2xl font-semibold mb-2">Página não encontrada</p>
      <p className="text-muted-foreground mb-8">Esta página não existe ou foi movida.</p>
      <Button asChild>
        <Link to="/">Voltar ao início</Link>
      </Button>
    </section>
  );
}
