import { Link } from 'react-router-dom';
import { PATHS } from '@/constants/page-paths';
import { cn } from '@/lib/utils/cn';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link to={PATHS.HOME} className="flex items-center h-12  mr-auto">
      {/* Logo Image with white border only */}
      <img
        src="/img/mainLogo.png"
        alt="CoinDigest Logo"
        className={cn(
          "w-12 h-12 sm:w-12 sm:h-12 object-contain rounded-full border-2 border-white shadow-lg brightness-110 contrast-125 transition-all duration-300",
          className
        )}
      />
      
      {/* CoinDigest brand text - white and elegant */}
      <span className="ml-1 text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight drop-shadow transition-all duration-300 hover:text-cyan-400 select-none">
        CoinDigest
      </span>
    </Link>
  );
};
