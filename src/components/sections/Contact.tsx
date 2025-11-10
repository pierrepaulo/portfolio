import Link from "next/link";

import { SectionContainer } from "../ui/section-container";
import { Button } from "../ui/button";

export const Contact = () => {
  return (
    <SectionContainer id="contact" label="contato" title="Vamos conversar">
      <div className="space-y-5">
        <p className="text-foreground/70">
          Estou disponível para novas oportunidades como Desenvolvedor Backend.
          Se você busca alguém focado em qualidade, estabilidade e entregas
          previsíveis, vou gostar de conversar. Entre em contato. Respondo o
          mais breve possível.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button asChild className="">
            <a
              href="mailto:pierresantista@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar email
            </a>
          </Button>

          <Button asChild className="">
            <a
              href="https://www.linkedin.com/in/pierre-paulo-temer-88514a189/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conversar pelo Linkedin
            </a>
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};
