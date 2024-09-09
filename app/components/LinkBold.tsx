import Link from 'next/link';

export default function LinkBold({
  children,
  href,
}: {
  children: any;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="font-black text-3xl hover:text-black duration-300"
    >
      {children}
    </Link>
  );
}
