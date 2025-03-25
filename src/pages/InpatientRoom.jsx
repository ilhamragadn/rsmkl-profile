import {
  faBed,
  faBedPulse,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { inpatientRoomDatas } from "../utils/inpatientRoom";

const InpatientRoom = () => {
  return (
    <div>
      <div className="mt-12 md:mt-20 h-auto md:h-screen bg-gray-50">
        <div className="px-12 py-8">
          <p className="text-3xl font-semibold tracking-wide">Kamar Inap</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-8">
          {inpatientRoomDatas.map((room, index) => (
            <div
              key={index}
              className="bg-white p-2 md:p-4 rounded-md shadow-md h-min"
            >
              <div className="flex justify-center items-center flex-row flex-wrap">
                <div className="w-[180px] h-[120px] flex justify-center items-center bg-gray-700/35 rounded-md shadow-md">
                  <FontAwesomeIcon
                    icon={
                      room.class === "ICU" || room.class === "NICU"
                        ? faBedPulse
                        : room.class === "Ruang Isolasi"
                        ? faPeopleArrows
                        : faBed
                    }
                    size="6x"
                    className="text-gray-50"
                  />
                </div>
              </div>
              <div className="flex flex-row space-x-4 mt-2">
                {room.facility.map((fasilitas, i) => (
                  <p
                    key={i}
                    className="text-sm text-black/50 text-center font-semibold"
                  >
                    {fasilitas}
                  </p>
                ))}
              </div>
              <Link
                to={`/detail-inpatient-room/${index}`}
                className="block bg-sky-500 p-2 mt-1 rounded shadow-md text-center text-white font-medium"
              >
                {room.class}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InpatientRoom;
