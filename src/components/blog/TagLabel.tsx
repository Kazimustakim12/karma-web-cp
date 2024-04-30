import { cx } from "../../utils/all";

type Tags = {
  name: string;
  slug: string;
};

export default function TagLabel({
  tags,
  className,
}: {
  tags: Array<Tags>;
  className?: string;
}) {
  return (
    <div className="flex gap-2">
      {tags &&
        tags.slice(0, 2).map((tag, index) => (
          <label
            key={index}
            className={cx(
              "inline-block text-xs  tracking-wider uppercase  text-gray-400 font-semibold ",
              className
            )}
          >
            #{tag.name}
          </label>
        ))}
    </div>
  );
}
