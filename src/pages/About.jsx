import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-screen-xl mt-24 p-4 mx-auto shadow-md rounded-md">
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
          <p className="mt-4 text-justify">
            &quot;Kesembuhan Anda adalah Kerja Ibadah Kami.&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
