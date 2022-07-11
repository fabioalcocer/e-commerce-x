import Card from "./Card";

//TODO: Crear bucle segun datos de API para crear los componentes de forma dinamica
function CardsContainer() {
  return (
    <div className="container mx-auto pb-5">
      <div className="lg:-mx-2 lg:flex">
        <div className="mx-auto mt-6 lg:mt-0 lg:w-5/5 lg:px-2 ">
          <div className="mt-1 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsContainer;
