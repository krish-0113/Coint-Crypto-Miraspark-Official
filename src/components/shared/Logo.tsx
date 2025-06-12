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
    <Link to={PATHS.HOME}>
      <div className="flex items-center h-full w-full">
        {/* Logo */}
        <img
          src="/img/mainLogo.png"
          className={classes}
          alt="Company Logo"
        />

        {/* Coin and Digest vertically aligned */}
        <div className="flex flex-col justify-center ml-2 text-white leading-none -space-y-2">
          <div className="flex items-start text-2xl font-bold">
            <span className="text-2xl ">C</span>
            <span>oin</span>
          </div>
          <div className="flex items-start text-2xl font-bold">
            <span className="text-2xl ">D</span>
            <span>igest</span>
          </div>
        </div>
      </div>
    </Link>
  );
};