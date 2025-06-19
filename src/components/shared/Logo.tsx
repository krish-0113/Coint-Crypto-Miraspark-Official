import { Link } from 'react-router-dom';
import { PATHS } from '@/constants/page-paths';
import { cn } from '@/lib/utils/cn';

export const Logo = ({ className }: { className?: string }) => {
  const classes = cn(
    className,
    'object-contain w-12 h-12',
    'brightness-110 contrast-125',
    'border-4 border-white rounded-full p-1'
  );

  return (
    <Link to={PATHS.HOME} className="flex items-center h-12">
    {/* Logo Image with thicker border */}
    <img
      src="/img/mainLogo.png"
      alt="CoinDigest Logo"
      className={cn(
        "w-12 h-12 object-contain rounded-full border-2 border-white shadow-lg brightness-110 contrast-125",
        className
      )}
    />
  
    {/* CoinDigest brand text - white and elegant */}
  <span className="ml-1 text-white text-4xl font-bold tracking-tight drop-shadow">
    CoinDigest
  </span>
  
  </Link>
  );
};