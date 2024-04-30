import { cx } from "../../utils/all";

type categories = {
  name: string;
  slug: string;
};

export default function CategoryLabel({
  categories,
  className,
}: {
  categories: Array<categories>;
  className?: string;
}) {
  return (
    <div className="flex gap-3">
      {categories &&
        categories.slice().map((category, index) => (
          <label
            key={index}
            className={cx(
              "inline-block text-sm  tracking-wider uppercase  text-text-black font-semibold bg-primary-500 py-[4px] px-[8px] rounded-md",
              className
            )}
          >
            {category.name}
          </label>
        ))}
    </div>
  );
}
