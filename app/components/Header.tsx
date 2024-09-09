import Link from 'next/link';
import { config } from '../config';

export default function Header() {
  return (
    <header className="mb-8 flex">
      <Link
        href={'/'}
        className="font-light flex gap-x-1"
        dangerouslySetInnerHTML={{
          __html: config.title,
        }}
      ></Link>
    </header>
  );
}
