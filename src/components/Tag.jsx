function Tag({ isActive = false, children }) {
  return (
    <li
      className={`mr-2 inline-block rounded-3xl bg-gray-800 py-2 px-3 text-white ${
        isActive ? "bg-slate-900 text-white" : "bg-gray-100 text-black"
      } cursor-pointer`}
    >
      {children}
    </li>
  );
}

export default Tag;

// tags.forEach(tag => {
//   tag.addEventListener("click", () => {
//     if (isActive) {
//       setActive(false)
//     } else {
//       tags.forEach((tag) => setActive(true))
//     }
//   })
// });
