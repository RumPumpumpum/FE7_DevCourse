import { Link, useParams } from "react-router";
import { usePostStore } from "../stores/postStore";
import PostRelativeLoader from "./PostRelativeLoader";
import { useEffect } from "react";

export default function PostRelative() {
  const params = useParams();
  const posts = usePostStore((state) => state.posts);
  const fetchPosts = usePostStore((state) => state.fetchPosts);
  const isLoadingPosts = usePostStore((state) => state.isLoadingPosts);

  useEffect(() => {
    fetchPosts(`posts?id_ne=${params.id}`);
    return () => {
      usePostStore.setState({ posts: [], isLoadingPosts: true, error: "" });
    };
  }, [fetchPosts, params.id]);

  if (isLoadingPosts) return <PostRelativeLoader />;
  return (
    <>
      {/* 관련 게시물 */}
      <section className="max-w-[800px] mx-auto mb-10">
        <h3 className="text-[26px] sm:text-[34px] md:text-[30px] font-bold mb-[20px]">
          Recommand Reading
        </h3>
        <ul className="[&>li]:mb-[30px]">
          {posts?.map((post) => (
            <li key={post.id}>
              <Link to={`/read/${post.id}`}>
                <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[34px]">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="rounded-md sm:max-w-[250px] w-[185px] h-[160px]"
                  />
                  <div>
                    <h4 className="text-lg sm:text-[22px] font-bold mb-2">
                      {post.title}
                    </h4>
                    <p className="text-base sm:text-lg text-[#4b4b4b] line-clamp-3">
                      {post.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
