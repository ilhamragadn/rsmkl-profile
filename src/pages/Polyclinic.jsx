import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ScheduleList from "../components/main/ScheduleList";
import { polyclinicDatas } from "../utils/polyclinics";
import Carousel from "../components/main/Carousel";
import operation from "../assets/img/services/operasi.jpg";
import childPoly from "../assets/img/services/poli-anak.jpeg";
import radiology from "../assets/img/services/rsmkl-radiologi.jpeg";
import lab from "../assets/img/services/rsmkl-lab.jpg";
import usg4D from "../assets/img/services/USG-4D.jpg";

const Polyclinic = () => {
  const [showPoly, setShowPoly] = useState({});

  const dropdownPoly = (title) => {
    setShowPoly((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const serviceImg = [radiology, operation, childPoly, lab, usg4D];

  return (
    <div>
      <div className="mt-12 md:mt-20 h-auto md:h-screen bg-gray-50">
        <div className="max-w-xl flex justify-center pt-12 mx-auto">
          <Carousel srcImg={serviceImg} className="md:max-w-xl mx-auto" />
        </div>
        <div className="px-12 pt-8 pb-2">
          <p className="text-4xl text-center font-semibold font-serif tracking-wide">
            Poliklinik
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-8 pb-8">
          {polyclinicDatas.map((polyclinic, index) => {
            // **Mengelompokkan jadwal berdasarkan jam praktek**
            const groupedSchedules = polyclinic.schedule.reduce(
              (acc, { day, startHour, endHour, doctorInCharge }) => {
                const key = `${startHour}-${endHour}`;
                if (!acc[key]) {
                  acc[key] = {
                    startHour,
                    endHour,
                    days: [],
                    doctors: new Set(),
                  };
                }
                acc[key].days.push(day);
                acc[key].doctors.add(doctorInCharge);
                return acc;
              },
              {}
            );

            return (
              <div
                key={index}
                className="bg-white rounded-md p-4 shadow-md h-min"
              >
                <div className="flex flex-row items-center">
                  <div className="flex-1 p-1">
                    <p className="font-medium tracking-wide italic">
                      Poliklinik Spesialis {polyclinic.title}
                    </p>
                  </div>
                  <button
                    className="p-1"
                    onClick={() => dropdownPoly(polyclinic.title)}
                  >
                    <FontAwesomeIcon
                      icon={faCircleChevronDown}
                      size="xl"
                      className="text-black/80"
                    />
                  </button>
                </div>
                {showPoly[polyclinic.title] && (
                  <div className="mt-4">
                    {Object.values(groupedSchedules).map((schedule, i) => (
                      <ScheduleList
                        key={i}
                        title={schedule.days.join(", ")} // Gabungkan hari yang sama
                        startHour={schedule.startHour}
                        endHour={schedule.endHour}
                        doctorInCharge={Array.from(schedule.doctors).join(
                          " | "
                        )} // Gabungkan nama dokter
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Polyclinic;
