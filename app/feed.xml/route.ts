import RSS from 'rss';
import { allPosts } from '../../.contentlayer/generated';

export async function GET() {
  const feed = new RSS({
    title: 'Fodo Develop',
    feed_url: 'https://fodo.dev/feed.xml',
    site_url: 'https://fodo.dev',
  });

  if (allPosts) {
    allPosts.map((post) => {
      feed.item({
        title: post.title,
        description: post.title,
        url: `https://fodo.dev/blog/${post._id}`,
        date: post.pubDate,
      });
    });
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  });
}
