function StockToggle() {
  return (
    <div className="mt-5 flex items-center justify-end gap-2">
      <span className="ml-3 text-sm font-semibold text-gray-900 dark:text-gray-700">
        En stock
      </span>
      <label
        htmlFor="default-toggle"
        className="relative inline-flex cursor-pointer items-center"
      >
        <input
          type="checkbox"
          value=""
          id="default-toggle"
          className="peer sr-only"
        />

        <div className="h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-500 peer-checked:after:translate-x-full peer-checked:after:border-white  dark:border-gray-600 dark:bg-gray-700"></div>
      </label>
    </div>
  );
}

export default StockToggle;
