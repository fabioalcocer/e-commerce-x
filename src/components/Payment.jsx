function Payment() {
  return (
    <div className="mt-8 flex flex-col justify-center gap-5">
      <h4 className="text-xl font-medium text-gray-900 dark:text-white">
        Elige método de pago:
      </h4>
      <div className="flex flex-col gap-3 text-gray-900 dark:text-slate-200">
        <label className="flex items-center gap-2">
          <input value="efectivo" type="radio" name="method" id="" />
          <span>Efectivo</span>
        </label>
        <label className="flex items-center gap-2">
          <input value="tarjeta" type="radio" name="method" id="" />
          <span>Tarjeta</span>
        </label>
      </div>
      <lottie-player
        src="https://assets8.lottiefiles.com/private_files/lf30_9kdbftpx.json"
        background="transparent"
        speed=".6"
        style={{
          width: "300px",
          height: "300px",
          margin: "0 auto",
        }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
}

export default Payment;
