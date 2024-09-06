const DetailInpatientRoom = () => {
  return (
    <div className="mt-12 md:mt-20 h-auto md:h-screen bg-gray-50">
      <div className="px-12 py-8">
        <p className="text-3xl font-semibold tracking-wide">
          Detail Kamar Inap
        </p>
      </div>
      <div className="bg-white max-w-7xl mx-auto p-8 rounded-md shadow-md">
        <div className="flex justify-center">
          <img src="https://placehold.co/800x400" alt="" />
        </div>
        <div className="mt-4 mb-8">
          <p className="text-5xl font-medium text-center tracking-widest font-serif">
            Kelas VIP
          </p>
        </div>
        <div className="grid grid-cols-3">
          <div className="p-4 border">
            <p className="text-center text-gray-700/60">test</p>
          </div>
          <div className="col-span-2 p-4 border">
            <p>test</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailInpatientRoom;
