import {
  faBed,
  faBedPulse,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { URL_API } from "../App";

const InpatientRoom = () => {
  const [dataKamarInap, setDataKamarInap] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${URL_API}inpatient-room`);
        if (res.data.success) {
          setDataKamarInap(res.data.data);
        } else {
          console.log("Failed fetching data: ", res.data.message);
        }
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  console.log(dataKamarInap);

  return (
    <div>
      <div className="mt-12 md:mt-20 h-auto md:h-screen bg-gray-50">
        <div className="px-12 py-8">
          <p className="text-3xl font-semibold tracking-wide">Kamar Inap</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-8">
          <div className="p-4 rounded-md bg-white shadow-md h-min">
            <div className="flex justify-center md:justify-start items-center flex-row flex-wrap">
              <div
                className="rounded-md shadow bg-gray-700/35 flex justify-center items-center"
                style={{ width: "200px", height: "200px" }}
              >
                <FontAwesomeIcon
                  icon={faBed}
                  size="7x"
                  className="text-gray-50"
                />
              </div>
              <div className="flex-1 ms-2 p-4">
                <p className="text-2xl text-center md:text-start font-bold tracking-wider">
                  Kelas VIP
                </p>
                <div className="flex flex-col md:flex-row md:flex-wrap justify-center md:justify-start md:gap-1">
                  {Array.isArray(dataKamarInap) && dataKamarInap.length > 0 ? (
                    dataKamarInap.map((item, index) =>
                      item.class === "Kelas VIP" ? (
                        <p
                          key={index}
                          className="text-lg md:text-base text-center md:text-start tracking-wide"
                        >
                          {item.name}
                        </p>
                      ) : null
                    )
                  ) : (
                    <p>No data available</p>
                  )}
                  {/* <p className="text-lg md:text-base text-center md:text-start tracking-wide">
                    Matahari A
                  </p> */}
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex flex-row space-x-4">
                <div>
                  <p className="text-sm text-black/50 font-medium">
                    Bed Pasien
                  </p>
                </div>
                <div>
                  <p className="text-sm text-black/50 font-medium">
                    Bedside Cabinet
                  </p>
                </div>
                <div>
                  <p className="text-sm text-black/50 font-medium">
                    Kursi Tunggu
                  </p>
                </div>
                <div>
                  <p className="text-sm text-black/50 font-medium">
                    Kipas Angin
                  </p>
                </div>
              </div>
              <a
                href="/detail-inpatient-room"
                className="block bg-sky-500 p-2 mt-4 rounded shadow-md text-center text-white font-medium"
              >
                Detail
              </a>
            </div>
          </div>
          <div className="p-4 rounded-md bg-white shadow-md h-min">
            <div className="flex justify-center md:justify-start items-center flex-row flex-wrap">
              <div
                className="rounded-md shadow bg-gray-700/35 flex justify-center items-center"
                style={{ width: "200px", height: "200px" }}
              >
                <FontAwesomeIcon
                  icon={faBed}
                  size="7x"
                  className="text-gray-50"
                />
              </div>
              <div className="flex-1 ms-2 p-4">
                <p className="text-2xl text-center md:text-start font-bold tracking-wider">
                  Kelas 1
                </p>
                <div className="flex flex-col md:flex-row md:flex-wrap justify-center md:justify-start md:gap-1">
                  <p className="text-lg md:text-base text-center md:text-start tracking-wide">
                    Matahari A
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex flex-row space-x-4">
                <div>
                  <p className="text-sm text-black/50 font-medium">
                    Bed Pasien
                  </p>
                </div>
                <div>
                  <p className="text-sm text-black/50 font-medium">
                    Bedside Cabinet
                  </p>
                </div>
                <div>
                  <p className="text-sm text-black/50 font-medium">
                    Kursi Tunggu
                  </p>
                </div>
                <div>
                  <p className="text-sm text-black/50 font-medium">
                    Kipas Angin
                  </p>
                </div>
              </div>
              <div className="bg-sky-500 p-2 mt-4 rounded shadow-md text-center text-white font-medium">
                Detail
              </div>
            </div>
          </div>
          <div className="p-4 rounded-md bg-white shadow-md h-min">
            <div className="flex justify-center md:justify-start items-center flex-row flex-wrap">
              <div
                className="rounded-md shadow bg-gray-700/35 flex justify-center items-center"
                style={{ width: "200px", height: "200px" }}
              >
                <FontAwesomeIcon
                  icon={faBed}
                  size="7x"
                  className="text-gray-50"
                />
              </div>
              <div className="flex-1 ms-2 p-4">
                <p className="text-2xl text-center md:text-start font-bold tracking-wider">
                  Kelas 2
                </p>
                <div className="flex flex-col md:flex-row md:flex-wrap justify-center md:justify-start md:gap-1">
                  <p className="text-lg md:text-base text-center md:text-start tracking-wide">
                    Matahari A
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex flex-row space-x-4">
                <div>
                  <p className="text-sm text-black/50 font-medium">
                    Bed Pasien
                  </p>
                </div>
                <div>
                  <p className="text-sm text-black/50 font-medium">
                    Bedside Cabinet
                  </p>
                </div>
                <div>
                  <p className="text-sm text-black/50 font-medium">
                    Kursi Tunggu
                  </p>
                </div>
                <div>
                  <p className="text-sm text-black/50 font-medium">
                    Kipas Angin
                  </p>
                </div>
              </div>
              <div className="bg-sky-500 p-2 mt-4 rounded shadow-md text-center text-white font-medium">
                Detail
              </div>
            </div>
          </div>
          <div className="p-4 rounded-md bg-white shadow-md h-min">
            <div className="flex justify-center md:justify-start items-center flex-row flex-wrap">
              <div
                className="rounded-md shadow bg-gray-700/35 flex justify-center items-center"
                style={{ width: "200px", height: "200px" }}
              >
                <FontAwesomeIcon
                  icon={faBed}
                  size="7x"
                  className="text-gray-50"
                />
              </div>
              <div className="flex-1 ms-2 p-4">
                <p className="text-2xl text-center md:text-start font-bold tracking-wider">
                  Kelas 3
                </p>
                <div className="flex flex-col md:flex-row md:flex-wrap justify-center md:justify-start md:gap-1">
                  <p className="text-lg md:text-base text-center md:text-start tracking-wide">
                    Matahari B
                  </p>
                  <p className="text-lg md:text-base text-center md:text-start tracking-wide">
                    Mentari A
                  </p>
                  <p className="text-lg md:text-base text-center md:text-start tracking-wide">
                    Mentari B
                  </p>
                  <p className="text-lg md:text-base text-center md:text-start tracking-wide">
                    Neonatus
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex flex-row space-x-4">
                <div>
                  <p className="text-sm text-black/50 font-medium">
                    Bed Pasien
                  </p>
                </div>
                <div>
                  <p className="text-sm text-black/50 font-medium">
                    Bedside Cabinet
                  </p>
                </div>
                <div>
                  <p className="text-sm text-black/50 font-medium">
                    Kursi Tunggu
                  </p>
                </div>
                <div>
                  <p className="text-sm text-black/50 font-medium">
                    Kipas Angin
                  </p>
                </div>
              </div>
              <div className="bg-sky-500 p-2 mt-4 rounded shadow-md text-center text-white font-medium">
                Detail
              </div>
            </div>
          </div>
        </div>

        <div className="px-12 py-8">
          <p className="text-3xl font-semibold tracking-wide">Lainnya</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-8 pb-8">
          <div className="p-4 rounded-md bg-white shadow-md h-min">
            <div className="flex justify-center md:justify-start items-center flex-row flex-wrap">
              <div
                className="rounded-md shadow bg-gray-700/35 flex justify-center items-center"
                style={{ width: "200px", height: "200px" }}
              >
                <FontAwesomeIcon
                  icon={faBedPulse}
                  size="7x"
                  className="text-gray-50"
                />
              </div>
              <div className="flex-1 ms-2 p-2 md:p-4">
                <p className="text-2xl text-center md:text-start font-bold tracking-wider">
                  ICU
                </p>
              </div>
            </div>
            <div>
              <div className="bg-sky-500 p-2 mt-0 md:mt-4 rounded shadow-md text-center text-white font-medium">
                Detail
              </div>
            </div>
          </div>
          <div className="p-4 rounded-md bg-white shadow-md h-min">
            <div className="flex justify-center md:justify-start items-center flex-row flex-wrap">
              <div
                className="rounded-md shadow bg-gray-700/35 flex justify-center items-center"
                style={{ width: "200px", height: "200px" }}
              >
                <FontAwesomeIcon
                  icon={faBedPulse}
                  size="7x"
                  className="text-gray-50"
                />
              </div>
              <div className="flex-1 ms-2 p-2 md:p-4">
                <p className="text-2xl text-center md:text-start font-bold tracking-wider">
                  NICU
                </p>
              </div>
            </div>
            <div>
              <div className="bg-sky-500 p-2 mt-0 md:mt-4 rounded shadow-md text-center text-white font-medium">
                Detail
              </div>
            </div>
          </div>
          <div className="p-4 rounded-md bg-white shadow-md h-min">
            <div className="flex justify-center md:justify-start items-center flex-row flex-wrap">
              <div
                className="rounded-md shadow bg-gray-700/35 flex justify-center items-center"
                style={{ width: "200px", height: "200px" }}
              >
                <FontAwesomeIcon
                  icon={faPeopleArrows}
                  size="7x"
                  className="text-gray-50"
                />
              </div>
              <div className="flex-1 ms-2 p2 md:p-4">
                <p className="text-2xl text-center md:text-start font-bold tracking-wider">
                  Ruang Isolasi
                </p>
              </div>
            </div>
            <div>
              <div className="bg-sky-500 p-2 mt-0 md:mt-4 rounded shadow-md text-center text-white font-medium">
                Detail
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InpatientRoom;
