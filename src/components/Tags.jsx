import Tag from "./Tag";

function Tags() {

  return (
    <div className="mt-4">
      <ul className="text-md flex overflow-x-auto text-center font-medium first-letter:text-gray-100">
        <Tag>Todo</Tag>
        <Tag>Sudaderas</Tag>
        <Tag isActive>Pantalones</Tag>
        <Tag>Shorts</Tag>
        <Tag>Camisetas</Tag>
        <Tag>Tennis</Tag>
      </ul>
    </div>
  );
}

export default Tags;
