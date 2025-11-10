import { SectionContainer } from "../ui/section-container";

export const AboutMe = () => {
  return (
    <SectionContainer id="about" label="sobre" title="Um pouco sobre mim">
      <p className="tracking-widest text-foreground/70">
        Sou desenvolvedor Backend/Fullstack com foco em backend. Resolvo
        problemas de forma direta: entendo o contexto, separo o que importa e
        entrego soluções simples que funcionam. Comunico com clareza com
        produto, design e QA para alinhar expectativas e evitar retrabalho.
        Trabalho principalmente com Node.js, TypeScript e PostgreSQL, usando
        boas práticas de testes e atenção aos detalhes que impactam segurança e
        estabilidade. Entrego código limpo, previsível e fácil de manter. Assumo
        responsabilidade do início ao fim: acompanho o que foi colocado em
        produção, corrijo rápido quando necessário e deixo padrões claros para o
        time avançar. Meu objetivo é dar tranquilidade em produção e constância
        nas entregas.
      </p>
    </SectionContainer>
  );
};
