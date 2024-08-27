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
import Navbar from "../components/Navbar";

const Doctor = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-screen-xl shadow rounded-md mt-24 mx-auto p-4">
        <p>Dokter RS Muhammadiyah Kalikapas</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative rounded-lg bg-slate-100">
            <img className="h-auto max-w-full" src={drRomy} alt="dr romy" />
            <div className="absolute bottom-2 left-0 w-full bg-slate-50 opacity-90 p-1 md:p-2 lg:p-4 text-center">
              <p className="text-sm md:text-xl lg:text-2xl font-bold">
                dr. Romy Hari Pujianto, Sp. B
              </p>
              <p className="text-xs md:text-lg lg:text-xl font-semibold mt-1 md:mt-2 lg:mt-2">
                Dokter Spesialis Bedah
              </p>
            </div>
          </div>
          <div className="relative rounded-lg bg-slate-100">
            <img className="h-auto max-w-full" src={drDewi} alt="dr dewi" />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg bg-slate-100"
              src={drFajar}
              alt="dr fajar"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg bg-stone-100"
              src={drBayu}
              alt="dr bayu"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg bg-stone-100"
              src={drLakhsmi}
              alt="dr lakhsmi"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg bg-stone-100"
              src={drDhimas}
              alt="dr dhimas"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg bg-slate-100"
              src={drRazzaqy}
              alt="dr razzaqy"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg bg-slate-100"
              src=""
              alt="dr lina"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg bg-slate-100"
              src={drgAgus}
              alt="dr agus"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg bg-stone-100"
              src={drEni}
              alt="dr eni"
            />
          </div>
          <div className="flex items-end rounded-lg bg-stone-100">
            <img className="h-auto max-w-full" src={drYusuf} alt="dr yusuf" />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg bg-stone-100"
              src={drDiyah}
              alt="dr diyah"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
