import Image from "next/image";
import Link from "next/link";

import { Icon } from "@iconify/react";

import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";

type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pierre-paulo-temer-88514a189/",
    icon: "mdi:linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/pierrepaulo",
    icon: "mdi:github",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5533991993858",
    icon: "mdi:whatsapp",
  },
];

const SocialIconLink = ({ icon, href, label }: SocialLink) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex size-12 items-center justify-center rounded-full border border-white/15 text-foreground transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
    >
      <Icon icon={icon} className="size-5" aria-hidden="true" />
    </Link>
  );
};

export const ProfileCard = () => {
  return (
    <Card className="overflow-hidden border-white/10 bg-card/85 p-0 text-center shadow-xl shadow-black/40 transition duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-primary/30 lg:hover:-translate-y-2 lg:hover:shadow-primary/40">
      <div className="flex flex-col items-center">
        <div className="flex w-full flex-col items-center justify-center bg-linear-to-b from-primary via-primary/90 to-[#0a1c49] px-8 py-12 text-primary-foreground">
          <Image
            src="/images/avatar/pierre.png"
            alt="Foto de perfil de Pierre Paulo"
            width={220}
            height={220}
            priority
            className="h-40 w-40 object-contain drop-shadow-[0_18px_30px_rgba(4,6,26,0.75)]"
          />
        </div>

        <div className="flex w-full flex-col items-center gap-6 px-8 py-8 text-foreground">
          <div className="space-y-1">
            <p className="text-2xl font-semibold">Pierre Paulo</p>
            <p className="text-sm uppercase tracking-[0.35em] text-foreground/60">
              Desenvolvedor Backend
            </p>
          </div>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <SocialIconLink key={social.label} {...social} />
            ))}
          </div>

          <Button asChild>
            <a href="">
              Download CV <Icon icon="mdi:folder-download-outline" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};
