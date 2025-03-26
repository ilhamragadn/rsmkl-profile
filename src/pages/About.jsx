import AdMedika from "../assets/img/partnerships/logo-admedika.png";
import BPJSKesehatan from "../assets/img/partnerships/logo-bpjs-kesehatan.png";
import BPJSKetenagakerjaan from "../assets/img/partnerships/logo-bpjs-ketenagakerjaan.png";
import JaringanRSMJatim from "../assets/img/partnerships/Logo-Jaringan-RSM-Jatim.png";
import JasaRaharja from "../assets/img/partnerships/logo-jasa-raharja.png";
import piagamMPKSDI from "../assets/img/sertif/penghargaan-mpksdi.png";
import sertifikatLARSI from "../assets/img/sertif/sertifikat-akreditasi-LARSI.png";
import Carousel from "../components/main/Carousel";

const About = () => {
  const images = [sertifikatLARSI, piagamMPKSDI];
  return (
    <div>
      <div className="max-w-screen-xl mt-12 mb-8 md:mt-24 p-4 mx-auto shadow-md rounded-md">
        <p className="text-4xl text-center font-semibold font-serif">
          RS Muhammadiyah Kalikapas Lamongan
        </p>

        <div className="mt-4 px-4">
          <p className="text-xl font-bold">Visi</p>
          <p className="mt-2 text-justify">
            &quot;Menjadi Rumah Sakit yang unggul, mandiri, dan berdaya saing
            tinggi, berbasis Penolong Kesengsaraan Umum sebagai perwujudan Islam
            Rahamatan Lil Alamin.&quot;
          </p>
        </div>
        <div className="mt-8 px-4">
          <p className="text-xl font-bold">Misi</p>
          <ol className="space-y-2 mt-2 text-justify leading-4">
            <li>
              1. Memberikan pelayanan kesehatan yang Islami, profesional,
              bermutu, dan berkemajuan dalam rangka dakwah Amar Ma&apos;ruf Nahi
              Munkar.
            </li>
            <li>
              2. Menyiapkan Sumber Daya Insani yang profesional berkarakter
              Islami dan berkepribadian Muhammadiyah.
            </li>
            <li>
              3. Menerapkan pola pembiayaan yang terjangkau dan berpihak pada
              kaum duafa.
            </li>
            <li>
              4. Membangun manajemen informasi dan komunikasi menggunakan
              teknologi terkini yang terintegrasi dengan jejaring layanan
              kesehatan dan institusi lain.
            </li>
          </ol>
        </div>
        <div className="mt-8 px-4">
          <p className="text-xl font-bold">Motto</p>
          <p className="mt-2 text-justify italic">
            &quot;Kesembuhan Anda adalah Kerja Ibadah Kami.&quot;
          </p>
        </div>
        <div className="mt-8 px-4">
          <p className="text-xl font-bold text-center mb-2">Mitra</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto">
            <div className="col-span-1 md:col-span-4">
              <img
                src={JaringanRSMJatim}
                alt="logo-jejaring-rsm"
                className="mx-auto rounded shadow"
                style={{ height: "150px" }}
              />
            </div>
            <div className="rounded shadow">
              <img
                src={AdMedika}
                alt="logo-admedika"
                className="scale-110 mx-auto"
                style={{ height: "150px" }}
              />
            </div>
            <div className="rounded shadow">
              <img
                src={BPJSKesehatan}
                alt="logo-bpjs-kesehatan"
                className="p-4 mx-auto"
                style={{ height: "150px" }}
              />
            </div>
            <div className="rounded shadow">
              <img
                src={BPJSKetenagakerjaan}
                alt="logo-bpjs-ketenagakerjaan"
                className="py-8 px-0 md:px-1 mx-auto"
                style={{ height: "150px" }}
              />
            </div>
            <div className="rounded shadow">
              <img
                src={JasaRaharja}
                alt="logo-jasa-raharja"
                className="p-2 mx-auto"
                style={{ height: "150px" }}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 mb-2 px-4">
          <p className="text-xl font-bold text-center">
            Akreditasi & Penghargaan
          </p>
          <div className="max-w-xl flex justify-center mt-2 mx-auto">
            <Carousel srcImg={images} className="md:max-w-xl mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
