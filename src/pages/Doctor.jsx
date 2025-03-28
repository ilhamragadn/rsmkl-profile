import { useState } from "react";
import DoctorCard from "../components/main/DoctorCard";
import ScheduleCard from "../components/main/ScheduleCard";
import ScheduleList from "../components/main/ScheduleList";
import { doctorDatas } from "../utils/doctors";
import { doctorScheduleDatas } from "../utils/doctorSchedule";

const Doctor = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Dokter", "Jadwal"];

  return (
    <div>
      <div className="max-w-screen-xl shadow-xl rounded-md mt-12 md:mt-24 mb-12 mx-auto p-4">
        <div className="flex justify-center space-x-4 mb-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`py-2 px-4 ${
                activeTab === index
                  ? "bg-sky-100/40 border-b-sky-500 border-b-4 rounded"
                  : "hover:bg-sky-100/30 hover:rounded"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <p
                className={`font-semibold text-lg tracking-wide ${
                  activeTab === index ? "text-sky-500" : "text-gray-400"
                }`}
              >
                {tab}
              </p>
            </button>
          ))}
        </div>

        <div>
          {tabs.map((_tab, index) => (
            <div key={index}>
              {activeTab === index ? (
                <div className={`${index === 0 ? "" : "hidden"}`}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                    {doctorDatas.map((doctor, index) => (
                      <DoctorCard
                        key={index}
                        doctorImg={doctor.doctorImg}
                        doctorName={doctor.doctorName}
                        doctorSpecialist={doctor.doctorSpecialist}
                        className={`bg-neutral-100 ${
                          doctor.doctorName === "dr. Anisa Wahyuniarti"
                            ? "pt-10 pb-4"
                            : "pt-0 pb-0"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className={`${index === 1 ? "hidden" : ""}`}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    {doctorScheduleDatas.map((schedule, index) => (
                      <ScheduleCard key={index} day={schedule.day}>
                        {schedule.schedules.map((schedule, i) => (
                          <ScheduleList
                            key={i}
                            title={schedule.speciality}
                            startHour={schedule.startHour}
                            endHour={schedule.endHour}
                            doctorInCharge={schedule.doctorInCharge}
                          />
                        ))}
                      </ScheduleCard>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
