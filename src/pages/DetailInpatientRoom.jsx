import { useParams } from "react-router-dom";
import { inpatientRoomDatas } from "../utils/inpatientRoom";

const DetailInpatientRoom = () => {
  const { id } = useParams();
  const roomData = inpatientRoomDatas[Number(id)]; // Konversi id ke number & ambil data

  if (!roomData) {
    return <p className="text-center mt-12">Data tidak ditemukan.</p>;
  }

  return (
    <div className="mt-12 md:mt-20 h-auto md:h-screen bg-gray-50">
      <div className="px-12 py-8">
        <p className="text-3xl font-semibold tracking-wide">
          Detail Layanan Kamar Inap
        </p>
      </div>
      <div className="bg-white max-w-7xl mx-auto p-8 rounded-md shadow-md">
        <div className="flex justify-center items-center">
          <img
            src={roomData.img}
            alt="gambar-ruang"
            className="max-w-[75%] rounded-md shadow-lg"
          />
        </div>
        <div className="mt-8 mb-4">
          <p className="text-4xl md:text-5xl font-medium text-center tracking-widest font-serif">
            {roomData.class}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex justify-center items-center p-4 border">
            <p className="text-center text-xl md:text-2xl font-semibold tracking-tight">
              Fasilitas
            </p>
          </div>
          <div className="flex items-center col-span-2 p-4 border">
            <p className="font-medium leading-tight">
              {Array.from(roomData.facility).join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailInpatientRoom;
