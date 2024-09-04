import {
  faBaby,
  faBookMedical,
  faCapsules,
  faClockRotateLeft,
  faEnvelope,
  faFlaskVial,
  faHouseMedical,
  faLink,
  faMapLocationDot,
  faTruckMedical,
  faUserDoctor,
  faXRay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gmailIcon from "../assets/icons/gmail.png";
import igIcon from "../assets/icons/instagram.png";
import waIcon from "../assets/icons/whatsapp.png";
import ytIcon from "../assets/icons/youtube.png";
import RSMKLFull from "../assets/logo-rsmkl-full.png";
import Carousel from "../components/Carousel";
import NewsCard from "../components/NewsCard";
import ServiceCard from "../components/ServiceCard";
import ReadMoreBtn from "../utils/ReadMoreBtn";

const Welcome = () => {
  return (
    <div>
      {/* decoration */}
      <div className="max-w-7xl bg-sky-500 mt-12 md:mt-20 px-4 py-2 shadow-lg rounded-b-xl mx-auto">
        <div className="flex flex-col justify-center md:flex-row space-y-1 md:space-x-8">
          <a href="https://g.co/kgs/7MqvHNj" target="_blank">
            <div className="flex items-center">
              <div className="text-xs md:text-base text-white">
                <FontAwesomeIcon icon={faMapLocationDot} size="lg" />
              </div>
              <p className="text-xs md:text-xl font-bold text-white ms-2">
                Jl. Raya Mantup, Kalikapas, Kab. Lamongan, Jawa Timur
              </p>
            </div>
          </a>

          <a href="mailto:rsmkalikapas@gmail.com">
            <div className="flex items-center">
              <div className="text-xs md:text-base text-white mt-0 md:mt-1">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </div>
              <p className="text-sm md:text-xl font-bold text-white ms-2">
                rsmkalikapas@gmail.com
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* about */}
      <div
        id="about"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 m-8 py-0 md:py-12"
      >
        <div className="flex justify-center items-center">
          <Carousel />
        </div>
        <div className="flex flex-col justify-center items-center px-8">
          <p className="text-4xl font-bold">
            Rumah Sakit Muhammadiyah Kalikapas
          </p>
          <p className="mt-8 text-justify indent-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ad,
            culpa quas itaque incidunt laborum repudiandae nemo soluta aliquam
            reprehenderit, dicta ab. Fugiat natus, enim velit quam consectetur
            maxime reiciendis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Id animi impedit quasi atque vitae, consequatur
            iusto eius libero officia soluta laboriosam totam, dolorum sequi est
            et fugit in quia suscipit?
          </p>
          <div className="mt-4">
            <ReadMoreBtn goTo="/about" />
          </div>
        </div>
      </div>

      {/* services */}
      <div id="services" className="m-8 pt-0 md:pt-24">
        <div>
          <p className="font-bold text-3xl ms-4">Layanan</p>
          <p className="mt-4 ms-4 indent-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sint
            a sed enim nisi quidem porro ea cumque iste id quibusdam vel ex,
            blanditiis in tempore. Sequi nostrum blanditiis consectetur. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Vero saepe
            suscipit voluptate! Libero, consequuntur. Reprehenderit animi, minus
            debitis nostrum hic similique aperiam, beatae, nesciunt et ex est
            dolor quis iusto!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <ServiceCard
            icon={<FontAwesomeIcon icon={faClockRotateLeft} size="4x" />}
            title="IGD 24 Jam"
          />
          <ServiceCard
            icon={<FontAwesomeIcon icon={faTruckMedical} size="4x" />}
            title="Ambulance"
          />
          <ServiceCard
            icon={<FontAwesomeIcon icon={faCapsules} size="4x" />}
            title="Instalasi Farmasi"
          />
          <ServiceCard
            icon={<FontAwesomeIcon icon={faBookMedical} size="4x" />}
            title="Layanan Rekam Medis"
          />
          <ServiceCard
            icon={<FontAwesomeIcon icon={faBaby} size="4x" />}
            title="Persalinan"
          />
          <ServiceCard
            icon={<FontAwesomeIcon icon={faFlaskVial} size="4x" />}
            title="Laboratorium"
          />
          <ServiceCard
            icon={<FontAwesomeIcon icon={faXRay} size="4x" />}
            title="Radiologi"
          />
          <ServiceCard
            icon={<FontAwesomeIcon icon={faHouseMedical} size="4x" />}
            title="Rawat Inap"
          />
          <ServiceCard
            icon={<FontAwesomeIcon icon={faUserDoctor} size="4x" />}
            title="Instalasi Bedah Sentral"
          />
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/polyclinic"
              className="w-full sm:w-1/2 bg-neutral-200 rounded-full shadow-lg p-4 text-sky-950 flex flex-col justify-center items-center"
            >
              <div className="flex flex-row items-center">
                <span className="font-bold text-xl tracking-wide">
                  Poliklinik
                </span>
                <svg
                  className="w-6 h-6 ml-2 mt-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  ></path>
                </svg>
              </div>
            </a>
            <a
              href="/inpatient-room"
              className="w-full sm:w-1/2 bg-neutral-200 rounded-full shadow-lg p-4 text-sky-950 flex flex-col justify-center items-center"
            >
              <div className="flex flex-row items-center">
                <span className="font-bold text-xl tracking-wide">
                  Kamar Inap
                </span>
                <svg
                  className="w-6 h-6 ml-2 mt-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* informasi */}
      <div id="information" className="m-8 pt-24">
        <div>
          <p className="font-bold text-3xl text-center">Informasi</p>
        </div>

        <div className="max-w-screen-2xl mx-auto my-4">
          <div
            className="flex overflow-x-scroll"
            style={{
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            <div className="flex flex-nowrap">
              <div className="inline-block p-2">
                <div className="flex space-x-4">
                  <NewsCard
                    imgSrc="https://www.muhammadiyahlamongan.com/wp-content/uploads/2024/08/IMG-20240819-WA0033-768x475.jpg"
                    title="RS Kalikapas Serahkan Hadiah Lomba Semarak HUT RI Ke 79"
                    body="Dalam rangka semarak merayakan Hari Kemerdekaan Republik Indonesia ke 79 Rumah Sakit Muhammadiyah Kalikapas Lamongan mengadakan sejumlah lomba."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap space-x-4 space-y-2">
          <a
            href="https://www.instagram.com/rsmkalikapas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            className="flex flex-row items-center"
          >
            <img src={igIcon} alt="rsmkl-ig-icon" className="h-5 w-5 me-1" />
            <span className="italic">@rsmkalikapas</span>
          </a>
          <a
            href="http://www.youtube.com/@rsmkalikapaslamongan1157"
            target="_blank"
            className="flex flex-row items-center"
          >
            <img src={ytIcon} alt="rsmkl-ig-icon" className="h-6 w-6 me-1" />
            <span className="italic">RSM Kalikapas Lamongan</span>
          </a>
        </div>
      </div>

      {/*  Hubungi Kami */}
      <div id="contactUs" className="m-8 py-24">
        <div>
          <p className="font-bold text-3xl text-center">Hubungi Kami</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 rounded-lg shadow bg-gradient-to-b from-white via-sky-50 to-sky-200 ">
          <div className="flex justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15835.516492557126!2d112.4125432!3d-7.1399741!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77f7095cdf373b%3A0x8af377ce882071a!2sRumah%20Sakit%20Muhammadiyah%20Kalikapas%20Lamongan!5e0!3m2!1sid!2sid!4v1724032466404!5m2!1sid!2sid"
              width="713"
              height="401"
              className=""
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="">
            <div className="p-4">
              <form action="">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      className="w-full block bg-gray-50 p-2 my-1 rounded shadow-sm"
                      placeholder="Nama Lengkap"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="w-full block bg-gray-50 p-2 my-1 rounded shadow-sm"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    name=""
                    id=""
                    placeholder="Ulasan, kritik, saran."
                    className="w-full block bg-gray-50 p-2 my-1 rounded shadow-sm"
                    rows={6}
                  ></textarea>
                </div>
                <div className="mt-4 bg-sky-600 px-8 py-2 rounded shadow-lg text-white">
                  <p className="font-medium text-center">Kirim</p>
                </div>
              </form>
            </div>
            <div className="px-4 pb-4 rounded-b-md">
              <p className="italic text-gray-400 mt-2 mb-4">
                &quot;Banyak jalan menuju Roma, tapi cuma Jalan Raya Mantup, RT.
                01/RW. 02, Kalikapas, Sidomukti, Kab. Lamongan yang punya Rumah
                Sakit Muhammadiyah Kalikapas.&quot;
              </p>
              <div className="flex flex-row items-center space-x-4 my-2">
                <img src={waIcon} alt="rsmkl-wa-icon" className="w-6 h-6" />
                <img
                  src={gmailIcon}
                  alt="rsmkl-gmail-icon"
                  className="w-6 h-6"
                />
                <img src={igIcon} alt="rsmkl-ig-icon" className="w-5 h-5" />
                <img src={ytIcon} alt="rsmkl-yt-icon" className="w-6 h-6" />
              </div>
              <div className="flex flex-row items-center">
                <a href="https://linktr.ee/rsmkalikapas" target="blank">
                  <FontAwesomeIcon icon={faLink} size="xs" />
                  <span className="ms-1">linktr.ee/rsmkalikapas</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="max-w-full bg-gradient-to-b from-white via-sky-200 to-sky-600 py-4 px-24 rounded-t-md">
          <div className="flex flex-col justify-center items-center">
            <img src={RSMKLFull} alt="logo-rsmkl-full" className="w-60 p-1" />
            <p className="text-xl italic font-bold p-1">
              &quot;Kesehatan Anda adalah Kerja dan Ibadah Kami.&quot;
            </p>
            <div className="flex space-x-4 items-center mt-2">
              <img src={waIcon} alt="rsmkl-wa-icon" className="w-6 h-6" />
              <img src={gmailIcon} alt="rsmkl-gmail-icon" className="w-6 h-6" />
              <img src={igIcon} alt="rsmkl-ig-icon" className="w-5 h-5" />
              <img src={ytIcon} alt="rsmkl-yt-icon" className="w-6 h-6" />
            </div>
            <div className="bg-white w-full pb-0.5 rounded my-4"></div>
            <div className="flex items-center">
              <p className="text-gray-50 text-sm">
                Copyright &copy;2024. RS Muhammadiyah Kalikapas Lamongan. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
