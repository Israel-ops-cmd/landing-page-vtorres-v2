import Image from "next/image";
import { Counter } from "@/components/Counter";
import { FillText } from "@/components/FillText";
import { Gallery, type Work } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { IconArrow, IconBuilding, IconCalendar, IconHelmet, IconPin, IconWhatsApp } from "@/components/Icons";
import { Motion } from "@/components/Motion";
import { Strips } from "@/components/Strips";
import logo from "@/assets/logo.webp";
import calcamento from "@/assets/obras/calcamento-brejinho.webp";
import portico from "@/assets/obras/portico-brejinho.webp";
import prefeitura from "@/assets/obras/prefeitura-curral-de-cima.webp";
import quadra from "@/assets/obras/quadra-colegio-over.webp";
import { ADDRESS, DEFAULT_MESSAGE, INSTAGRAM_URL, MAPS_QUERY, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/site";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4";

const stats = [
  { icon: IconCalendar, value: 4, prefix: "", label: "anos de mercado" },
  { icon: IconBuilding, value: 100, prefix: "+", label: "obras entregues" },
  { icon: IconPin, value: 30, prefix: "+", label: "municípios atendidos" },
  { icon: IconHelmet, value: 1, prefix: "", label: "engenheiro do início ao fim" },
];

const works: Work[] = [
  {
    title: "Prefeitura Municipal de Curral de Cima",
    place: "Curral de Cima, PB",
    text: "Sede nova, da fundação ao acabamento em pedra.",
    image: prefeitura,
    alt: "Fachada da Prefeitura Municipal de Curral de Cima, com pedra natural, vidro e marquise, construída pela V Torres",
  },
  {
    title: "Pórtico de entrada de Brejinho",
    place: "Brejinho, RN",
    text: "A primeira coisa que quem chega na cidade vê.",
    image: portico,
    alt: "Pórtico de boas-vindas na entrada de Brejinho, construído pela V Torres",
  },
  {
    title: "Quadra poliesportiva do Colégio Over",
    place: "",
    text: "Cobertura metálica e piso pintado pronto para jogo.",
    image: quadra,
    alt: "Quadra poliesportiva coberta do Colégio Over com piso pintado, obra da V Torres",
  },
  {
    title: "Calçamento e calçada em Brejinho",
    place: "Brejinho, RN",
    text: "Rua pavimentada e calçada acessível.",
    image: calcamento,
    alt: "Calçada em bloco intertravado e meio-fio ao lado de rua asfaltada em Brejinho, obra da V Torres",
  },
];

const services = [
  {
    title: "Obras para prefeituras e órgãos públicos",
    text: "Praças, quadras, escolas, pórticos e calçamento, com toda a papelada da licitação em dia e a fiscalização acompanhando de perto.",
    image: portico,
    alt: "Pórtico de entrada de Brejinho",
  },
  {
    title: "Construção completa para empresas e famílias",
    text: "Você entrega o terreno e recebe a obra pronta para usar. Projeto, orçamento, compra de material e mão de obra ficam por nossa conta.",
    image: quadra,
    alt: "Quadra coberta do Colégio Over",
  },
  {
    title: "Reformas grandes sem parar sua rotina",
    text: "Reformamos prédios comerciais e públicos por etapas, com prazo de cada fase combinado antes de começar.",
    image: prefeitura,
    alt: "Prefeitura de Curral de Cima",
  },
];

const differentials = [
  {
    title: "Fala direto com o engenheiro.",
    text: "Nada de recado passando por três pessoas. O responsável pela sua obra atende o seu WhatsApp.",
  },
  {
    title: "Prazo escrito no contrato.",
    text: "Montamos o cronograma antes de começar e mostramos o andamento de cada etapa.",
  },
  {
    title: "Orçamento fechado, sem aditivo surpresa.",
    text: "Você aprova o custo antes. Se algo mudar, conversamos antes de gastar um real a mais.",
  },
  {
    title: "Acabamento conferido peça por peça.",
    text: "Só entregamos a chave depois de revisar tudo com você.",
  },
];

const clients = [
  { name: "Prefeitura Municipal de Curral de Cima", work: "Sede nova da prefeitura", image: prefeitura },
  { name: "Prefeitura de Brejinho", work: "Pórtico de entrada e calçamento", image: portico },
  { name: "Colégio Over", work: "Quadra poliesportiva coberta", image: quadra },
];

const steps = [
  { title: "Visita técnica", text: "O engenheiro vai até o terreno ou o prédio e entende o que você precisa." },
  { title: "Orçamento fechado", text: "Você recebe o valor de tudo, por etapa, antes de assinar." },
  { title: "Obra com cronograma", text: "Cada fase tem data. Você acompanha pelo WhatsApp com fotos." },
  { title: "Entrega revisada", text: "Conferimos o acabamento junto com você antes de entregar a chave." },
];

export default function Home() {
  return (
    <>
      <Motion />
      <Header />

      <main>
        {/* HERO */}
        <section id="inicio" className="hero">
          <div className="hero-bg" aria-hidden="true">
            <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={prefeitura.src}>
              <source src={HERO_VIDEO} type="video/mp4" />
            </video>
            <div className="hero-shade" />
          </div>

          <div className="hero-inner">
            <div className="hero-copy">
              <div className="trust anim" style={{ "--d": "0.05s" } as React.CSSProperties}>
                {[prefeitura, portico, quadra].map((img, i) => (
                  <span key={i} className={`trust-avatar a${i + 1}`}>
                    <Image src={img} alt="" width={80} height={80} />
                  </span>
                ))}
                <span className="trust-pill">Obras entregues para prefeituras do RN e da PB</span>
              </div>

              <h1 className="hero-title">
                <span className="line l1">Sua obra pronta no prazo,</span>
                <span className="line l2">
                  sem surpresa no <em>orçamento.</em>
                </span>
              </h1>

              <p className="hero-sub anim" style={{ "--d": "0.32s" } as React.CSSProperties}>
                Construímos e reformamos prédios públicos, escolas, quadras e casas em Natal, no interior do RN e na Paraíba. Você
                sabe quanto vai gastar antes da primeira parede subir, e acompanha tudo direto com o engenheiro.
              </p>

              <a
                className="btn btn-primary hero-cta anim pulse"
                style={{ "--d": "0.44s" } as React.CSSProperties}
                href={whatsappLink(DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsApp className="btn-icon" />
                Pedir orçamento no WhatsApp
              </a>
            </div>

            <div className="hero-visual anim" style={{ "--d": "0.2s" } as React.CSSProperties}>
              <Strips
                image={prefeitura}
                alt="Prefeitura Municipal de Curral de Cima, obra entregue pela V Torres"
                sizes="(max-width: 900px) 0px, 40vw"
                priority
                className="hero-strips"
              />
              <a href="#obras" className="hero-visual-tag">
                Prefeitura de Curral de Cima
                <IconArrow className="tag-icon" />
              </a>
            </div>
          </div>

          <ul className="hero-stats">
            {stats.map((s, i) => (
              <li key={s.label} className="anim" style={{ "--d": `${0.5 + i * 0.08}s` } as React.CSSProperties}>
                <s.icon className="stat-icon" />
                <span className="stat-value">
                  <Counter to={s.value} prefix={s.prefix} delay={480 + i * 90} duration={1500 + i * 80} />
                </span>
                <span className="stat-label">{s.label}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* OBRAS */}
        <Gallery works={works}>
          <h2 className="title-xl" data-reveal>
            Obra que a gente fez, você pode ir lá ver.
          </h2>
          <p className="lead" data-reveal>
            Cada foto aqui é obra nossa, entregue e funcionando.
          </p>
          <a
            className="btn btn-dark"
            data-reveal
            href={whatsappLink("Olá, vi as obras no site da V Torres e quero uma obra assim.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero uma obra assim
          </a>
        </Gallery>

        {/* SERVIÇOS */}
        <section id="servicos" className="section services dark">
          <div className="container">
            <div className="services-head">
              <h2 className="title-xl" data-reveal>
                Do projeto à chave na mão, a gente cuida de tudo.
              </h2>
            </div>
            <div className="services-grid">
              {services.map((s, i) => (
                <article key={s.title} className={`service service-${i + 1}`} data-reveal>
                  <div className="service-media">
                    <Image src={s.image} alt={s.alt} sizes="(max-width: 900px) 100vw, 50vw" placeholder="blur" />
                  </div>
                  <div className="service-body">
                    <span className="service-num">0{i + 1}</span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <a
                      className="link-arrow"
                      href={whatsappLink(`Olá, quero falar sobre: ${s.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Falar sobre esse serviço
                      <IconArrow className="tag-icon" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section id="diferenciais" className="section differentials light">
          <div className="container diff-layout">
            <div className="diff-head">
              <FillText as="h2" className="title-xl" text="Você não vai precisar correr atrás da gente." />
            </div>
            <div className="diff-grid">
              {differentials.map((d, i) => (
                <article key={d.title} className={`diff diff-${i + 1}`} data-reveal>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENTES */}
        <section id="clientes" className="section clients dark">
          <div className="container">
            <h2 className="title-xl" data-reveal>
              Prefeitura e escola não arriscam com obra. Elas escolheram a V Torres.
            </h2>
            <div className="clients-grid">
              <div className="client-stat" data-reveal>
                <strong>
                  <Counter to={30} prefix="+" />
                </strong>
                <span>municípios atendidos em 4 anos, com mais de 100 obras entregues.</span>
              </div>
              {clients.map((c, i) => (
                <figure key={c.name} className={`client client-${i + 1}`} data-reveal>
                  <div className="client-media">
                    <Image src={c.image} alt={`${c.work}, obra da V Torres para ${c.name}`} sizes="(max-width: 900px) 100vw, 33vw" placeholder="blur" />
                  </div>
                  <figcaption>
                    <strong>{c.name}</strong>
                    <span>{c.work}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="section about light">
          <div className="container about-layout">
            <div className="about-media">
              <Strips
                image={quadra}
                alt="Quadra poliesportiva coberta do Colégio Over, obra da V Torres"
                count={4}
                sizes="(max-width: 900px) 100vw, 45vw"
                className="about-strips"
              />
            </div>
            <div className="about-copy">
              <h2 className="title-xl" data-reveal>
                Uma construtora de Natal que responde pelo que constrói.
              </h2>
              <FillText
                className="about-text"
                text="A V Torres é de Natal, com escritório no Alecrim, e trabalha com uma ideia simples: obra boa é obra que termina no prazo e no valor combinado. Atendemos prefeituras, empresas e famílias no Rio Grande do Norte e na Paraíba, sempre com engenheiro acompanhando de perto e prestação de contas clara em cada etapa."
              />
              <ol className="timeline" data-progress="view">
                <span className="timeline-line" aria-hidden="true" />
                {steps.map((s, i) => (
                  <li key={s.title} style={{ "--t": (i + 0.5) / steps.length } as React.CSSProperties}>
                    <strong>{s.title}</strong>
                    <span>{s.text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ONDE ESTAMOS */}
        <section id="onde-estamos" className="section location dark">
          <div className="container location-layout">
            <div className="location-copy">
              <h2 className="title-xl" data-reveal>
                Venha tomar um café com a gente no Alecrim.
              </h2>
              <dl className="location-info" data-reveal>
                <div>
                  <dt>Endereço</dt>
                  <dd>{ADDRESS}</dd>
                </div>
                <div>
                  <dt>Horário</dt>
                  <dd>Segunda a sexta, das 8h às 17h</dd>
                </div>
                <div>
                  <dt>WhatsApp</dt>
                  <dd>
                    <a href={whatsappLink(DEFAULT_MESSAGE)} target="_blank" rel="noopener noreferrer">
                      {WHATSAPP_DISPLAY}
                    </a>
                  </dd>
                </div>
              </dl>
              <a
                className="btn btn-outline"
                data-reveal
                href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir no mapa
              </a>
            </div>
            <div className="map" data-reveal>
              <iframe
                title="Mapa do escritório da V Torres no Alecrim, Natal"
                src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* CHAMADA FINAL */}
        <section className="final" data-progress="view">
          <div className="final-mask">
            <Image src={calcamento} alt="" fill sizes="100vw" className="final-img" placeholder="blur" />
            <div className="final-shade" />
            <div className="container final-copy">
              <h2 className="title-xxl">Conte sua obra hoje e receba o orçamento sem compromisso.</h2>
              <p className="lead">
                Mande fotos, a planta ou só a ideia pelo WhatsApp. O engenheiro responde e marca a visita.
              </p>
              <a
                className="btn btn-primary pulse"
                href={whatsappLink("Olá, quero agendar uma visita da V Torres para minha obra.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsApp className="btn-icon" />
                Agendar visita pelo WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Image src={logo} alt="Logo da V Torres Construtora e Engenharia" width={72} height={63} />
            <p>V Torres Construtora e Engenharia. Construção e reforma em Natal, no RN e na Paraíba.</p>
          </div>
          <nav className="footer-nav" aria-label="Rodapé">
            <a href="#obras">Obras</a>
            <a href="#servicos">Serviços</a>
            <a href="#diferenciais">Por que a V Torres</a>
            <a href="#clientes">Clientes</a>
            <a href="#onde-estamos">Onde estamos</a>
          </nav>
          <div className="footer-contact">
            <a href={whatsappLink(DEFAULT_MESSAGE)} target="_blank" rel="noopener noreferrer">
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram @v.torresconstrutora
            </a>
            <span>{ADDRESS}</span>
          </div>
        </div>
        <div className="container footer-bottom">© 2026 V Torres Construtora. Todos os direitos reservados.</div>
      </footer>

      <a
        className="wa-float"
        href={whatsappLink(DEFAULT_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir orçamento no WhatsApp"
      >
        <IconWhatsApp />
        <span>Pedir orçamento</span>
      </a>
    </>
  );
}
