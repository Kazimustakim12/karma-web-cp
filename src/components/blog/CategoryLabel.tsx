import { cx } from "../../utils/all";

interface Category {
  name: string;
}
const CategoryLabel: React.FC<{ categories?: Category[] }> = ({
  categories,
}) => {
  if (!categories || categories.length === 0) {
    return null;
  }
  return (
    <div className="flex gap-3">
      {categories &&
        categories.slice().map((category, index) => (
          <label
            key={index}
            className={cx(
              "inline-block text-sm  tracking-wider uppercase  text-text-black font-semibold bg-primary-500 py-[4px] px-[8px] rounded-md"
            )}
          >
            {category.name}
          </label>
        ))}
    </div>
  );
};

export default CategoryLabel;
