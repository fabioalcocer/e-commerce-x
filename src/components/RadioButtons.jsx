import black from "../assets/black.webp";
import red from "../assets/red.webp";
import gray from "../assets/gray.webp";

function RadioButtons({ refImg }) {
  const arraysImages = [black, red, gray];

  const handleColors = (e) => {
    console.log(e.target.value);

    arraysImages.map((i) => {
      if (i.indexOf(e.target.value) !== -1) {
        console.log(i);
        refImg.current.src = i;
      }
    });

    if(e.target.value === "blue") {
      refImg.current.src = "https://res.cloudinary.com/daobmfotr/image/upload/v1657676381/e-commerce-x/blue_dktsgj.webp"
    }
  };

  return (
    <div className="flex justify-start gap-2">
      <div className="flex items-center">
        <input
          onClick={handleColors}
          id="slate-radio"
          type="radio"
          value="gray"
          name="colored-radio"
          className="h-5 w-5 border-gray-300 bg-gray-600 text-gray-700 focus:ring-2 focus:ring-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
        />
      </div>
      <div className="flex items-center">
        <input
          onClick={handleColors}
          id="red-radio"
          type="radio"
          value="red"
          name="colored-radio"
          className="h-5 w-5 border-gray-300 bg-red-700 text-red-700 focus:ring-2 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-red-600"
        />
      </div>
      <div className="flex items-center">
        <input
          onClick={handleColors}
          id="black-radio"
          type="radio"
          value="black"
          name="colored-radio"
          className="h-5 w-5 border-gray-300 bg-slate-800 text-slate-800 focus:ring-2 focus:ring-slate-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-slate-600"
        />
      </div>

      <div className="flex items-center">
        <input
          onClick={handleColors}
          id="blue-radio"
          type="radio"
          value="blue"
          name="colored-radio"
          className="h-5 w-5 border-gray-300 bg-blue-400 text-blue-400 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export default RadioButtons;
