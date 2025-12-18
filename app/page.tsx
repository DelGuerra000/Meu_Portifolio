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
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Adeildo Cunha dos Santos</p>
        </div>
      </footer>
    </>
  );
}
