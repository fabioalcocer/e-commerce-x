import { Menu, Transition } from "@headlessui/react";
import { BiFilterAlt } from "react-icons/bi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Filters() {
  return (
    <div className="mt-8 flex items-center justify-between gap-4">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="text-md inline-flex items-center justify-center rounded-3xl border-2 border-black px-4 py-1.5 font-bold text-slate-900 shadow-sm hover:bg-gray-50 focus:border-2  focus:border-slate-500 focus:text-slate-500 focus:outline-none">
            <BiFilterAlt className="mr-1 text-2xl font-bold" />
            Filtros
          </Menu.Button>
        </div>
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Color
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Tamaño
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Categoría
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <span className="font-medium text-gray-500">268 Articulos</span>
    </div>
  );
}
export default Filters;
