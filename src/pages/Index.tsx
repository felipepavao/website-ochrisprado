import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import chrisPhoto from "@/assets/chris-prado.webp";

// ─── Shared helpers ───────────────────────────────────────────────────────────

const Red = ({ children }: { children: React.ReactNode }) => (
  <span className="text-brand-red">{children}</span>
);

const GoldText = ({ children }: { children: React.ReactNode }) => (
  <span className="text-brand-gold">{children}</span>
);

const Divider = () => <div className="section-divider my-0" />;

const CTAButton = ({ label = "Quero entrar na lista de espera →", className = "" }) => (
  <a
    href="#lista-de-espera"
    className={`inline-flex items-center justify-center bg-brand-red hover:bg-brand-red-dark active:scale-95 text-white font-bold text-base md:text-lg px-8 py-4 rounded-xl transition-all duration-200 glow-red ${className}`}
  >
    {label}
  </a>
);

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen bg-brand-bg flex items-center overflow-hidden">
      {/* Glow blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-20 md:py-0 w-full">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ── Text side ── */}
          <div className="order-2 md:order-1">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-red border border-brand-red/30 bg-brand-red/10 px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              Mentoria Individual · Vagas Limitadas
            </span>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] mb-6 text-brand-cream">
              Pare de ser o segredo<br />
              mais bem guardado<br />
              <span className="text-gradient-red">do seu setor.</span>
            </h1>

            <p className="text-[#A0A0A0] text-lg leading-relaxed mb-10 max-w-xl">
              6 meses de acompanhamento direto para você se tornar a primeira pessoa que vem à cabeça quando alguém pensar no seu mercado — sem virar influenciador, sem passar o dia inteiro no celular.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {[
                { num: "+500K", label: "seguidores construídos" },
                { num: "< 1 ano", label: "para chegar lá" },
                { num: "100%", label: "orgânico" },
                { num: "R$ 0", label: "investido em anúncios" },
              ].map((s) => (
                <div key={s.label} className="card-dark rounded-xl p-4 hover:border-brand-red/30 transition-colors">
                  <div className="text-2xl font-bold text-brand-red font-serif">{s.num}</div>
                  <div className="text-xs text-brand-muted mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <CTAButton className="w-full md:w-auto" />

            <p className="text-xs text-brand-muted mt-4 text-center md:text-left">
              Formulário gratuito · Sem compromisso · Vagas limitadas
            </p>
          </div>

          {/* ── Photo side ── */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-brand-red/20 blur-2xl scale-110" />
              <img
                src={chrisPhoto}
                alt="Chris Prado"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-brand-red/40"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 md:-left-8 bg-brand-bg-card border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">
                <div className="text-xs text-brand-muted mb-0.5">Método Hábito Viral®</div>
                <div className="text-sm font-bold text-brand-cream">22 padrões identificados</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none" />
    </section>
  );
}

// ─── Pain ─────────────────────────────────────────────────────────────────────

function Pain() {
  return (
    <section className="bg-[#111111] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-5">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-cream text-center leading-tight mb-6">
          Você é bom no que faz.
          <br />
          <span className="text-gradient-red">O problema é que ninguém sabe disso.</span>
        </h2>

        <p className="text-[#A0A0A0] text-lg text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          Seus clientes sabem. Quem trabalha com você sabe. Quem te conhece de perto, confia e indica. Mas quem não te conhece… nunca vai saber.
        </p>

        {/* Pain cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              icon: "😤",
              text: 'Você olha pro lado e vê aquele colega que você sabe que é <strong>tecnicamente pior</strong> — com a agenda cheia.',
            },
            {
              icon: "🎤",
              text: 'O empresário com negócio menor que o seu sendo convidado pra <strong>palestrar e aparecer em matérias</strong> que deveriam ser suas.',
            },
            {
              icon: "🤝",
              text: 'Parcerias e oportunidades <strong>que você nem sabia que existiam</strong> chegando pra quem aprendeu a aparecer.',
            },
            {
              icon: "📅",
              text: '<strong>Todo dia que passa</strong> sem posicionamento é um dia que outra pessoa ocupa o espaço que deveria ser seu.',
            },
          ].map((card, i) => (
            <div key={i} className="card-dark rounded-2xl p-6 hover:border-brand-red/20 transition-colors">
              <div className="text-3xl mb-3">{card.icon}</div>
              <p
                className="text-[#C0C0C0] leading-relaxed text-[15px]"
                dangerouslySetInnerHTML={{ __html: card.text }}
              />
            </div>
          ))}
        </div>

        {/* Big pull quote */}
        <div className="mt-16 text-center">
          <div className="text-6xl md:text-8xl font-serif font-bold text-gradient-red leading-none mb-4">
            "
          </div>
          <blockquote className="font-serif text-2xl md:text-3xl font-bold text-brand-cream max-w-2xl mx-auto -mt-8">
            O mercado não premia o melhor.
            <br />
            <span className="text-brand-red">Premia quem aparece mais.</span>
          </blockquote>
          <p className="text-brand-muted text-sm mt-6 uppercase tracking-widest">
            — Chris Prado
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Market Truth ─────────────────────────────────────────────────────────────

function MarketTruth() {
  return (
    <section className="bg-brand-bg py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-16">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4">A verdade que dói</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-cream leading-tight">
            As pessoas não querem mais comprar<br className="hidden md:block" /> de logos, marcas ou empresas genéricas.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              who: "O profissional que aparece",
              what: "tem fila de espera.",
              icon: "🧑‍⚕️",
            },
            {
              who: "O empresário que mostra bastidores",
              what: "lota mais que o concorrente com produto melhor.",
              icon: "🏢",
            },
            {
              who: "O fundador que conta sua história",
              what: "atrai clientes, talentos e oportunidades que dinheiro nenhum em tráfego pago compra.",
              icon: "🎯",
            },
          ].map((item) => (
            <div
              key={item.who}
              className="card-dark rounded-2xl p-6 text-center group hover:border-brand-red/30 transition-colors"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <p className="text-brand-red font-semibold mb-2 text-sm">{item.who}</p>
              <p className="text-brand-cream font-serif text-lg font-bold">{item.what}</p>
            </div>
          ))}
        </div>

        {/* The key insight */}
        <div className="bg-brand-red/10 border border-brand-red/30 rounded-3xl p-8 md:p-12 text-center">
          <p className="text-brand-muted text-sm uppercase tracking-widest mb-4">O diferencial competitivo mais poderoso hoje</p>
          <p className="font-serif text-2xl md:text-4xl font-bold text-brand-cream leading-tight">
            Podem copiar seu preço, sua localização,<br className="hidden md:block" /> seu serviço, seu cardápio.
          </p>
          <p className="font-serif text-2xl md:text-4xl font-bold text-brand-red mt-4">
            Mas não podem copiar você.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Objection ────────────────────────────────────────────────────────────────

function Objection() {
  return (
    <section className="bg-[#111111] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mb-12">
          <div className="inline-block card-dark rounded-3xl px-8 py-6 mb-10">
            <p className="font-serif text-3xl md:text-5xl font-bold text-[#CCCCCC] italic">
              "Mas eu não sou influencer."
            </p>
          </div>
          <p className="text-brand-red font-bold text-xl md:text-2xl">
            Ótimo. Nem deveria ser.
          </p>
        </div>

        <p className="text-[#A0A0A0] text-lg text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          Você não precisa de nada disso para construir autoridade real no Instagram:
        </p>

        {/* What you DON'T need */}
        <div className="grid md:grid-cols-2 gap-3 mb-12">
          {[
            "Postar 3 vezes por dia",
            "Aprender edição profissional de vídeo",
            "Dançar ou fazer trends",
            '"Ter o dom" para câmera',
            "Passar o dia inteiro no celular",
            "Equipe de produção",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 card-dark rounded-xl px-5 py-4">
              <span className="text-xl text-[#555]">✗</span>
              <span className="text-brand-muted line-through text-sm">{item}</span>
            </div>
          ))}
        </div>

        {/* What you DO need */}
        <div className="bg-brand-red/10 border border-brand-red/30 rounded-2xl p-6 md:p-8">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4 text-center">
            O que você realmente precisa
          </p>
          <p className="font-serif text-xl md:text-2xl text-brand-cream text-center font-bold leading-relaxed">
            Um sistema que não consuma tanto tempo da sua agenda e que transforme sua presença no Instagram no{" "}
            <span className="text-brand-red">ativo mais valioso do seu projeto.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Story ────────────────────────────────────────────────────────────────────

function Story() {
  return (
    <section className="bg-brand-bg py-20 md:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-16">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4">
            Como eu saí de zero para…
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-cream leading-tight">
            Mais de meio milhão de seguidores<br className="hidden md:block" /> em{" "}
            <span className="text-gradient-red">menos de 1 ano</span>
          </h2>
        </div>

        {/* Big stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16">
          {[
            { num: "+500K", sub: "seguidores" },
            { num: "< 1 ano", sub: "de resultado" },
            { num: "R$ 0", sub: "em anúncios" },
          ].map((s) => (
            <div key={s.num} className="text-center">
              <div className="font-serif text-3xl md:text-6xl font-bold text-gradient-red">{s.num}</div>
              <div className="text-brand-muted text-xs md:text-sm mt-2 uppercase tracking-widest">{s.sub}</div>
            </div>
          ))}
        </div>

        <Divider />

        {/* Narrative */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mt-16">
          <div className="space-y-5 text-[#B0B0B0] text-[17px] leading-relaxed order-2 md:order-1">
            <p>
              Meu nome é <strong className="text-brand-cream">Chris Prado</strong>. Comecei exatamente de onde você está hoje: bom no que faço, com resultado pra mostrar, mas praticamente invisível no digital.
            </p>
            <p>
              Postava sem consistência, sem direção, sem entender por que alguns conteúdos explodiam e outros simplesmente morriam.
            </p>
            <p>
              Então eu parei de agir no achismo e resolvi <strong className="text-brand-cream">dissecar mais de 3.000 conteúdos virais</strong>. Identifiquei{" "}
              <strong className="text-brand-red">22 padrões que se repetiam em todos</strong> — independente do nicho, do tamanho do perfil ou do tipo de conteúdo.
            </p>
            <p>
              Testei obsessivamente. E o que deu certo valeu muito a pena.
            </p>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-brand-red/15 blur-3xl scale-125" />
              <img
                src={chrisPhoto}
                alt="Chris Prado"
                className="relative w-52 h-52 md:w-64 md:h-64 object-cover rounded-full border-2 border-brand-red/30"
              />
            </div>
          </div>
        </div>

        {/* Discovery callout */}
        <div className="mt-16 text-center card-dark rounded-3xl p-8 md:p-12 border border-brand-red/20">
          <p className="font-serif text-xl md:text-3xl font-bold text-brand-cream mb-4">
            Descobri que viralizar não é talento.
          </p>
          <p className="font-serif text-2xl md:text-4xl font-bold text-gradient-red">
            É método. É sistema.
          </p>
          <div className="mt-8 text-[#A0A0A0] text-[15px] max-w-2xl mx-auto leading-relaxed">
            E percebi algo fundamental: o método funciona ainda melhor pra quem tem um trabalho real. Porque a história de quem constrói algo de verdade é naturalmente mais interessante do que a de quem só ensina teoria.
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Proof ────────────────────────────────────────────────────────────────────

function Proof() {
  return (
    <section className="bg-[#111111] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4">Resultado real</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-cream">
            "Essa semana foi insana."
          </h2>
        </div>

        {/* Leandro case */}
        <div className="card-dark rounded-3xl p-8 md:p-10 mb-8 border border-brand-red/20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-red/20 border border-brand-red/40 flex items-center justify-center">
              <span className="text-brand-red font-bold text-lg">L</span>
            </div>
            <div>
              <p className="font-bold text-brand-cream">Leandro</p>
              <p className="text-brand-muted text-sm">Profissional liberal · Método Hábito Viral</p>
            </div>
          </div>

          <p className="text-[#A0A0A0] mb-6 text-[15px] leading-relaxed">
            Antes: média de 6–8 vendas por dia. Estável, mas sem crescimento. Presença digital inconsistente, dependência total de indicação. Na primeira semana após instalar o método:
          </p>

          {/* Results grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { day: "Quarta", value: "R$ 800" },
              { day: "Quinta", value: "R$ 1.300" },
              { day: "Sexta", value: "R$ 870" },
              { day: "Sábado", value: "acordou com vendas no celular 📱" },
            ].map((r) => (
              <div key={r.day} className="bg-brand-red/10 border border-brand-red/20 rounded-xl p-3 text-center">
                <p className="text-brand-muted text-xs mb-1">{r.day}</p>
                <p className="text-brand-cream font-bold text-sm">{r.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "3 vídeos com +100K views",
              "+30K seguidores em 1 semana",
              "100% orgânico",
            ].map((tag) => (
              <span key={tag} className="text-xs bg-brand-red/10 text-brand-red border border-brand-red/20 px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <blockquote className="mt-6 border-l-2 border-brand-red pl-4 text-[#C0C0C0] italic text-sm">
            "A estratégia que aprendi no Hábito Viral realmente abriu a porteira."
          </blockquote>
        </div>

        {/* Placeholder for more testimonials */}
        <div className="grid md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="card-dark rounded-2xl p-6 border border-dashed border-white/10 text-center opacity-50">
              <div className="w-10 h-10 rounded-full bg-white/5 mx-auto mb-3" />
              <div className="h-3 bg-white/5 rounded-full mb-2 w-3/4 mx-auto" />
              <div className="h-3 bg-white/5 rounded-full mb-2 w-full" />
              <div className="h-3 bg-white/5 rounded-full w-2/3 mx-auto" />
              <p className="text-brand-muted text-xs mt-4">Depoimento em breve</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Program ──────────────────────────────────────────────────────────────────

const encounters = [
  {
    num: "01",
    title: "Diagnóstico e Posicionamento",
    subtitle: "Ponte Roxa",
    value: "R$ 3.000",
    desc: "Análise de quem você é, o que faz, pra quem faz e como o mercado te enxerga hoje. Construção da sua Ponte Roxa — a narrativa que conecta sua expertise com o que o mercado quer ouvir, de um jeito que nenhum concorrente replica.",
    deliverables: ["Perfil reposicionado (bio, foto, nome)", "Pilares de autoridade definidos", "Pilares de conteúdo estratégicos"],
  },
  {
    num: "02",
    title: "As 22 Chaves do Conteúdo Viral™",
    subtitle: "Framework exclusivo",
    value: "R$ 2.500",
    desc: "As 22 engrenagens que fazem um conteúdo explodir — no algoritmo e na cabeça das pessoas. Gancho, Retenção, Emoção, Prova Social, CTA, Timing, Narrativa e mais 15. Você para de postar 'no feeling' e começa a criar com engenharia.",
    deliverables: ["Planilha Chaves em Ação", "Framework aplicado ao seu nicho", "Avaliação de posts existentes"],
  },
  {
    num: "03",
    title: "Sistema de Criação para Gente Ocupada",
    subtitle: "Rotina que funciona na vida real",
    value: "R$ 2.000",
    desc: "Produção em lote, reaproveitamento inteligente, o que delegar e o que precisa ser você. Montamos juntos a rotina que funciona pra quem atende, opera, lidera e não tem 4 horas por dia pra ficar no celular.",
    deliverables: ["Cronograma semanal personalizado", "Templates de Reels e Carrosséis", "Sistema para produzir 1 semana em 1 tarde"],
  },
  {
    num: "04",
    title: "Os 16 Formatos Virais (+1 Bônus)",
    subtitle: "+ Tonho, o agente de IA",
    value: "R$ 2.500",
    desc: "Tela Dividida, Tela Verde, Palestra, Narrado, Imersão, Storytelling Visual, Experimento Social, Conflito Situacional, Caixinha, Movimento, Contraste, Duas Vozes, Trivial, The Office, Lo-fi, Bastidores + 1 bônus. Cada formato com roteiro pronto e CTA.",
    deliverables: ["Banco de Formatos personalizado", "Roteiros prontos para usar", "Acesso ao Tonho (IA treinada por Chris)"],
  },
  {
    num: "05",
    title: "Métricas e Otimização",
    subtitle: "Crescimento calculado, não no achismo",
    value: "R$ 1.500",
    desc: "Você aprende a ler os números que realmente importam: retenção, compartilhamentos, seguidores por post. Se um conteúdo não performou, você identifica qual das 22 Chaves falhou e ajusta no próximo.",
    deliverables: ["Painel de Análise pronto", "Sistema de diagnóstico por conteúdo", "Critérios claros de pivô"],
  },
  {
    num: "06",
    title: "Autoridade → Oportunidades → Receita",
    subtitle: "O funil orgânico completo",
    value: "R$ 2.500",
    desc: "Como transformar visibilidade em clientes, parcerias, convites, imprensa e receita. Reels atraem, Feed quebra objeções, Stories conectam, DMs vendem. O Blueprint do Funil Orgânico, do topo à conversão no WhatsApp.",
    deliverables: ["Blueprint do Funil Orgânico", "Estratégia de monetização", "Roteiro de DM para vendas"],
  },
];

function Program() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-brand-bg py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-16">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4">O programa</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-cream leading-tight">
            Não é curso. Não é comunidade.<br />
            <span className="text-gradient-red">É acompanhamento direto.</span>
          </h2>
          <p className="text-[#A0A0A0] mt-6 max-w-2xl mx-auto leading-relaxed">
            Meu olho no seu perfil até você estar crescendo de forma consistente. Em duas fases claras:
          </p>
        </div>

        {/* Phase 1 */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-brand-red text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              Fase 1
            </div>
            <div>
              <p className="font-bold text-brand-cream">Instalação do Método</p>
              <p className="text-brand-muted text-sm">90 dias · 6 encontros individuais (a cada 15 dias)</p>
            </div>
          </div>

          <div className="space-y-3">
            {encounters.map((enc, i) => (
              <div
                key={enc.num}
                className={`card-dark rounded-2xl overflow-hidden transition-colors ${
                  open === i ? "border border-brand-red/30" : "hover:border-white/10"
                }`}
              >
                <button
                  className="w-full flex items-center gap-4 p-5 md:p-6 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-serif text-2xl font-bold text-brand-red/40 w-10 shrink-0">{enc.num}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-brand-cream text-sm md:text-base">{enc.title}</p>
                    <p className="text-brand-muted text-xs mt-0.5">{enc.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-brand-gold text-sm font-semibold hidden md:block">{enc.value}</span>
                    <span className="text-brand-muted text-lg">{open === i ? "−" : "+"}</span>
                  </div>
                </button>

                {open === i && (
                  <div className="px-5 md:px-6 pb-6 border-t border-white/5">
                    <p className="text-[#A0A0A0] text-[15px] leading-relaxed mt-4 mb-4">{enc.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {enc.deliverables.map((d) => (
                        <span key={d} className="text-xs bg-brand-red/10 text-brand-red border border-brand-red/20 px-3 py-1.5 rounded-full">
                          ✓ {d}
                        </span>
                      ))}
                    </div>
                    <p className="text-brand-gold text-sm font-semibold mt-4 md:hidden">{enc.value}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Phase 2 */}
        <div className="bg-brand-red/10 border border-brand-red/30 rounded-3xl p-8 md:p-10 mt-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-brand-red/30">
              Fase 2
            </div>
            <div>
              <p className="font-bold text-brand-cream">Acompanhamento Estratégico</p>
              <p className="text-brand-muted text-sm">90 dias adicionais</p>
            </div>
          </div>
          <p className="text-[#A0A0A0] leading-relaxed mb-6">
            Depois dos 6 encontros, eu não desapareço. Você continua com acesso direto a mim por mais 90 dias via WhatsApp. Dúvidas, ajustes, revisão de conteúdo, feedback de performance — tudo continua.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Revisão de conteúdo antes de publicar",
              "Análise mensal de métricas",
              "Ajuste de estratégia por dados reais",
              "Suporte direto para qualquer travamento",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-brand-cream">
                <span className="text-brand-red mt-0.5">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-8 text-center">
          <p className="font-serif text-2xl md:text-3xl font-bold text-brand-cream">
            Total: <span className="text-gradient-red">6 meses ao seu lado.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Value Table ──────────────────────────────────────────────────────────────

const valueItems = [
  { item: "Diagnóstico individual + Posicionamento (Ponte Roxa)", value: "R$ 3.000" },
  { item: "Framework 22 Chaves do Conteúdo Viral™ + Planilha", value: "R$ 2.500" },
  { item: "Sistema de Criação + Templates + Cronograma", value: "R$ 2.000" },
  { item: "16 Formatos Virais + Roteiros + Tonho (IA)", value: "R$ 2.500" },
  { item: "Painel de Métricas + Guia de Interpretação", value: "R$ 1.500" },
  { item: "Blueprint do Funil Orgânico + Monetização", value: "R$ 2.500" },
  { item: "6 meses de acesso direto via WhatsApp", value: "R$ 4.500" },
  { item: "90 dias de acompanhamento estratégico pós-mentoria", value: "R$ 3.500" },
  { item: "Agentes de IA especializados em criação", value: "R$ 1.500" },
];

function Pricing() {
  return (
    <section className="bg-[#111111] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4">Investimento</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-cream">
            Tudo que você recebe
          </h2>
        </div>

        {/* Value table */}
        <div className="card-dark rounded-2xl overflow-hidden mb-8">
          {valueItems.map((row, i) => (
            <div
              key={i}
              className={`flex items-center justify-between gap-4 px-5 py-4 ${
                i < valueItems.length - 1 ? "border-b border-white/5" : ""
              }`}
            >
              <span className="text-[#B0B0B0] text-sm">{row.item}</span>
              <span className="text-brand-gold font-semibold text-sm shrink-0">{row.value}</span>
            </div>
          ))}

          {/* Total */}
          <div className="bg-brand-red/10 border-t border-brand-red/30 flex items-center justify-between gap-4 px-5 py-5">
            <span className="font-bold text-brand-cream">Valor total</span>
            <span className="font-bold text-brand-cream line-through text-brand-muted">R$ 24.000</span>
          </div>
        </div>

        {/* Investment card */}
        <div className="bg-gradient-to-br from-brand-red/20 to-brand-red/5 border-2 border-brand-red rounded-3xl p-8 md:p-10 text-center glow-red">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4">Seu investimento</p>
          <div className="font-serif text-5xl md:text-7xl font-bold text-brand-cream mb-2">
            R$ 15.000
          </div>
          <p className="text-brand-muted text-sm mb-6">à vista</p>
          <div className="card-dark rounded-xl py-3 px-6 inline-block mb-8">
            <p className="text-[#B0B0B0] text-sm">
              ou <strong className="text-brand-cream">4× de R$ 4.500</strong> no Pix
            </p>
          </div>
          <div className="block">
            <CTAButton label="Quero entrar na lista de espera →" className="w-full md:w-auto" />
          </div>
        </div>

        {/* Price justification */}
        <div className="mt-12 space-y-4">
          <p className="text-brand-muted text-sm uppercase tracking-widest text-center mb-6">
            Por que R$ 15.000 é barato
          </p>
          {[
            {
              icon: "🩺",
              title: "Se você é profissional liberal",
              desc: "Cobrando R$ 300 por consulta, precisa de 50 clientes para pagar a mentoria. Se o método trouxer 5 clientes novos por mês, em 10 meses você pagou e está no lucro. Só que o posicionamento continua trabalhando pra sempre.",
            },
            {
              icon: "🏢",
              title: "Se você é empresário",
              desc: "Faturando R$ 1M por ano, uma marca pessoal forte pode representar 10% de aumento. São R$ 100K. R$ 15K pra destrancar R$ 100K é um ROI de quase 7×.",
            },
            {
              icon: "📱",
              title: "Versus tráfego pago",
              desc: "R$ 15K é menos do que a maioria gasta em 2–3 meses de anúncios que geram cliques — não autoridade, não marca pessoal. Anúncio para quando você para de pagar. Posicionamento fica.",
            },
          ].map((card) => (
            <div key={card.title} className="card-dark rounded-2xl p-6 flex gap-4 hover:border-brand-red/20 transition-colors">
              <span className="text-3xl shrink-0">{card.icon}</span>
              <div>
                <p className="font-bold text-brand-cream mb-1">{card.title}</p>
                <p className="text-[#A0A0A0] text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Guarantee ────────────────────────────────────────────────────────────────

function Guarantee() {
  return (
    <section className="bg-brand-bg py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5 text-center">
        {/* Visual badge */}
        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="w-40 h-40 rounded-full border-4 border-brand-red flex flex-col items-center justify-center bg-brand-red/10 glow-red">
              <span className="text-brand-red text-4xl mb-1">✦</span>
              <p className="text-brand-cream text-xs font-bold uppercase tracking-widest text-center leading-tight px-4">
                Garantia<br />Método<br />Instalado
              </p>
            </div>
            {/* Rotating dashes */}
            <div className="absolute -inset-3 rounded-full border border-dashed border-brand-red/30 animate-spin" style={{ animationDuration: "20s" }} />
          </div>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-cream mb-6 leading-tight">
          Se você aplicar e não tiver resultado,<br />
          <span className="text-gradient-red">eu fico até ter.</span>
        </h2>

        <p className="text-[#A0A0A0] text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Se você participar dos 6 encontros, aplicar as tarefas e não tiver resultado mensurável ao final dos 6 meses — crescimento real de seguidores, aumento de alcance ou novas oportunidades vindas do conteúdo —{" "}
          <strong className="text-brand-cream">eu continuo te acompanhando gratuitamente até ter. Sem prazo. Sem custo extra.</strong>
        </p>

        <div className="bg-brand-red/10 border border-brand-red/30 rounded-2xl p-6 text-left max-w-xl mx-auto">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4 text-center">
            O que "aplicar" significa
          </p>
          <div className="space-y-3">
            {[
              "Comparecer aos 6 encontros",
              "Publicar ao menos 7 conteúdos por semana nos 6 meses",
              "Responder os feedbacks em até 48 horas",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-[#C0C0C0]">
                <span className="text-brand-red">✓</span>
                {item}
              </div>
            ))}
          </div>
          <p className="text-brand-muted text-xs text-center mt-4">
            Quem cumpre isso, cresce. Sempre.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── For Who ──────────────────────────────────────────────────────────────────

function ForWho() {
  return (
    <section className="bg-[#111111] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">

          {/* NOT for */}
          <div className="card-dark rounded-3xl p-8 border border-white/10">
            <p className="text-brand-muted text-sm font-semibold uppercase tracking-widest mb-6">
              Pra quem NÃO é
            </p>
            <div className="space-y-5">
              {[
                {
                  title: "Quem quer terceirizar tudo",
                  desc: "Eu dou método, roteiro, suporte, revisão. Mas aparecer é com você.",
                },
                {
                  title: "Quem não pode investir 2h/dia",
                  desc: "Menos que isso não dá pra construir autoridade. Se o momento não permite, melhor esperar.",
                },
                {
                  title: "Quem está começando do zero",
                  desc: "Essa mentoria é pra quem já tem profissão ou negócio rodando e quer amplificar.",
                },
                {
                  title: "Quem quer resultado em 7 dias",
                  desc: "Autoridade se constrói com consistência. Não é mágica — é método com disciplina.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-[#555] text-lg mt-0.5">✗</span>
                  <div>
                    <p className="font-semibold text-[#888] text-sm">{item.title}</p>
                    <p className="text-brand-muted text-xs mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IS for */}
          <div className="bg-brand-red/10 border border-brand-red/30 rounded-3xl p-8">
            <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-6">
              Pra quem É
            </p>
            <div className="space-y-5">
              {[
                {
                  title: "Profissionais liberais",
                  desc: "Médicos, nutricionistas, dentistas, advogados, psicólogos, arquitetos, personal trainers, consultores — excelentes no que fazem, invisíveis no Instagram.",
                },
                {
                  title: "Empresários e donos de negócio",
                  desc: "Restaurantes, lojas, clínicas, escritórios faturando entre R$ 500K e R$ 10M que perceberam que o fundador invisível perde pra quem aparece.",
                },
                {
                  title: "Quem já entendeu o jogo",
                  desc: "Qualquer pessoa que decidiu que não vai mais aceitar ser o segredo mais bem guardado do seu setor.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-brand-red text-lg mt-0.5">✓</span>
                  <div>
                    <p className="font-semibold text-brand-cream text-sm">{item.title}</p>
                    <p className="text-[#A0A0A0] text-xs mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-brand-red/20">
              <p className="text-[#A0A0A0] text-xs leading-relaxed italic">
                Em comum: o incômodo de saber que poderiam ser mais reconhecidos. A clareza de que o problema não é competência — é visibilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Inaction ─────────────────────────────────────────────────────────────────

function Inaction() {
  return (
    <section className="bg-brand-bg py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <p className="text-brand-muted text-sm uppercase tracking-widest mb-8">O custo de continuar invisível</p>

        <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-cream leading-tight mb-8">
          Esses 6 meses vão<br />
          passar de qualquer jeito.
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-12 text-left">
          <div className="card-dark rounded-2xl p-6 border border-[#333]">
            <p className="text-brand-muted text-xs uppercase tracking-widest mb-3">Sem o método</p>
            <div className="space-y-2">
              {[
                "Postando sem direção",
                "Dependendo de indicação",
                "Vendo gente pior que você lotando agenda",
                "No mesmo lugar de hoje",
              ].map((i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-[#666]">
                  <span>—</span> {i}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-red/10 border border-brand-red/30 rounded-2xl p-6">
            <p className="text-brand-red text-xs uppercase tracking-widest mb-3">Com o método</p>
            <div className="space-y-2">
              {[
                "Sendo reconhecido no seu setor",
                "Sendo procurado por novos clientes",
                "Sendo convidado e indicado",
                "Sendo a referência",
              ].map((i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-brand-cream">
                  <span className="text-brand-red">✓</span> {i}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="font-serif text-xl md:text-2xl text-[#A0A0A0] leading-relaxed">
          O método existe. O caminho está mapeado.{" "}
          <strong className="text-brand-cream">Já fiz pra mim. Já instalei em outros.</strong> Funciona.
          <br /><br />
          <span className="text-gradient-red font-bold text-2xl md:text-3xl">
            A única variável que falta é você decidir.
          </span>
        </p>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section id="lista-de-espera" className="bg-[#0A0505] py-20 md:py-28 border-t border-brand-red/20">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <div className="flex justify-center mb-6">
          <img
            src={chrisPhoto}
            alt="Chris Prado"
            className="w-20 h-20 rounded-full border-2 border-brand-red/50 object-cover"
          />
        </div>

        <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4">Próximo passo</p>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-cream mb-6 leading-tight">
          Se faz sentido,<br />
          <span className="text-gradient-red">preencha o formulário.</span>
        </h2>
        <p className="text-[#A0A0A0] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Assim que possível entrarei em contato para conversar, entender sua situação e, se fizer sentido pros dois lados, começamos.
        </p>

        <div className="card-dark rounded-3xl p-8 md:p-10 border border-brand-red/20 mb-8">
          <p className="text-brand-muted text-sm mb-6">
            🔒 Formulário gratuito · Sem compromisso · Eu serei direto sobre se esse método faz sentido para você agora.
          </p>

          {/* Placeholder form */}
          <div className="space-y-4 text-left mb-8">
            <div>
              <label className="block text-xs text-brand-muted uppercase tracking-widest mb-2">Seu nome</label>
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-brand-cream placeholder:text-brand-muted focus:outline-none focus:border-brand-red/50 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-brand-muted uppercase tracking-widest mb-2">Seu email</label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-brand-cream placeholder:text-brand-muted focus:outline-none focus:border-brand-red/50 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-brand-muted uppercase tracking-widest mb-2">Sua profissão / negócio</label>
              <input
                type="text"
                placeholder="Ex: Nutricionista, Advogado, Dono de clínica..."
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-brand-cream placeholder:text-brand-muted focus:outline-none focus:border-brand-red/50 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-brand-muted uppercase tracking-widest mb-2">Instagram atual (se tiver)</label>
              <input
                type="text"
                placeholder="@seuperfil"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-brand-cream placeholder:text-brand-muted focus:outline-none focus:border-brand-red/50 transition-colors text-sm"
              />
            </div>
          </div>

          <CTAButton label="Entrar na Lista de Espera →" className="w-full text-center" />

          <p className="text-brand-muted text-xs mt-4">
            Vagas são limitadas. Eu só trabalho com quem já chega pronto.
          </p>
        </div>

        {/* Footer mini */}
        <p className="text-brand-muted text-xs">
          © {new Date().getFullYear()} Chris Prado · Método Hábito Viral®
        </p>
      </div>
    </section>
  );
}

// ─── Sticky mobile CTA ────────────────────────────────────────────────────────

function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-brand-bg border-t border-brand-red/20 px-5 py-3">
      <CTAButton label="Entrar na lista de espera →" className="w-full text-center text-sm py-3" />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Mentoria Método Hábito Viral® — Chris Prado</title>
        <meta
          name="description"
          content="6 meses de acompanhamento direto para você construir autoridade e receita no Instagram. Sem virar influenciador. 100% orgânico."
        />
        <meta property="og:title" content="Mentoria Método Hábito Viral® — Chris Prado" />
        <meta property="og:description" content="De zero para +500K seguidores em menos de 1 ano. Agora vou instalar esse método em você." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="bg-brand-bg text-brand-cream overflow-x-hidden">
        <Hero />
        <Divider />
        <Pain />
        <Divider />
        <MarketTruth />
        <Divider />
        <Objection />
        <Divider />
        <Story />
        <Divider />
        <Proof />
        <Divider />
        <Program />
        <Divider />
        <Pricing />
        <Divider />
        <Guarantee />
        <Divider />
        <ForWho />
        <Divider />
        <Inaction />
        <FinalCTA />
        <StickyCTA />
      </div>
    </>
  );
}
