import { cn } from '@/lib/utils';

type ButtonProps = React.ComponentPropsWithRef<'button'>;

export default function Button({
  children,
  type,
  className,
  ref,
  ...props
}: ButtonProps) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        'bg-sky-400 px-4 py-2 rounded-md transition-colors duration-300 ease-in-out active:bg-sky-700 hover:bg-sky-400/80',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
