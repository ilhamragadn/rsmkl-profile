import { useState } from "react";
import drYusuf from "../assets/img/doctors/dr.Abd._Yusuf_Habibie_Sp.OT.png";
import drBayu from "../assets/img/doctors/dr.Bayu_Kurniawan_Sp.A.png";
import drDewi from "../assets/img/doctors/dr.Dewi_Masitha_Sp.G.K.png";
import drDhimas from "../assets/img/doctors/dr.Dhimas_Hantoko_Sp.S.png";
import drDiyah from "../assets/img/doctors/dr.Diyah_Nofita_Ofa_N._Sp.OG.png";
import drEni from "../assets/img/doctors/dr.Eni_Fatmawati_Sp.OG.png";
import drFajar from "../assets/img/doctors/dr.Fajar_Admayana_Sp.PD.png";
import drLakhsmi from "../assets/img/doctors/dr.Lakhsmi_Pramushinta_Sp.JP.png";
import drRazzaqy from "../assets/img/doctors/dr.Razzaqy_Sp.M.png";
import drRomy from "../assets/img/doctors/dr.Romy_Hari_Pujianto_Sp.B.png";
import drgAgus from "../assets/img/doctors/drg.Agus_Syaifuddin_Setiawan.png";
import drgLina from "../assets/img/doctors/drg.Lina_Rohmawati_Sp.Perio.png";
import DoctorCard from "../components/DoctorCard";
import ScheduleCard from "../components/ScheduleCard";
import ScheduleList from "../utils/ScheduleList";

