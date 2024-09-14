import { allPosts } from '@/.contentlayer/generated';
import { MaterialSymbolsArrowLeftAltRounded } from '@/app/components/Icons';
import 'highlight.js/styles/a11y-dark.css';
import 'katex/dist/katex.min.css';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import '../../styles/markdown.css';

export function generateStaticParams() {
  return allPosts.map((post) => post._id);
}

export default function Page({ params }: { params: { slug: string[] } }) {
  const post = allPosts.find((post) => post._id == params.slug.join('/'));

  return (
    <main>
      <title>{`Fodo Develop | ${post?.title}`}</title>
      <Link href={'/'}>
        <MaterialSymbolsArrowLeftAltRounded className="mb-5" scope={25} />
      </Link>
      <h1 className="mb-8 font-semibold text-xl">{post?.title}</h1>
      <ReactMarkdown
        className={'markdown-body'}
        rehypePlugins={[rehypeSlug, rehypeHighlight, rehypeKatex]}
        remarkPlugins={[remarkGfm, remarkMath]}
      >
        {post?.body.raw}
      </ReactMarkdown>
    </main>
  );
}
