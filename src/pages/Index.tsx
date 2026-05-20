import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import chrisPhoto from "@/assets/chris-prado.webp";

// ─── Shared ───────────────────────────────────────────────────────────────────

const Divider = () => <div className="section-divider" />;

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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-20 md:py-0 w-full">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Text */}
          <div className="order-2 md:order-1">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-red border border-brand-red/30 bg-brand-red/10 px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              Mentoria Individual · Vagas Limitadas
            </span>

            <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
              Mentoria Método Hábito Viral®
            </p>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-6 text-brand-cream">
              O programa que instala autoridade, crescimento orgânico e receita no Instagram
            </h1>

            <p className="text-[#B0B0B0] text-lg leading-relaxed mb-6">
              Eu vou te acompanhar pessoalmente por 6 meses para te colocar na rota de ser a primeira pessoa que vem à cabeça quando alguém pensar no seu mercado.
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Sem virar influenciador.",
                "Sem passar o dia inteiro no celular.",
                "Sem fazer dancinha.",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-[#888]">
                  <span className="text-brand-red text-lg">—</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[#B0B0B0] text-base leading-relaxed mb-10 border-l-2 border-brand-red/40 pl-4">
              Usando o método que me ajudou a construir mais de meio milhão de seguidores em menos de um ano — 100% orgânico, sem gastar R$1 com anúncio — e que funciona ainda melhor pra quem tem um trabalho real pra mostrar.
            </p>

            <CTAButton className="w-full md:w-auto" />

            <p className="text-xs text-brand-muted mt-4 text-center md:text-left">
              Formulário gratuito · Sem compromisso · Vagas limitadas
            </p>
          </div>

          {/* Photo */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-brand-red/20 blur-2xl scale-110" />
              <img
                src={chrisPhoto}
                alt="Chris Prado"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-brand-red/40"
              />
              <div className="absolute -bottom-4 -left-8 hidden md:flex flex-col bg-brand-bg-card border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">
                <div className="text-xs text-brand-muted mb-0.5">Resultado</div>
                <div className="text-sm font-bold text-brand-cream">+500K seguidores · menos de 1 ano · R$0 em anúncios</div>
              </div>
            </div>
          </div>
        </div>

        {/* Lede */}
        <div className="mt-10 md:mt-14 max-w-3xl mx-auto text-center">
          <p className="text-[#A0A0A0] text-lg leading-relaxed mb-4">
            O que você vai ler a seguir não tem a ver com postar mais. Tem a ver com criar um ativo que continua trabalhando por você, enquanto você atende paciente, fecha contrato ou toca o seu negócio.
          </p>
          <p className="text-brand-cream font-semibold text-lg">
            Se você é profissional liberal ou dono(a) de empresa estabelecido(a) e sabe que deveria ser mais reconhecido(a) do que é... continue lendo esta carta.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => document.getElementById('secao-dor')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-brand-red text-3xl animate-bounce focus:outline-none"
              aria-label="Continuar lendo"
            >
              ↓
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none" />
    </section>
  );
}

// ─── Pain ─────────────────────────────────────────────────────────────────────

function Pain() {
  return (
    <section id="secao-dor" className="bg-[#111111] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5">

        <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-cream leading-tight mb-10 text-center">
          Você é bom no que faz. O problema é que{" "}
          <span className="text-gradient-red">ninguém sabe disso.</span>
        </h2>

        <div className="space-y-5 text-[#B0B0B0] text-lg leading-relaxed">
          <p>
            Seus clientes sabem. Quem trabalha com você sabe. Quem te conhece de perto, confia e indica.
          </p>
          <p>
            Mas quem não te conhece... nunca vai saber.
          </p>
          <p>
            Eu sei que o que mais incomoda é olhar pro lado e descobrir que aquele colega que você sabe que é tecnicamente pior, tá com a agenda cheia.
          </p>
          <p>
            Aquele empresário com um negócio menor que o seu, tá sendo convidado pra palestrar, aparecer em matérias, fechando parcerias que você nem sabia que existiam.
          </p>
          <p className="text-brand-cream font-semibold">
            Porque eles aprenderam a aparecer. Mesmo não sendo os melhores.
          </p>
        </div>

        {/* Pull quote */}
        <div className="my-14 text-center">
          <div className="font-serif text-5xl text-brand-red/30 leading-none mb-2">"</div>
          <p className="font-serif text-2xl md:text-4xl font-bold text-brand-cream leading-tight -mt-4">
            O mercado não premia o melhor.{" "}
            <span className="text-brand-red">Premia o mais visível.</span>
          </p>
        </div>

        <div className="space-y-5 text-[#B0B0B0] text-lg leading-relaxed">
          <p>
            Não importa se você é o melhor nutricionista da cidade, o dentista mais atualizado, o advogado mais competente ou o dono do restaurante com a melhor comida… se ninguém sabe que você existe, é como se você não existisse.
          </p>
          <p>
            Infelizmente, esse é o jogo do mundo atual. E no fundo, você sabe que está deixando dinheiro, oportunidades e relevância na mesa por não se posicionar.
          </p>

          <div className="card-dark rounded-2xl p-6 border border-brand-red/20">
            <p className="text-brand-cream font-semibold text-lg">
              Todo dia que passa sem você se posicionar é um dia que outra pessoa ocupa o espaço que deveria ser seu.
            </p>
          </div>

          <p>
            Você só precisa de um método e alguém experiente pra te acelerar nessa rota.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Truth ────────────────────────────────────────────────────────────────────

function Truth() {
  return (
    <section className="bg-brand-bg py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5">

        <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-cream leading-tight mb-10 text-center">
          Desculpa, preciso te contar{" "}
          <span className="text-gradient-red">uma verdade dolorida…</span>
        </h2>

        <div className="space-y-5 text-[#B0B0B0] text-lg leading-relaxed mb-12">
          <p>
            As pessoas não querem mais comprar de logos, marcas ou empresas genéricas. Querem saber quem está por trás.
          </p>
          <p>
            Querem ouvir a história, entender a visão, sentir confiança na pessoa. Não mais no CNPJ ou no diploma.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            {
              who: "O profissional que aparece explicando o que faz",
              result: "tem fila de espera.",
            },
            {
              who: "O empresário que mostra os bastidores do negócio",
              result: "lota mais que o concorrente com produto melhor.",
            },
            {
              who: "O fundador que conta sua história",
              result: "atrai clientes, talentos e oportunidades que dinheiro nenhum de tráfego pago compra.",
            },
          ].map((item) => (
            <div key={item.who} className="card-dark rounded-2xl p-6 hover:border-brand-red/20 transition-colors">
              <p className="text-brand-muted text-sm mb-3 leading-relaxed">{item.who}</p>
              <p className="text-brand-cream font-serif font-bold text-lg">{item.result}</p>
            </div>
          ))}
        </div>

        <div className="space-y-5 text-[#B0B0B0] text-lg leading-relaxed">
          <p className="text-brand-cream font-semibold text-xl text-center">
            Sua marca pessoal virou o diferencial competitivo mais poderoso que existe.
          </p>
          <div className="bg-brand-red/10 border border-brand-red/30 rounded-2xl p-6 text-center">
            <p className="text-[#C0C0C0] text-lg mb-2">
              Porque podem copiar seu preço, sua localização, seu serviço, seu cardápio.
            </p>
            <p className="font-serif text-2xl font-bold text-brand-cream">
              Mas não podem copiar você.
            </p>
          </div>
          <p>
            A janela está aberta. Seus concorrentes ainda estão postando foto de fachada e "feliz dia do cliente."
          </p>
          <p className="text-brand-cream font-semibold">
            A pergunta é: por quanto tempo? E o que você vai fazer com essa informação?
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
      <div className="max-w-3xl mx-auto px-5">

        <div className="card-dark rounded-3xl p-8 md:p-10 text-center mb-10 border border-white/8">
          <p className="font-serif text-3xl md:text-5xl font-bold text-[#CCCCCC] italic leading-snug">
            "Mas eu não sou influencer."
          </p>
        </div>

        <div className="space-y-5 text-[#B0B0B0] text-lg leading-relaxed">
          <p className="text-brand-red font-bold text-xl">
            Ótimo. Nem deveria ser. Você não precisa virar influenciador "estúpido".
          </p>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              'Não precisa postar 3 vezes por dia.',
              'Não precisa aprender edição profissional de vídeos.',
              'Não precisa "ter o dom."',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 card-dark rounded-xl p-4">
                <span className="text-brand-red shrink-0 mt-0.5">✗</span>
                <span className="text-brand-muted text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-brand-red/10 border border-brand-red/30 rounded-2xl p-6 md:p-8">
            <p className="text-brand-cream text-lg leading-relaxed">
              Você só precisa de um sistema que não consuma tanto tempo da sua agenda e que transforme sua presença no Instagram no{" "}
              <strong>ativo mais valioso do seu projeto.</strong>
            </p>
          </div>

          <p className="text-brand-cream font-semibold">
            É exatamente isso que eu criei no Método Hábito Viral. E é exatamente isso que eu instalarei em você através do meu programa de mentoria individual.
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

        <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-cream leading-tight mb-14 text-center">
          Como eu saí de zero para mais de{" "}
          <span className="text-gradient-red">meio milhão de seguidores</span>{" "}
          em menos de 1 ano
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Photo */}
          <div className="flex justify-center order-1">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-brand-red/15 blur-3xl scale-125" />
              <img
                src={chrisPhoto}
                alt="Chris Prado"
                className="relative w-52 h-52 md:w-64 md:h-64 object-cover rounded-full border-2 border-brand-red/30"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5 text-[#B0B0B0] text-lg leading-relaxed order-2">
            <p>
              Você já me conhece, meu nome é <strong className="text-brand-cream">Chris Prado</strong>.
            </p>
            <p>
              Comecei exatamente de onde você está hoje: bom no que faço, com resultado pra mostrar, mas praticamente invisível no digital.
            </p>
            <p>
              Tinha experiência de verdade, cases sólidos, clientes satisfeitos. Mas no Instagram… nada acontecia.
            </p>
            <p>
              Postava sem consistência, sem direção, sem entender por que alguns conteúdos explodiam e outros simplesmente morriam.
            </p>
            <p>
              Até que eu parei de agir no achismo e comecei a tratar meu conteúdo como estratégia.
            </p>
          </div>
        </div>

        {/* Discovery */}
        <div className="mt-14 card-dark rounded-3xl p-8 md:p-12 border border-brand-red/20">
          <div className="max-w-2xl mx-auto space-y-5 text-[#B0B0B0] text-lg leading-relaxed">
            <p>
              Resolvi dissecar mais de <strong className="text-brand-cream">3.000 conteúdos virais</strong>. Identifiquei{" "}
              <strong className="text-brand-red">22 padrões que se repetiam em todos</strong> — independente do nicho, do tamanho do perfil ou do tipo de conteúdo.
            </p>
            <p>
              Testei obsessivamente. Errei mais do que acertei, mas o que deu certo valeu muito a pena.
            </p>

            <div className="text-center py-4">
              <p className="font-serif text-2xl md:text-3xl font-bold text-brand-cream">
                Descobri que viralizar não é talento.
              </p>
              <p className="font-serif text-2xl md:text-3xl font-bold text-brand-red mt-1">
                É método. É sistema.
              </p>
            </div>

            <p>
              Em menos de um ano mais de meio milhão de seguidores. 100% orgânico. Zero reais gasto em tráfego pago.
            </p>
            <p>
              Mas seguidores sem estratégia não pagam boleto. O que importa é o que veio junto: autoridade, convites, oportunidades e clientes todos os dias — vindos direto do conteúdo.
            </p>
            <p>
              Desde então, venho instalando esse método em profissionais e empresários de diferentes áreas.
            </p>
            <p>
              E percebi algo fundamental: o método funciona ainda melhor pra quem tem um trabalho real.
            </p>
            <p>
              Porque a história de quem constrói algo de verdade — com suor, decisões difíceis e resultado concreto — é naturalmente mais interessante do que a de quem só ensina teoria.
            </p>
            <p className="text-brand-cream font-semibold">
              Você já tem a matéria-prima. Só falta o método e acompanhamento próximo pra transformar ela em autoridade, clientes e reconhecimento.
            </p>
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
      <div className="max-w-3xl mx-auto px-5">

        <div className="text-center mb-12">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4">Resultado real</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-cream">
            "Essa semana foi insana."
          </h2>
        </div>

        <div className="card-dark rounded-3xl p-8 md:p-10 border border-brand-red/20 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-red/20 border border-brand-red/40 flex items-center justify-center shrink-0">
              <span className="text-brand-red font-bold text-lg">L</span>
            </div>
            <div>
              <p className="font-bold text-brand-cream">Leandro</p>
              <p className="text-brand-muted text-sm italic">Profissão e contexto em breve</p>
            </div>
          </div>

          <p className="text-[#A0A0A0] mb-6 leading-relaxed">
            Antes de instalar o método: média de 6 a 8 vendas por dia. Estável, mas sem crescimento. Presença digital inconsistente, dependência total de indicação, sem previsibilidade de novos clientes.
          </p>

          <p className="text-brand-cream font-semibold mb-4">Na primeira semana após instalar o sistema:</p>

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

          <div className="flex flex-wrap gap-2 mb-5">
            {["3 vídeos passaram de 100 mil views", "+30 mil seguidores em uma semana", "100% orgânico"].map((tag) => (
              <span key={tag} className="text-xs bg-brand-red/10 text-brand-red border border-brand-red/20 px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <blockquote className="border-l-2 border-brand-red pl-4 text-[#C0C0C0] italic">
            "A estratégia que aprendi no Hábito Viral realmente abriu a porteira."
          </blockquote>
        </div>


      </div>
    </section>
  );
}

// ─── Program ──────────────────────────────────────────────────────────────────

const encounters = [
  {
    num: "01",
    title: "Diagnóstico e Posicionamento (Ponte Roxa)",
    value: "R$ 3.000",
    body: `Eu analiso quem você é, o que você faz, pra quem faz e como o mercado te enxerga hoje.\n\nJuntos, construímos a sua Ponte Roxa — a narrativa que conecta sua expertise com o que o mercado quer ouvir, de um jeito que nenhum concorrente replica.\n\nDiferente de qualquer consultoria genérica: não é um template de bio. É a sua narrativa, construída do zero, baseada no que você já tem de extraordinário e ainda não sabe comunicar.`,
    deliverables: ["Perfil reposicionado (bio, foto, nome, descrição)", "Pilares de autoridade definidos", "Pilares de conteúdo que vão guiar tudo dali em diante"],
  },
  {
    num: "02",
    title: "As 22 Chaves do Conteúdo Viral™",
    value: "R$ 2.500",
    body: `Você vai entender as 22 engrenagens que fazem um conteúdo explodir — tanto no algoritmo quanto na cabeça das pessoas. Não é teoria: você recebe a Planilha "Chaves em Ação" pra avaliar e estruturar cada post antes de publicar.\n\nSão chaves como Gancho Viral, Retenção, Emoção, Prova Social, CTA, Timing, Narrativa e mais 15 outras — cada uma com função específica. Você aprende a combinar as chaves certas pra cada objetivo: alcance, engajamento ou venda.\n\nA partir daqui, você para de postar "no feeling" e começa a criar com engenharia.`,
    deliverables: ['Planilha "Chaves em Ação"', "Combinação certa por objetivo", "Fim do 'postar no feeling'"],
  },
  {
    num: "03",
    title: "Sistema de Criação para Gente Ocupada",
    value: "R$ 2.000",
    body: `Montamos a sua rotina de conteúdo que funciona na vida real — de quem atende, opera, lidera e não tem 4 horas por dia pra ficar no celular.\n\nProdução em lote, reaproveitamento inteligente, o que pode ser delegado e o que precisa ser você.`,
    deliverables: ["Cronograma semanal personalizado", "Templates de Reels e Carrosséis", "Sistema para produzir uma semana inteira em uma tarde"],
  },
  {
    num: "04",
    title: "Os 16 Formatos Virais (+1 Bônus)",
    value: "R$ 2.500",
    body: `Os 16 formatos que mais performam hoje no Instagram — adaptados pro seu contexto: Tela Dividida, Tela Verde, Palestra, Narrado, Imersão, Storytelling Visual, Experimento Social, Conflito Situacional, Caixinha, Movimento, Contraste, Duas Vozes, Trivial, The Office, Lo-fi, Bastidores — e mais 1 bônus.\n\nSe você é profissional liberal: formatos de autoridade, educação e bastidores clínicos. Se é empresário: bastidores do negócio, "dia na vida", storytelling de fundação, cultura, opinião do mercado.\n\nVocê também recebe acesso ao Tonho, o agente de IA que desenvolvi e treinei especificamente para criar roteiros e legendas com a estrutura dos formatos virais. É como ter um redator especialista no seu time disponível 24 horas e sem custo adicional.`,
    deliverables: ["Banco de Formatos personalizado", "Roteiro pronto e CTA por formato", "Acesso ao Tonho (IA treinada por Chris)"],
  },
  {
    num: "05",
    title: "Métricas e Otimização",
    value: "R$ 1.500",
    body: `Você aprende a ler os números que realmente importam — retenção, compartilhamentos, seguidores por post — e a tomar decisões com dados.\n\nVocê usa as 22 Chaves como diagnóstico: se um conteúdo não performou, você identifica qual chave falhou e ajusta no próximo.\n\nNada de achismo. Crescimento calculado.`,
    deliverables: ["Painel de Análise pronto", "Diagnóstico por conteúdo", "Critérios claros de pivô"],
  },
  {
    num: "06",
    title: "Autoridade → Oportunidades → Receita",
    value: "R$ 2.500",
    body: `A semana que conecta tudo: como transformar visibilidade em clientes, parcerias, convites, imprensa e receita.\n\nVocê entende o funil orgânico completo — Reels atraem, Feed quebra objeções, Stories conectam, DMs vendem — e monta seu Blueprint do Funil Orgânico do conteúdo de topo até a conversão no WhatsApp.`,
    deliverables: ["Blueprint do Funil Orgânico", "Estratégia de monetização", "Roteiro do DM à conversão"],
  },
];

function Program() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-brand-bg py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-5">

        <div className="text-center mb-14">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4">O que eu vou instalar em você</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-cream leading-tight">
            Passo a passo
          </h2>
          <p className="text-[#A0A0A0] mt-5 text-lg max-w-2xl mx-auto">
            Esse método não é curso gravado. Não é uma comunidade com mil pessoas. Não é mais teoria sem aplicação. É um acompanhamento direto, personalizado, do meu olho no seu perfil até você estar crescendo de forma consistente.
          </p>
          <p className="text-[#A0A0A0] mt-4 text-lg max-w-2xl mx-auto">
            A mentoria tem duas fases claras:
          </p>
        </div>

        {/* Phase 1 header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-brand-red text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shrink-0">
            FASE 1
          </div>
          <div>
            <p className="font-bold text-brand-cream">INSTALAÇÃO DO MÉTODO</p>
            <p className="text-brand-muted text-sm">90 dias · 6 encontros individuais, um a cada 15 dias</p>
          </div>
        </div>

        <p className="text-[#A0A0A0] mb-8 leading-relaxed">
          Cada encontro resolve um problema específico e te entrega ferramentas prontas pra aplicar imediatamente.
        </p>

        {/* Encounter accordion */}
        <div className="space-y-3 mb-12">
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
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-brand-gold text-sm font-semibold hidden md:block">{enc.value}</span>
                  <span className="text-brand-muted text-xl w-5 text-center">{open === i ? "−" : "+"}</span>
                </div>
              </button>

              {open === i && (
                <div className="px-5 md:px-6 pb-6 border-t border-white/5">
                  <div className="mt-4 space-y-3">
                    {enc.body.split("\n\n").map((para, j) => (
                      <p key={j} className="text-[#A0A0A0] text-[15px] leading-relaxed">{para}</p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-5">
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

        {/* Phase 1 result */}
        <p className="text-[#A0A0A0] text-lg leading-relaxed mb-12 text-center">
          Ao final da Fase 1, você não vai ter apenas conteúdo publicado. Vai ter um sistema funcionando, uma identidade clara no Instagram e uma audiência que já te enxerga como referência.
        </p>

        {/* Phase 2 */}
        <div className="bg-brand-red/10 border border-brand-red/30 rounded-3xl p-8 md:p-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-brand-red/30 shrink-0">
              FASE 2
            </div>
            <div>
              <p className="font-bold text-brand-cream">ACOMPANHAMENTO ESTRATÉGICO</p>
              <p className="text-brand-muted text-sm">90 dias</p>
            </div>
          </div>

          <div className="space-y-4 text-[#A0A0A0] leading-relaxed">
            <p>Depois dos 6 encontros, eu não desapareço.</p>
            <p>
              Você continua com acesso direto a mim por mais 90 dias via WhatsApp. Dúvidas, ajustes, revisão de conteúdo, feedback de performance — tudo continua. E se for necessário, fazemos calls de ajuste para recalibrar a rota.
            </p>
            <p>
              Essa fase existe porque o resultado de verdade não se constrói em 90 dias e desmorona no 91°. Eu fico até o método estar rodando sozinho.
            </p>
            <p className="text-brand-cream font-semibold">
              Na prática, durante esses 90 dias você vai ter:
            </p>
            <div className="grid md:grid-cols-2 gap-3 mt-2">
              {[
                "Revisão de conteúdo antes de publicar",
                "Análise mensal de métricas",
                "Ajuste de estratégia baseado em dados reais do seu perfil",
                "Suporte direto pra qualquer travamento que surgir no caminho",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-brand-cream">
                  <span className="text-brand-red mt-0.5 shrink-0">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="font-serif text-2xl md:text-3xl font-bold text-brand-cream">
            Total: <span className="text-gradient-red">6 meses ao seu lado.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── What You Get ─────────────────────────────────────────────────────────────

const companions = [
  "Canal direto comigo no WhatsApp — durante os 6 meses completos. Travou? Me manda mensagem. Dúvida antes de postar? Me manda. Você nunca fica sozinho.",
  "Feedback nos conteúdos publicados — eu reviso, comento, sugiro ajustes. Você posta com segurança, não no escuro.",
  "Agentes de IA especializados — e treinados por mim (incluindo o Tonho) pra criar roteiros, legendas e ideias a qualquer hora do dia. É como ter um time de criação 24h.",
  "Templates e planilhas liberados conforme o avanço — cronogramas, roteiros, estruturas de CTA, modelos de carrossel. Tudo adaptado ao seu estágio.",
];

const valueItems = [
  { item: "Diagnóstico individual + Posicionamento (Ponte Roxa)", value: "R$ 3.000" },
  { item: "Framework 22 Chaves do Conteúdo Viral™ + Planilha", value: "R$ 2.500" },
  { item: "Sistema de Criação + Templates + Cronograma", value: "R$ 2.000" },
  { item: "16 Formatos Virais + Roteiros Personalizados + Tonho (IA)", value: "R$ 2.500" },
  { item: "Painel de Métricas + Guia de Interpretação", value: "R$ 1.500" },
  { item: "Blueprint do Funil Orgânico + Estratégia de Monetização", value: "R$ 2.500" },
  { item: "6 meses de acesso direto via WhatsApp", value: "R$ 4.500" },
  { item: "90 dias de acompanhamento estratégico pós-mentoria", value: "R$ 3.500" },
  { item: "Agentes de IA especializados em criação de conteúdo", value: "R$ 1.500" },
];

function WhatYouGet() {
  return (
    <section className="bg-[#111111] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5">

        <div className="text-center mb-12">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4">Durante os 6 meses inteiros</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-cream">
            O que te acompanha ao longo de tudo
          </h2>
        </div>

        <div className="space-y-4 mb-16">
          {companions.map((item, i) => (
            <div key={i} className="card-dark rounded-2xl p-6 flex gap-4 hover:border-brand-red/20 transition-colors">
              <span className="text-brand-red text-lg shrink-0 mt-0.5">✓</span>
              <p className="text-[#B0B0B0] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        {/* Value table */}
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-cream">Tudo que você recebe</h3>
        </div>

        <div className="card-dark rounded-2xl overflow-hidden mb-8">
          {valueItems.map((row, i) => (
            <div
              key={i}
              className={`flex items-center justify-between gap-4 px-5 py-4 ${
                i < valueItems.length - 1 ? "border-b border-white/5" : ""
              }`}
            >
              <span className="text-[#B0B0B0] text-sm leading-relaxed">{row.item}</span>
              <span className="text-brand-gold font-semibold text-sm shrink-0">{row.value}</span>
            </div>
          ))}
          <div className="bg-[#1a1a1a] border-t border-white/10 flex items-center justify-between gap-4 px-5 py-5">
            <span className="text-brand-muted text-sm">Valor total se contratado separadamente</span>
            <span className="text-brand-muted line-through font-semibold">R$ 24.000</span>
          </div>
        </div>

        {/* Investment */}
        <div className="bg-gradient-to-br from-brand-red/20 to-brand-red/5 border-2 border-brand-red rounded-3xl p-8 md:p-10 text-center glow-red">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4">Seu investimento</p>
          <div className="font-serif text-6xl md:text-7xl font-bold text-brand-cream mb-2">
            R$ 15.000
          </div>
          <p className="text-brand-muted mb-2">à vista</p>
          <div className="card-dark rounded-xl py-3 px-6 inline-block mb-8">
            <p className="text-[#B0B0B0] text-sm">
              ou <strong className="text-brand-cream">4× de R$ 4.500</strong> no Pix
            </p>
          </div>
          <div className="block">
            <CTAButton label="Quero entrar na lista de espera →" className="w-full md:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Price Justification ──────────────────────────────────────────────────────

function PriceJustification() {
  return (
    <section className="bg-brand-bg py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5">

        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-cream">
            Por que <span className="text-gradient-red">R$ 15.000 é barato</span>
          </h2>
        </div>

        <div className="space-y-5 text-[#B0B0B0] text-lg leading-relaxed">
          <div className="card-dark rounded-2xl p-6 md:p-8 hover:border-brand-red/20 transition-colors">
            <p>
              Se você é profissional liberal e cobra R$300 por consulta, precisa de 50 clientes pra pagar a mentoria inteira. Se o método trouxer 5 clientes novos por mês vindos do Instagram — e historicamente traz mais — em 10 meses você pagou e está no lucro. Só que o posicionamento e o conteúdo continuam trabalhando pra sempre.
            </p>
          </div>

          <div className="card-dark rounded-2xl p-6 md:p-8 hover:border-brand-red/20 transition-colors">
            <p>
              Se você é empresário e fatura R$1 milhão por ano, uma marca pessoal forte pode representar 10% de aumento em receita — são R$100 mil. R$15.000 pra destrancar R$100 mil é um ROI de quase 7x. Sem contar o que não tem preço: talentos melhores, convites, parcerias, imprensa.
            </p>
          </div>

          <div className="card-dark rounded-2xl p-6 md:p-8 hover:border-brand-red/20 transition-colors">
            <p>
              Em qualquer cenário: R$15.000 é menos do que a maioria gasta em 2-3 meses de tráfego pago que gera cliques — não autoridade, não marca pessoal, não um ativo que fica com você pra sempre. Anúncio para quando você para de pagar. Posicionamento fica.
            </p>
          </div>

          <div className="bg-brand-red/10 border border-brand-red/30 rounded-2xl p-6">
            <p className="text-brand-cream">
              Um único cliente novo por mês, vindo do Instagram de forma orgânica, já justifica o investimento na maioria dos casos. E quando o método está instalado, a tendência não é um cliente. É uma fila.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Guarantee ────────────────────────────────────────────────────────────────

function Guarantee() {
  return (
    <section className="bg-[#111111] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5 text-center">

        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="w-44 h-44 rounded-full border-4 border-brand-red flex flex-col items-center justify-center bg-brand-red/10 glow-red">
              <span className="text-brand-red text-3xl mb-1">✦</span>
              <p className="text-brand-cream text-xs font-bold uppercase tracking-widest leading-snug text-center px-4">
                Garantia<br />Método<br />Instalado
              </p>
            </div>
            <div
              className="absolute -inset-3 rounded-full border border-dashed border-brand-red/30"
              style={{ animation: "spin 20s linear infinite" }}
            />
          </div>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-cream mb-8 leading-tight">
          A Garantia "Método Instalado"
        </h2>

        <div className="space-y-5 text-[#B0B0B0] text-lg leading-relaxed text-left max-w-2xl mx-auto">
          <p>
            Eu entendo o que significa investir R$15.000. Especialmente quando você já tentou outras coisas que não funcionaram.
          </p>
          <p className="text-brand-cream font-semibold">Minha garantia é direta:</p>
          <div className="bg-brand-red/10 border border-brand-red/30 rounded-2xl p-6">
            <p className="text-brand-cream leading-relaxed">
              Se você participar dos 6 encontros, aplicar as tarefas e não tiver resultado mensurável ao final dos 6 meses (crescimento real de seguidores, aumento de alcance ou novas oportunidades vindas do conteúdo), eu continuo te acompanhando gratuitamente até ter. Sem prazo ou custo extra.
            </p>
          </div>
          <p>
            Eu não ganho nada com mentorado parado e sem resultados. Meu resultado é o seu resultado. Se o método não funcionar pra você (aplicando), eu fico até funcionar.
          </p>
        </div>

        <div className="mt-8 card-dark rounded-2xl p-6 max-w-xl mx-auto text-left">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4">Aplicar significa:</p>
          <div className="space-y-3">
            {[
              "Comparecer aos 6 encontros",
              "Publicar ao menos 7 conteúdos por semana durante os 6 meses",
              "Responder os feedbacks dentro de 48 horas",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-[#C0C0C0]">
                <span className="text-brand-red shrink-0">✓</span>
                {item}
              </div>
            ))}
          </div>
          <p className="text-brand-muted text-sm mt-4 text-center">Quem cumpre isso, cresce. Sempre.</p>
        </div>
      </div>
    </section>
  );
}

// ─── For Who ──────────────────────────────────────────────────────────────────

function ForWho() {
  return (
    <section className="bg-brand-bg py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">

          {/* NOT for */}
          <div className="card-dark rounded-3xl p-8">
            <p className="text-brand-muted text-sm font-semibold uppercase tracking-widest mb-8">
              Pra quem NÃO é
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Quem quer terceirizar tudo.",
                  desc: "Eu dou método, roteiro, suporte, revisão. Mas aparecer no conteúdo é com você. Você é o ativo — ninguém pode ser você na câmera.",
                },
                {
                  title: "Quem não pode investir 2 horas por dia.",
                  desc: "Não precisa de 4 horas. Mas menos de 2 horas por dia não dá pra construir autoridade. Se o momento não permite isso, melhor esperar.",
                },
                {
                  title: "Quem está começando do zero.",
                  desc: "Essa mentoria é pra quem já tem uma profissão estabelecida ou um negócio rodando e quer amplificar o que já construiu. Não é pra quem ainda não sabe o que vende.",
                },
                {
                  title: "Quem quer resultado em 7 dias.",
                  desc: "Autoridade se constrói com consistência. Em 6 meses, você vai estar em um lugar completamente diferente. Mas não é mágica — é método aplicado com disciplina.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-[#444] text-lg shrink-0 mt-0.5">✗</span>
                  <div>
                    <p className="font-semibold text-[#777] text-sm">{item.title}</p>
                    <p className="text-brand-muted text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IS for */}
          <div className="bg-brand-red/10 border border-brand-red/30 rounded-3xl p-8">
            <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-8">
              Pra quem É
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Profissionais liberais",
                  desc: "Médicos, nutricionistas, dentistas, advogados, psicólogos, arquitetos, personal trainers, consultores — que são excelentes no que fazem mas invisíveis no Instagram. Que dependem de indicação e querem previsibilidade.",
                },
                {
                  title: "Empresários e donos de negócio",
                  desc: "Restaurantes, lojas, clínicas, escritórios, franquias — que faturam entre R$500K e R$10M e perceberam que o fundador invisível está perdendo mercado pro fundador que aparece.",
                },
                {
                  title: "Qualquer pessoa que já entendeu o jogo",
                  desc: "Que decidiu que não vai mais aceitar ser o segredo mais bem guardado do seu setor.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-brand-red text-lg shrink-0 mt-0.5">✓</span>
                  <div>
                    <p className="font-semibold text-brand-cream text-sm">{item.title}</p>
                    <p className="text-[#A0A0A0] text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-brand-red/20">
              <p className="text-[#A0A0A0] text-sm leading-relaxed italic">
                Em comum entre todos eles: o incômodo de saber que poderiam ser mais reconhecidos do que são. A clareza de que o problema não é competência, é visibilidade. E a disposição pra fazer diferente a partir de agora.
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
    <section className="bg-[#111111] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5 text-center">

        <p className="text-brand-muted text-sm uppercase tracking-widest mb-8">O custo de continuar invisível</p>

        <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-cream leading-tight mb-10">
          Esses 6 meses vão passar de qualquer jeito.
        </h2>

        <p className="text-[#A0A0A0] text-xl leading-relaxed mb-6">
          A pergunta é: daqui a 6 meses, você quer estar no mesmo lugar — postando sem método, dependendo de indicação, vendo gente pior que você lotando a agenda e ganhando espaço?
        </p>

        <p className="text-brand-cream text-xl font-semibold leading-relaxed mb-12">
          Ou quer ser reconhecido? Sendo procurado? Sendo a referência?
        </p>

        <div className="card-dark rounded-2xl p-8 mb-12 text-left space-y-4 text-[#B0B0B0] text-lg leading-relaxed">
          <p>O método existe. O caminho está mapeado. Eu já fiz pra mim — meio milhão de seguidores em menos de um ano. Já instalei em outros profissionais e empresários. Funciona.</p>
          <p className="text-brand-cream font-semibold text-xl text-center">
            A única variável que falta é você decidir que chegou a hora.
          </p>
        </div>

        <CTAButton label="Quero entrar na lista de espera →" className="w-full md:w-auto" />
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section id="lista-de-espera" className="bg-[#0A0505] py-20 md:py-28 border-t border-brand-red/20">
      <div className="max-w-2xl mx-auto px-5 text-center">

        <div className="flex justify-center mb-8">
          <img
            src={chrisPhoto}
            alt="Chris Prado"
            className="w-20 h-20 rounded-full border-2 border-brand-red/50 object-cover"
          />
        </div>

        <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4">Próximo passo</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-cream mb-6 leading-tight">
          Se faz sentido, preencha o formulário e aguarde a lista de espera.
        </h2>

        <p className="text-[#A0A0A0] text-lg leading-relaxed mb-10">
          Assim que possível eu entrarei em contato pra gente conversar, eu entender sua situação e, se fizer sentido pros dois lados, começamos.
        </p>

        <div className="card-dark rounded-3xl p-8 border border-brand-red/20 mb-8 text-left">
          <p className="text-brand-muted text-sm text-center mb-6">
            Mas atenção: Eu só trabalho com quem já chega pronto. Tem um trabalho real e disposição para criar seu posicionamento no Instagram. Meu compromisso é no resultado que iremos gerar juntos. Eu serei muito direto sobre se esse método faz sentido pra você agora ou não.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { label: "Seu nome", type: "text", placeholder: "Nome completo" },
              { label: "Seu email", type: "email", placeholder: "seu@email.com" },
              { label: "Sua profissão / negócio", type: "text", placeholder: "Ex: Nutricionista, Advogado, Dono de clínica…" },
              { label: "Instagram atual (se tiver)", type: "text", placeholder: "@seuperfil" },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-xs text-brand-muted uppercase tracking-widest mb-2">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-brand-cream placeholder:text-brand-muted focus:outline-none focus:border-brand-red/50 transition-colors text-sm"
                />
              </div>
            ))}
          </div>

          <CTAButton label="Entrar na Lista de Espera →" className="w-full text-center" />

          <p className="text-brand-muted text-xs mt-4 text-center">
            Vagas são limitadas.
          </p>
        </div>

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
    const handler = () => setVisible(window.scrollY > 1500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-brand-bg/95 backdrop-blur border-t border-brand-red/20 px-5 py-3">
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
        <meta name="description" content="O programa que instala autoridade, crescimento orgânico e receita no Instagram. 6 meses de acompanhamento direto com Chris Prado." />
        <meta property="og:title" content="Mentoria Método Hábito Viral® — Chris Prado" />
        <meta property="og:description" content="O programa que instala autoridade, crescimento orgânico e receita no Instagram." />
      </Helmet>

      <div className="bg-brand-bg text-brand-cream overflow-x-hidden">
        <Hero />
        <Divider />
        <Pain />
        <Divider />
        <Truth />
        <Divider />
        <Objection />
        <Divider />
        <Story />
        <Divider />
        <Proof />
        <Divider />
        <Program />
        <Divider />
        <WhatYouGet />
        <Divider />
        <PriceJustification />
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
