import { Card } from "flowbite-react";
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";

type blogInfo = {
  date: string;
  title: string;
  content: string;
  slug: string;
  author: {
    node: {
      name: string;
      avatar: {
        url: string;
      };
    };
  };
  featuredImage: {
    node: {
      altText: string;
      sourceUrl: string;
    };
  };
};

function BlogCard({ blogInfo }: { blogInfo: blogInfo }) {
  const {
    date,
    title,
    content,
    slug,
    author: {
      node: {
        name: authorName,
        avatar: { url },
      },
    },
    featuredImage,
  } = blogInfo;

  return (
    <Card
      className="max-w-sm"
      imgAlt={featuredImage?.node?.altText}
      imgSrc={featuredImage?.node?.sourceUrl}
    >
      <Link to={`/blog/${slug}`}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </Link>
      <div className="flex ">
        <span>{date}</span>
        <span>{authorName}</span>
      </div>
      <p
        className="font-normal text-gray-700 dark:text-gray-400"
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
    </Card>
  );
}
export default BlogCard;
