export const Footer = () => {
  return (
    <footer className="col-span-full mt-8 border-t border-white/10 pt-8 text-sm text-foreground/80">
      <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="text-base font-medium text-foreground">
          Obrigado por visitar meu portfólio!
        </p>
        <p>
          Desenvolvido por <span className="font-semibold">Pierre Paulo</span> ·{" "}
          <a
            href="mailto:pierresantista@hotmail.com"
            className="text-primary transition hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            pierresantista@hotmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};
