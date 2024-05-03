import { Link, useParams } from "react-router-dom";
import BlogDetails from "../components/blog/BlogDetails";
import { useQuery } from "@apollo/client";
import { Breadcrumbs } from "@material-tailwind/react";
import { GET_POST_BY_ID } from "../lib/querys";
import SmoothScrolling from "../components/ui/SmoothScroll";
const BlogDetailPage = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_POST_BY_ID, {
    variables: {
      slug: slug,
    },
  });

  if (error) {
    return <div>Error</div>;
  }

  return (
    <SmoothScrolling>
      <div className="">
        {loading ? (
          <div className=" min-h-svh container">
            <BlogDetails loading={loading} />
          </div>
        ) : !loading && data?.post !== null ? (
          <div className="container max-w-[770px] mx-auto mt-10">
            <div className="rounded-xl sticky top-10 z-50 bg-black custom_breadcrumb ">
              <Breadcrumbs
                fullWidth={true}
                className="px-5 py-3 mb-10 rounded-xl bg-black  text-primary-500"
              >
                <Link to={"/"} className="fill-primary-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 fill-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </Link>
                <Link to="/blog">
                  <span className="text-white text-lg">Blogs</span>
                </Link>

                <span className="text-primary-500 text-lg">
                  {data.post.title}
                </span>
              </Breadcrumbs>
            </div>
            <BlogDetails post={data?.post} />
          </div>
        ) : (
          <div className="h-96 text-center flex items-center justify-center flex-col gap-4">
            <p className="text-center text-2xl capitalize ">
              we dont have post of this type
            </p>
            <Link
              to="/blog"
              className="text-xl w-auto rounded-md bg-primary-600 px-3.5 py-2.5  font-semibold text-white shadow-sm hover:text-primary-600 hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Check our Blogs
            </Link>
          </div>
        )}
      </div>
    </SmoothScrolling>
  );
};

export default BlogDetailPage;
