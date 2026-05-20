import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {year} Chris Prado. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-6">
          <Link to="/politica-de-privacidade" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Política de Privacidade
          </Link>
          <Link to="/termos-de-uso" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Termos de Uso
          </Link>
        </div>
      </div>
    </footer>
  );
}
