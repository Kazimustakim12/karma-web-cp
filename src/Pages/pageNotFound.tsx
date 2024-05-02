import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="grid h-100% place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-white">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary-500 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-white">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-primary-600 hover:bg-black hover:text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
