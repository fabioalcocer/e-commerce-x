import Tag from "./Tag";

function Tags() {
  return (
    <div className="mt-4">
      <ul className="text-md flex overflow-x-auto text-center font-medium first-letter:text-gray-100">
        <Tag isActive={true} text="Todo" />
        <Tag isActive={false} text="Sudaderas" />
        <Tag isActive={false} text="Camisetas" />
        <Tag isActive={false} text="Shorts" />
        <Tag isActive={false} text="Pantalones" />
        <Tag isActive={false} text="Tenis" />
      </ul>
    </div>
  );
}

export default Tags;
