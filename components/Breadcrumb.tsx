import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-luxury-cream/30 rounded-xl mb-6 flex items-center text-xs text-luxury-green/70 overflow-x-auto whitespace-nowrap scrollbar-none">
      <Link href="/" className="flex items-center gap-1 hover:text-luxury-gold transition-colors font-medium">
        <Home className="w-3.5 h-3.5 text-luxury-gold" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={item.url} className="flex items-center">
            <ChevronRight className="w-3.5 h-3.5 mx-1.5 text-luxury-gold/50 flex-shrink-0" />
            {isLast ? (
              <span className="font-semibold text-luxury-green truncate max-w-[200px] md:max-w-none" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.url} className="hover:text-luxury-gold transition-colors font-medium">
                {item.name}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
