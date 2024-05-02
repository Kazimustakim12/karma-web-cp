import { cx } from "../../utils/all";
interface Tag {
  name: string;
}
const TagLabel: React.FC<{ tags: Tag[] }> = ({ tags }) => {
  return (
    <div className="flex gap-2">
      {tags &&
        tags.slice(0, 2).map((tag, index) => (
          <label
            key={index}
            className={cx(
              "inline-block text-xs  tracking-wider uppercase  text-gray-400 font-semibold "
            )}
          >
            #{tag.name}
          </label>
        ))}
    </div>
  );
};

export default TagLabel;