const Doctor = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Dokter", "Jadwal"];
  return (
    <div>
      <div className="max-w-screen-xl shadow-xl rounded-md mt-12 md:mt-28 mb-12 mx-auto p-4">
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
                    <DoctorCard
                      className="bg-gray-100"
                      doctorImg={drRomy}
                      doctorName="dr. Romy Hari Pujianto, Sp.B."
                      doctorSpecialist="Dokter Spesialis Bedah"
                    />
                    <DoctorCard
                      className="bg-gray-100"
                      doctorImg={drDewi}
                      doctorName="dr. Dewi Masitha, Sp.GK."
                      doctorSpecialist="Dokter Spesialis Gizi"
                    />
                    <DoctorCard
                      className="bg-gray-100"
                      doctorImg={drFajar}
                      doctorName="dr. Fajar Admayana, Sp.PD."
                      doctorSpecialist="Dokter Spesialis Penyakit Dalam"
                    />
                    <DoctorCard
                      className="bg-stone-100"
                      doctorImg={drBayu}
                      doctorName="dr. Bayu Kurniawan, Sp.A."
                      doctorSpecialist="Dokter Spesialis Anak"
                    />
                    <DoctorCard
                      className="bg-stone-100"
                      doctorImg={drLakhsmi}
                      doctorName="dr. Lakhsmi Pramushinta, Sp.JP."
                      doctorSpecialist="Dokter Spesialis Jantung dan Pembuluh Darah"
                    />
                    <DoctorCard
                      className="bg-stone-100"
                      doctorImg={drDhimas}
                      doctorName="dr. Dhimas Hantoko, Sp.S."
                      doctorSpecialist="Dokter Spesialis Saraf"
                    />
                    <DoctorCard
                      className="bg-gray-100"
                      doctorImg={drRazzaqy}
                      doctorName="dr. Razzaqy, Sp.M."
                      doctorSpecialist="Dokter Spesialis Mata"
                    />
                    <DoctorCard
                      className="bg-gray-100"
                      doctorImg={drgLina}
                      doctorName="drg. Lina Rohmawati, Sp.Perio."
                      doctorSpecialist="Dokter Spesialis Periodonsia"
                    />
                    <DoctorCard
                      className="bg-gray-100"
                      doctorImg={drgAgus}
                      doctorName="drg. Agus Syaifuddin Setiawan."
                      doctorSpecialist="Dokter Gigi"
                    />
                    <DoctorCard
                      className="bg-stone-100"
                      doctorImg={drEni}
                      doctorName="dr. Eni Fatmawati, Sp.OG."
                      doctorSpecialist="Dokter Spesialis Obstetri dan Ginekologi (Obgyn)"
                    />
                    <DoctorCard
                      className="bg-stone-100"
                      doctorImg={drYusuf}
                      doctorName="dr. Abdurrahman Yusuf Habibie, Sp.OT."
                      doctorSpecialist="Dokter Spesialis Ortopedi dan Traumatologi"
                    />
                    <DoctorCard
                      className="bg-stone-100"
                      doctorImg={drDiyah}
                      doctorName="dr. Diyah Novita Ofa N, Sp.OG."
                      doctorSpecialist="Dokter Spesialis Obstetri dan Ginekologi (Obgyn)"
                    />
                  </div>
                </div>
              ) : (
                <div className={`${index === 1 ? "hidden" : ""}`}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <ScheduleCard day="Senin">
                      <ScheduleList
                        speciality="Mata"
                        startHour="09.00"
                        endHour="12.00"
                        doctorInCharge="dr. Razzaqy, Sp.M."
                      />
                      <ScheduleList
                        speciality="Gigi"
                        startHour="13.00"
                        endHour="15.00"
                        doctorInCharge="drg. Agus Syaifuddin Setiawan."
                      />
                      <ScheduleList
                        speciality="Bedah"
                        startHour="15.00"
                        endHour="17.00"
                        doctorInCharge="dr. Romy Hari Pujianto, Sp.B."
                      />
                      <ScheduleList
                        speciality="Obgyn"
                        startHour="15.00"
                        endHour="17.00"
                        doctorInCharge="dr. Diyah Novita Ofa N, Sp.OG."
                      />
                      <ScheduleList
                        speciality="Ortopedi"
                        startHour="15.00"
                        endHour="17.00"
                        doctorInCharge="dr. Abdurrahman Yusuf Habibie, Sp.OT."
                      />
                    </ScheduleCard>
                    <ScheduleCard day="Selasa">
                      <ScheduleList
                        speciality="Gigi Periodonsia"
                        startHour="09.00"
                        endHour="11.00"
                        doctorInCharge="drg. Lina Rohmawati, Sp.Perio."
                      />
                      <ScheduleList
                        speciality="Mata"
                        startHour="09.00"
                        endHour="12.00"
                        doctorInCharge="dr. Razzaqy, Sp.M."
                      />
                      <ScheduleList
                        speciality="Penyakit Dalam"
                        startHour="12.05"
                        endHour="14.05"
                        doctorInCharge="dr. Fajar Admayana, Sp.PD."
                      />
                      <ScheduleList
                        speciality="Gigi"
                        startHour="13.00"
                        endHour="15.00"
                        doctorInCharge="drg. Agus Syaifuddin Setiawan."
                      />
                      <ScheduleList
                        speciality="Bedah"
                        startHour="15.00"
                        endHour="17.00"
                        doctorInCharge="dr. Romy Hari Pujianto, Sp.B."
                      />
                      <ScheduleList
                        speciality="Gizi"
                        startHour="15.00"
                        endHour="17.00"
                        doctorInCharge="dr. Dewi Masitha, Sp.GK."
                      />
                      <ScheduleList
                        speciality="Obgyn"
                        startHour="15.00"
                        endHour="17.00"
                        doctorInCharge="dr. Eni Fatmawati, Sp.OG."
                      />
                    </ScheduleCard>
                    <ScheduleCard day="Rabu">
                      <ScheduleList
                        speciality="Gigi Periodonsia"
                        startHour="09.00"
                        endHour="11.00"
                        doctorInCharge="drg. Lina Rohmawati, Sp.Perio."
                      />
                      <ScheduleList
                        speciality="Penyakit Dalam"
                        startHour="12.05"
                        endHour="14.05"
                        doctorInCharge="dr. Fajar Admayana, Sp.PD."
                      />
                      <ScheduleList
                        speciality="Gigi"
                        startHour="13.00"
                        endHour="15.00"
                        doctorInCharge="drg. Agus Syaifuddin Setiawan."
                      />
                      <ScheduleList
                        speciality="Bedah"
                        startHour="15.00"
                        endHour="17.00"
                        doctorInCharge="dr. Romy Hari Pujianto, Sp.B."
                      />
                      <ScheduleList
                        speciality="Gizi"
                        startHour="15.00"
                        endHour="17.00"
                        doctorInCharge="dr. Dewi Masitha, Sp.GK."
                      />
                      <ScheduleList
                        speciality="Obgyn"
                        startHour="15.00"
                        endHour="17.00"
                        doctorInCharge="dr. Eni Fatmawati, Sp.OG."
                      />
                      <ScheduleList
                        speciality="Jantung"
                        startHour="16.00"
                        endHour="17.00"
                        doctorInCharge="dr. Lakhsmi Pramushinta, Sp.JP."
                      />
                    </ScheduleCard>
                    <ScheduleCard day="Kamis">
                      <ScheduleList
                        speciality="Gigi Periodonsia"
                        startHour="09.00"
                        endHour="11.00"
                        doctorInCharge="drg. Lina Rohmawati, Sp.Perio."
                      />
                      <ScheduleList
                        speciality="Gigi"
                        startHour="13.00"
                        endHour="15.00"
                        doctorInCharge="drg. Agus Syaifuddin Setiawan."
                      />
                      <ScheduleList
                        speciality="Anak"
                        startHour="15.00"
                        endHour="17.00"
                        doctorInCharge="dr. Bayu Kurniawan, Sp.A."
                      />
                      <ScheduleList
                        speciality="Bedah"
                        startHour="15.00"
                        endHour="17.00"
                        doctorInCharge="dr. Romy Hari Pujianto, Sp.B."
                      />
                      <ScheduleList
                        speciality="Gizi"
                        startHour="15.00"
                        endHour="17.00"
                        doctorInCharge="dr. Dewi Masitha, Sp.GK."
                      />
                      <ScheduleList
                        speciality="Obgyn"
                        startHour="15.00"
                        endHour="17.00"
                        doctorInCharge="dr. Eni Fatmawati, Sp.OG."
                      />
                    </ScheduleCard>
                    <ScheduleCard day="Jum'at">
                      <ScheduleList
                        speciality="Mata"
                        startHour="09.00"
                        endHour="12.00"
                        doctorInCharge="dr. Razzaqy, Sp.M."
                      />
                      <ScheduleList
                        speciality="Penyakit Dalam"
                        startHour="12.05"
                        endHour="14.05"
                        doctorInCharge="dr. Fajar Admayana, Sp.PD."
                      />
                      <ScheduleList
                        speciality="Obgyn"
                        startHour="15.00"
                        endHour="17.00"
                        doctorInCharge="dr. Eni Fatmawati, Sp.OG."
                      />
                      <ScheduleList
                        speciality="Gizi"
                        startHour="15.00"
                        endHour="17.00"
                        doctorInCharge="dr. Dewi Masitha, Sp.GK."
                      />
                    </ScheduleCard>
                    <ScheduleCard day="Sabtu">
                      <ScheduleList
                        speciality="Syaraf"
                        startHour="12.05"
                        endHour="14.05"
                        doctorInCharge="dr. Dhimas Hantoko, Sp.S."
                      />
                    </ScheduleCard>
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
