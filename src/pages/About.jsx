import AdMedika from "../assets/img/partnerships/logo-admedika.png";
import BPJSKesehatan from "../assets/img/partnerships/logo-bpjs-kesehatan.png";
import BPJSKetenagakerjaan from "../assets/img/partnerships/logo-bpjs-ketenagakerjaan.png";
import JasaRaharja from "../assets/img/partnerships/logo-jasa-raharja.png";

const About = () => {
  return (
    <div>
      <div className="max-w-screen-xl mt-12 md:mt-24 p-4 mx-auto shadow-md rounded-md">
        <p className="text-2xl text-center font-semibold">
          RS Muhammadiyah Kalikapas Lamongan
        </p>

        <div className="mt-8 px-4">
          <p className="text-xl font-bold">Visi</p>
          <p className="mt-4 text-justify">
            &quot;Menjadi Rumah Sakit yang unggul, mandiri, dan berdaya saing
            tinggi, berbasis Penolong Kesengsaraan Umum sebagai perwujudan Islam
            Rahamatan Lil Alamin.&quot;
          </p>
        </div>
        <div className="mt-8 px-4">
          <p className="text-xl font-bold">Misi</p>
          <ol className="space-y-2 mt-4 text-justify">
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
          <p className="mt-4 text-justify italic">
            &quot;Kesembuhan Anda adalah Kerja Ibadah Kami.&quot;
          </p>
        </div>
        <div className="mt-8 px-4">
          <p className="text-xl font-bold text-center">Akreditasi</p>
          <div className="flex flex-row justify-center items-center mt-4 space-x-4">
            <div>
              <p>
                Telah terakreditasi oleh LARSI dengan predikat hasil penilaian
                tertinggi (Akreditasi Paripurna)
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 mb-2 px-4">
          <p className="text-xl font-bold text-center mb-4">Mitra</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto">
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
      </div>
    </div>
  );
};

export default About;
