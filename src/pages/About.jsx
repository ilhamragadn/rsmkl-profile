import AdMedika from "../assets/img/partnerships/logo-admedika.png";
import BPJSKesehatan from "../assets/img/partnerships/logo-bpjs-kesehatan.png";
import BPJSKetenagakerjaan from "../assets/img/partnerships/logo-bpjs-ketenagakerjaan.png";
import JaringanRSMJatim from "../assets/img/partnerships/Logo-Jaringan-RSM-Jatim.png";
import JasaRaharja from "../assets/img/partnerships/logo-jasa-raharja.png";
import piagamMPKSDI from "../assets/img/sertif/penghargaan-mpksdi.png";
import sertifikatLARSI from "../assets/img/sertif/sertifikat-akreditasi-LARSI.png";
import Carousel from "../components/main/Carousel";
import gallery1 from "../assets/img/about-rsmkl/gallery1.jpg";
import gallery2 from "../assets/img/about-rsmkl/gallery2.jpg";
import gallery3 from "../assets/img/about-rsmkl/gallery3.jpg";
import gallery4 from "../assets/img/about-rsmkl/gallery4.jpg";
import gallery5 from "../assets/img/about-rsmkl/gallery5.jpg";
import gallery6 from "../assets/img/about-rsmkl/gallery6.jpg";
import gallery7 from "../assets/img/about-rsmkl/gallery7.jpg";
import gallery8 from "../assets/img/about-rsmkl/gallery8.jpg";
import gallery9 from "../assets/img/about-rsmkl/gallery9.jpg";
import gallery10 from "../assets/img/about-rsmkl/gallery10.jpg";
import gallery11 from "../assets/img/about-rsmkl/gallery11.jpg";
import gallery12 from "../assets/img/about-rsmkl/gallery12.jpg";
import gallery13 from "../assets/img/about-rsmkl/gallery13.jpg";
import gallery14 from "../assets/img/about-rsmkl/gallery14.jpg";
import gallery15 from "../assets/img/about-rsmkl/gallery15.jpg";
import gallery16 from "../assets/img/about-rsmkl/gallery16.jpg";
import gallery17 from "../assets/img/about-rsmkl/gallery17.jpg";
import gallery18 from "../assets/img/about-rsmkl/gallery18.jpg";
import gallery19 from "../assets/img/about-rsmkl/gallery19.jpg";
import gallery20 from "../assets/img/about-rsmkl/gallery20.jpg";
import gallery21 from "../assets/img/about-rsmkl/gallery21.jpg";

const About = () => {
  const certificatImg = [sertifikatLARSI, piagamMPKSDI];
  const aboutImg = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
    gallery16,
    gallery17,
    gallery18,
    gallery19,
    gallery20,
    gallery21,
  ];

  return (
    <div>
      <div className="max-w-xl flex justify-center px-2 pt-16 md:px-0 md:pt-32 mx-auto">
        <Carousel srcImg={aboutImg} className="md:max-w-xl mx-auto" />
      </div>

      <div className="max-w-screen-xl mt-2 mb-8 p-4 mx-auto shadow-md rounded-md">
        <p className="text-4xl text-center font-semibold font-serif">
          RS Muhammadiyah Kalikapas Lamongan
        </p>

        <div className="mt-6 md:mt-4 px-4">
          <p className="text-xl font-bold">Visi</p>
          <p className="mt-2 text-justify">
            &quot;Menjadi Rumah Sakit yang unggul, mandiri, dan berdaya saing
            tinggi, berbasis Penolong Kesengsaraan Umum sebagai perwujudan Islam
            Rahamatan Lil Alamin.&quot;
          </p>
        </div>
        <div className="mt-8 px-4">
          <p className="text-xl font-bold">Misi</p>
          <ol className="space-y-2 mt-2 text-justify">
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
          <p className="mt-2 text-justify font-medium font-serif italic">
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
          <div className="max-w-xl flex justify-center mt-4 mx-auto">
            <Carousel srcImg={certificatImg} className="md:max-w-xl mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
