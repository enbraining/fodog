'use client';

import { allPosts } from '@/.contentlayer/generated';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import {
  IcRoundKeyboardArrowLeft,
  IcRoundKeyboardArrowRight,
  IcRoundKeyboardDoubleArrowLeft,
  IcRoundKeyboardDoubleArrowRight,
  MingcuteGithubFill,
  MingcuteSocialXLine,
} from './components/Icons';
import { config } from './config';

export default function Home() {
  const getPosts = (categories: string[]) => {
    return allPosts
      .filter((post) =>
        currentCategory.length != 0
          ? categories.includes(post.category!)
          : true,
      )
      .sort(
        (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
      );
  };

  const [posts, setPosts] = useState<any[]>([]); // 특정 필터에 맞는 포스트
  const [pagePosts, setpagePosts] = useState<any[]>([]); // 한 페이지 당 표시되는 포스트 10개

  const [categories, setCategories] = useState<string[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState<number[]>([]);

  const onPageDown = useCallback(() => {
    if (currentPage != 1) setCurrentPage(currentPage - 1);
  }, [currentPage]);

  const onPageUp = useCallback(() => {
    if (currentPage != pages.length) setCurrentPage(currentPage + 1);
  }, [currentPage, pages.length]);

  useEffect(() => {
    setpagePosts(
      getPosts(currentCategory).slice(currentPage * 10 - 10, currentPage * 10),
    );
    setPosts(getPosts(currentCategory));
  }, [currentCategory, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [currentCategory]);

  useEffect(() => {
    setPages(Array.from({ length: posts.length / 10 + 1 }, (v, i) => i + 1));
  }, [posts]);

  useEffect(() => {
    setCategories([
      ...new Set(allPosts.map((post) => post.category)),
    ] as string[]);
  }, []);

  return (
    <main>
      <div className="min-h-[85vh]">
        <div className="mb-8">
          <h1
            className="text-xl font-light"
            dangerouslySetInnerHTML={{
              __html: config.bio,
            }}
          ></h1>
          <div className="flex gap-x-2 mt-2">
            <Link href={config.githubLink}>
              <MingcuteGithubFill scope={20} />
            </Link>
            <Link href={config.xLink}>
              <MingcuteSocialXLine scope={20} />
            </Link>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-6 lg:divide-x divide-none">
          <div className="grid gap-y-2 lg:col-span-2 col-span-1 lg:order-1 order-2">
            {pagePosts.map((post) => (
              <Link
                href={`/blog/${post._id}`}
                key={post._id}
                className="bg-neutral-300 px-4 py-4 duration-200 items-center gap-x-2 hover:bg-neutral-200 rounded-lg"
              >
                <div className="mb-2">
                  <h2 className="text-neutral-100 rounded-2xl text-sm bg-neutral-200 inline py-1 px-3">
                    {post.category}
                  </h2>
                </div>
                <h1 className="font-medium text-lg">{post.title}</h1>
                <p className="text-sm">
                  {dayjs(post.pubDate).format('YYYY년 MM월 DD일')}
                </p>
              </Link>
            ))}
            <div className="rounded-lg bg-neutral-300 flex">
              <div className="m-auto flex font-medium items-center font-mono my-1">
                <div
                  onClick={() => setCurrentPage(1)}
                  className="p-1 hover:bg-neutral-700 rounded-xl"
                >
                  <IcRoundKeyboardDoubleArrowLeft scope={20} />
                </div>
                <div
                  onClick={onPageDown}
                  className="p-1 hover:bg-neutral-700 rounded-xl"
                >
                  <IcRoundKeyboardArrowLeft scope={20} />
                </div>
                <div className="flex mx-2">
                  {pages
                    .slice(
                      currentPage == 1 ? currentPage - 1 : currentPage - 2,
                      currentPage == 1 ? currentPage + 4 : currentPage + 3,
                    )
                    .map((page) => (
                      <p
                        className="hover:bg-neutral-700 rounded-xl px-2 py-1 text-sm"
                        onClick={() => {
                          setCurrentPage(page);
                        }}
                        key={page}
                      >
                        {page}
                      </p>
                    ))}
                </div>
                <div
                  onClick={onPageUp}
                  className="p-1 hover:bg-neutral-700 rounded-xl"
                >
                  <IcRoundKeyboardArrowRight scope={20} />
                </div>
                <div
                  onClick={() => setCurrentPage(pages.length)}
                  className="p-1 hover:bg-neutral-700 rounded-xl"
                >
                  <IcRoundKeyboardDoubleArrowRight scope={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 lg:order-2 order-1">
            <div className="bg-neutral-300 rounded-xl p-4">
              <h1 className="mb-4 font-medium lg:flex hidden">카테고리</h1>
              {categories.map(
                (value, index) =>
                  currentCategory && (
                    <div
                      key={index}
                      className={`${
                        currentCategory.includes(value) &&
                        'bg-white text-slate-500'
                      } text-neutral-100 text-sm inline-flex mr-1 mb-1 py-1 px-3 rounded-2xl bg-neutral-200 hover:bg-white duration-300`}
                      onClick={() => {
                        currentCategory.includes(value)
                          ? setCurrentCategory(
                              currentCategory.filter(
                                (select) => select != value,
                              ),
                            )
                          : setCurrentCategory([...currentCategory, value]);
                      }}
                    >
                      <p>{value}</p>
                    </div>
                  ),
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <Link
          href={'https://github.com/enbraining/fodog'}
          className="text-sm flex gap-x-1"
        >
          Powered by{' '}
          <div className="text-indigo-500 hover:text-indigo-300">
            {config.licenceTitle}
          </div>
        </Link>
      </div>
    </main>
  );
}
