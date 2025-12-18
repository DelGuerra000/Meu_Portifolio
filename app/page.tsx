import ProjectCarousel from "./components/ProjectCarousel";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="name">Adeildo Cunha dos Santos</h1>
          <p className="role">Estagiário / Trainee / Desenvolvedor Júnior</p>
          <p className="location">São Paulo – SP</p>
        </div>
      </header>

      <main className="container">
        <section className="section about">
          <h2 className="section-title">Apresentação</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Profissional em transição de carreira, graduado em Análise e
            Desenvolvimento de Sistemas e cursando Engenharia de Software. Possuo
            experiência administrativa prévia que consolidou minha capacidade de
            organização, análise de processos e atenção aos detalhes. Busco
            aplicar essas competências, somadas ao meu conhecimento técnico, no
            desenvolvimento de soluções web eficientes e escaláveis.
          </p>
        </section>

        <section className="section skills">
          <h2 className="section-title">Tecnologias</h2>
          <div className="skills-grid">
            <span className="skill-tag">HTML5</span>
            <span className="skill-tag">CSS3</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">SQL</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">GitHub</span>
            <span className="skill-tag">Figma</span>
          </div>
        </section>

        <section className="section projects">
          <h2 className="section-title">Projetos</h2>
          <p className="mb-8 text-gray-400">
            Confira alguns dos meus principais projetos. Deslize para ver mais.
          </p>

          <ProjectCarousel />
        </section>

        <section className="section education">
          <h2 className="section-title">Formação</h2>
          <ul className="education-list">
            <li>
              <strong className="text-white">Engenharia de Software</strong> - Cursando
            </li>
            <li>
              <strong className="text-white">Análise e Desenvolvimento de Sistemas</strong> -
              Concluído
            </li>
          </ul>
        </section>

        <section className="section objective">
          <h2 className="section-title">Objetivo Profissional</h2>
          <p className="text-lg text-gray-300">
            Busco uma oportunidade como{" "}
            <strong className="text-blue-400">
              Estagiário, Trainee ou Desenvolvedor Júnior
            </strong>{" "}
            em Desenvolvimento de Software/Web. Tenho disponibilidade imediata e
            muita vontade de aprender e contribuir com a equipe.
          </p>
        </section>
        <section className="section contact">
          <h2 className="section-title">Contato</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Top Item - Phone - Spans 2 columns on desktop to be centered/top of pyramid */}
            <a
              href="tel:+5511913985438"
              className="md:col-span-2 md:w-1/2 md:justify-self-center w-full bg-white/5 p-8 rounded-3xl border border-white/10 text-center hover:bg-white/10 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 group flex flex-col items-center justify-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1 text-lg">Telefone</h3>
                <p className="text-gray-400 text-sm font-medium group-hover:text-blue-300 transition-colors">+55 11 91398-5438</p>
              </div>
            </a>

            {/* Bottom Left - LinkedIn */}
            <a
              href="mailto:adeildo.cunha.2025@gmail.com"
              className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center hover:bg-white/10 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 group flex flex-col items-center justify-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1 text-lg">Email / LinkedIn</h3>
                <p className="text-gray-400 text-sm font-medium break-all group-hover:text-blue-300 transition-colors">adeildo.cunha.2025@gmail.com</p>
              </div>
            </a>

            {/* Bottom Right - GitHub */}
            <a
              href="https://github.com/DelGuerra000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center hover:bg-white/10 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 group flex flex-col items-center justify-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1 text-lg">GitHub</h3>
                <p className="text-gray-400 text-sm font-medium group-hover:text-blue-300 transition-colors">@DelGuerra000</p>
              </div>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Adeildo Cunha dos Santos</p>
        </div>
      </footer>
    </>
  );
}
