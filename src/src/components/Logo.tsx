import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 group ${className}`}>
      <img
        src={logo}
        alt="Kenavid Couture"
        className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-110"
      />
      <div className="hidden sm:flex flex-col leading-none">
        <span className="font-display text-[.8rem] tracking-[0.25em] text-gold">KENAVID</span>
        <span className="font-display text-[10px] tracking-[0.4em] text-muted-foreground">
          COUTURE
        </span>
      </div>
    </Link>
  );
}
