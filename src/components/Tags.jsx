import Tag from "./Tag";

function Tags() {
  let states = [false, true, false, false, false, false];

  const handleTag = () => {
    states = states.map((state) => (state = false));
    states[3] = true
    console.log(states);
  };

  return (
    <div className="mt-4">
      <ul className="text-md flex overflow-x-auto text-center font-medium first-letter:text-gray-100">
        <Tag click={handleTag} isActive={states[0]} text="Todo" />
        <Tag click={handleTag} isActive={states[1]} text="Sudaderas" />
        <Tag click={handleTag} isActive={states[2]} text="Camisetas" />
        <Tag click={handleTag} isActive={states[3]} text="Shorts" />
        <Tag click={handleTag} isActive={states[4]} text="Pantalones" />
        <Tag click={handleTag} isActive={states[5]} text="Tenis" />
      </ul>
    </div>
  );
}

export default Tags;
