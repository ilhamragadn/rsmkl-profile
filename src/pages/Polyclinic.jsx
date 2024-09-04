import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ScheduleList from "../utils/ScheduleList";

const Polyclinic = () => {
  const [showAnak, setShowAnak] = useState(false);
  const [showBedah, setShowBedah] = useState(false);
  const [showJantung, setShowJantung] = useState(false);
  const [showObgyn, setShowObgyn] = useState(false);
  const [showMata, setShowMata] = useState(false);
  const [showOrtopedi, setShowOrtopedi] = useState(false);
  const [showPenyakitDalam, setShowPenyakitDalam] = useState(false);
  const [showSyaraf, setShowSyaraf] = useState(false);

  const toggleShow = (speciality) => {
    switch (speciality) {
      case "Anak":
        setShowAnak(!showAnak);
        break;
      case "Bedah":
        setShowBedah(!showBedah);
        break;
      case "Jantung":
        setShowJantung(!showJantung);
        break;
      case "Obgyn":
        setShowObgyn(!showObgyn);
        break;
      case "Mata":
        setShowMata(!showMata);
        break;
      case "Ortopedi":
        setShowOrtopedi(!showOrtopedi);
        break;
      case "PenyakitDalam":
        setShowPenyakitDalam(!showPenyakitDalam);
        break;
      case "Syaraf":
        setShowSyaraf(!showSyaraf);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="mt-12 md:mt-20 h-auto md:h-screen bg-gray-50">
        <div className="px-12 py-8">
          <p className="text-3xl font-semibold tracking-wide">Poliklinik</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-8 pb-8">
          <div className="bg-white rounded-md p-4 shadow-md h-min">
            <div className="flex flex-row items-center">
              <div className="flex-1 p-1">
                <p className="font-medium tracking-wide italic">
                  Poliklinik Spesialis Anak
                </p>
              </div>
              <button className="p-1" onClick={() => toggleShow("Anak")}>
                <FontAwesomeIcon
                  icon={faCircleChevronDown}
                  size="xl"
                  className="text-black/80"
                />
              </button>
            </div>
            {showAnak && (
              <div className="mt-4">
                <ScheduleList
                  speciality="Rabu"
                  startHour="15.00"
                  endHour="17.00"
                  doctorInCharge="dr. Bayu Kurniawan, Sp.A."
                />
              </div>
            )}
          </div>
          <div className="bg-white rounded-md p-4 shadow-md h-min">
            <div className="flex flex-row items-center">
              <div className="flex-1 p-1">
                <p className="font-medium tracking-wide italic">
                  Poliklinik Spesialis Bedah
                </p>
              </div>
              <button className="p-1" onClick={() => toggleShow("Bedah")}>
                <FontAwesomeIcon
                  icon={faCircleChevronDown}
                  size="xl"
                  className="text-black/80"
                />
              </button>
            </div>
            {showBedah && (
              <div className="mt-4">
                <ScheduleList
                  speciality="Senin, Selasa, Rabu, Kamis"
                  startHour="15.00"
                  endHour="17.00"
                  doctorInCharge="dr. Romy Hari Pujianto, Sp.B."
                />
              </div>
            )}
          </div>
          <div className="bg-white rounded-md p-4 shadow-md h-min">
            <div className="flex flex-row items-center">
              <div className="flex-1 p-1">
                <p className="font-medium tracking-wide italic">
                  Poliklinik Spesialis Jantung
                </p>
              </div>
              <button className="p-1" onClick={() => toggleShow("Jantung")}>
                <FontAwesomeIcon
                  icon={faCircleChevronDown}
                  size="xl"
                  className="text-black/80"
                />
              </button>
            </div>
            {showJantung && (
              <div className="mt-4">
                <ScheduleList
                  speciality="Rabu"
                  startHour="16.00"
                  endHour="17.00"
                  doctorInCharge="dr. Lakhsmi Pramushinta, Sp.JP."
                />
              </div>
            )}
          </div>
          <div className="bg-white rounded-md p-4 shadow-md h-min">
            <div className="flex flex-row items-center">
              <div className="flex-1 p-1">
                <p className="font-medium tracking-wide italic">
                  Poliklinik Spesialis Kandungan & Kebidanan
                </p>
              </div>
              <button className="p-1" onClick={() => toggleShow("Obgyn")}>
                <FontAwesomeIcon
                  icon={faCircleChevronDown}
                  size="xl"
                  className="text-black/80"
                />
              </button>
            </div>
            {showObgyn && (
              <div className="mt-4">
                <ScheduleList
                  speciality="Senin"
                  startHour="15.00"
                  endHour="17.00"
                  doctorInCharge="dr. Diyah Novita Ofa N, Sp.OG."
                />
                <ScheduleList
                  speciality="Selasa, Rabu, Kamis, Jum'at"
                  startHour="15.00"
                  endHour="17.00"
                  doctorInCharge="dr. Eni Fatmawati, Sp.OG."
                />
              </div>
            )}
          </div>
          <div className="bg-white rounded-md p-4 shadow-md h-min">
            <div className="flex flex-row items-center">
              <div className="flex-1 p-1">
                <p className="font-medium tracking-wide italic">
                  Poliklinik Spesialis Mata
                </p>
              </div>
              <button className="p-1" onClick={() => toggleShow("Mata")}>
                <FontAwesomeIcon
                  icon={faCircleChevronDown}
                  size="xl"
                  className="text-black/80"
                />
              </button>
            </div>
            {showMata && (
              <div className="mt-4">
                <ScheduleList
                  speciality="Senin, Selasa, Jum'at"
                  startHour="09.00"
                  endHour="12.00"
                  doctorInCharge="dr. Razzaqy, Sp.M."
                />
              </div>
            )}
          </div>
          <div className="bg-white rounded-md p-4 shadow-md h-min">
            <div className="flex flex-row items-center">
              <div className="flex-1 p-1">
                <p className="font-medium tracking-wide italic">
                  Poliklinik Spesialis Ortopedi
                </p>
              </div>
              <button className="p-1" onClick={() => toggleShow("Ortopedi")}>
                <FontAwesomeIcon
                  icon={faCircleChevronDown}
                  size="xl"
                  className="text-black/80"
                />
              </button>
            </div>
            {showOrtopedi && (
              <div className="mt-4">
                <ScheduleList
                  speciality="Senin"
                  startHour="15.00"
                  endHour="17.00"
                  doctorInCharge="dr. Abdurrahman Yusuf Habibie, Sp.OT."
                />
              </div>
            )}
          </div>
          <div className="bg-white rounded-md p-4 shadow-md h-min">
            <div className="flex flex-row items-center">
              <div className="flex-1 p-1">
                <p className="font-medium tracking-wide italic">
                  Poliklinik Spesialis Penyakit Dalam
                </p>
              </div>
              <button
                className="p-1"
                onClick={() => toggleShow("PenyakitDalam")}
              >
                <FontAwesomeIcon
                  icon={faCircleChevronDown}
                  size="xl"
                  className="text-black/80"
                />
              </button>
            </div>
            {showPenyakitDalam && (
              <div className="mt-4">
                <ScheduleList
                  speciality="Selasa, Rabu, Jum'at"
                  startHour="12.05"
                  endHour="14.05"
                  doctorInCharge="dr. Fajar Admayana, Sp.PD."
                />
              </div>
            )}
          </div>
          <div className="bg-white rounded-md p-4 shadow-md h-min">
            <div className="flex flex-row items-center">
              <div className="flex-1 p-1">
                <p className="font-medium tracking-wide italic">
                  Poliklinik Spesialis Syaraf
                </p>
              </div>
              <button className="p-1" onClick={() => toggleShow("Syaraf")}>
                <FontAwesomeIcon
                  icon={faCircleChevronDown}
                  size="xl"
                  className="text-black/80"
                />
              </button>
            </div>
            {showSyaraf && (
              <div className="mt-4">
                <ScheduleList
                  speciality="Sabtu"
                  startHour="12.05"
                  endHour="14.05"
                  doctorInCharge="dr. Dhimas Hantoko, Sp.S."
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Polyclinic;
