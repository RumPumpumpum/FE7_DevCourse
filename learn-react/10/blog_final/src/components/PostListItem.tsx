import { Link } from "react-router";
import { format } from "date-fns";
import { readingTime } from "reading-time-estimator";

export default function PostListItem({
  id,
  category,
  title,
  createdAt,
  desc,
  thumbnail,
  thumbnailAvatar,
  writer,
}: Post) {
  const { text } = readingTime(desc, 10); // 1분당, 몇개 단어?
  return (
    <>
      <Link to={`/read/${id}`}>
        <article>
          <img
            src={thumbnail}
            alt={title}
            className="object-cover w-full aspect-[16/9]"
          />
          <div>
            <strong className="w-[73px] h-[26px] bg-[#283A61] text-white text-[12px] sm:text-sm flex items-center justify-center rounded-[3px] mt-[21px] mb-[8px]">
              {category}
            </strong>
            <h3 className="text-lg sm:text-[20px] md:text-[24px] font-bold mb-[12px]">
              {title}
            </h3>
            <p className="text-[#515151]">
              {format(createdAt, "yyyy-MM-dd")} • {text}
            </p>
            <p className="mt-[15px] text-[#434343]">{desc}</p>
            <div className="mt-4 flex items-center gap-[14px]">
              <img
                src={thumbnailAvatar}
                alt={writer}
                className="rounded-s-full max-w-10"
              />
              <strong className="text-sm">{writer}</strong>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}
