const Loader = () => {
  return (
    <div
      className="flex items-center justify-center bg-gray-900"
      style={{ minHeight: "calc(100vh - 47.8px)" }}
    >
      <div className="ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 animate-spin border-t-emerald-900"></div>
    </div>
  );
};

export default Loader;
