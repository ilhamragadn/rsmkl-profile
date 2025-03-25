import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gmailIcon from "../assets/icons/gmail.png";
import igIcon from "../assets/icons/instagram.png";
import waIcon from "../assets/icons/whatsapp.png";
import ytIcon from "../assets/icons/youtube.png";
import accreditation from "../assets/img/1.png";
import carouselImgWomans from "../assets/img/2.png";
import carouselImgHigherUps from "../assets/img/3.png";
import RSMKLFull from "../assets/logo-rsmkl-full.png";
import Carousel from "../components/main/Carousel";
import NewsCard from "../components/main/NewsCard";
import ServiceCard from "../components/main/ServiceCard";
import ReadMoreBtn from "../components/main/ReadMoreBtn";
import { servicedatas } from "../utils/services";
import {
  faEnvelope,
  faLink,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { infoDatas } from "../utils/informations";

const Welcome = () => {
  const images = [carouselImgHigherUps, accreditation, carouselImgWomans];
  return (
    <div>
      {/* decoration */}
      <div className="max-w-7xl bg-sky-500 mt-12 md:mt-20 px-4 py-2 shadow-lg rounded-b-xl mx-auto">
        <div className="flex flex-col justify-center md:flex-row md:space-x-8">
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
        className="grid grid-cols-1 md:grid-cols-2 gap-4 m-8 pt-0 md:pt-2"
      >
        <div>
          <Carousel srcImg={images} className="w-full" />
        </div>
        <div className="flex flex-col justify-center items-center px-8">
          <p className="text-4xl font-bold">
            Rumah Sakit Muhammadiyah Kalikapas
          </p>
          <p className="mt-8 text-justify indent-10 tracking-tight leading-snug">
            Kami resmi beroperasi sejak 8 April 2021. Terletak di Jalan Raya
            Mantup, RT.01/RW.02, Kalikapas, Sidomukti, Kecamatan Lamongan,
            Kabupaten Lamongan, Jawa Timur, 62218. Dengan motto &quot;Kesehatan
            Anda adalah Kerja dan Ibadah Kami&quot;, kami berkomitmen untuk
            memberikan pelayanan kesehatan yang unggul dan terjangkau demi
            kesembuhan pasien.
          </p>
          <div className="mt-4">
            <ReadMoreBtn goTo="/about" txtBtn="Tentang Kami" />
          </div>
        </div>
      </div>

      {/* services */}
      <div id="services" className="m-8 pt-4 md:pt-12">
        <div>
          <p className="font-bold text-3xl ms-4">Layanan</p>
          <p className="mt-4 ms-4 indent-8">
            Kami berusaha semaksimal mungkin untuk memberikan layanan yang
            unggul. Berikut ini adalah beberapa layanan yang tersedia di Rumah
            Sakit Muhammadiyah Kalikapas Lamongan yang bertipe D.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {servicedatas.map((service, index) => (
            <ServiceCard
              key={index}
              icon={<FontAwesomeIcon icon={service.icon} size="3x" />}
              title={service.title}
            />
          ))}

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
      <div id="information" className="m-8 pt-4 md:pt-12">
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
                  {infoDatas.map((info, index) => (
                    <NewsCard
                      key={index}
                      imgSrc={info.img}
                      title={info.title}
                      body={info.body}
                    >
                      <ReadMoreBtn txtBtn="Kunjungi" goTo={info.link} />
                    </NewsCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap space-x-4 space-y-2 md:space-y-0">
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
      <div id="contactUs" className="m-8 py-4 md:py-12">
        <div>
          <p className="font-bold text-3xl text-center">Hubungi Kami</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 rounded-lg shadow bg-gradient-to-b from-white via-sky-50 to-sky-200 ">
          <div className="flex justify-center items-center p-4">
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
          <div>
            <div className="p-4">
              <form id="formPengaduan" action="" name="formPengaduan">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      className="w-full block bg-gray-100/80 p-2 my-1 rounded shadow-sm"
                      placeholder="Nama Lengkap"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="w-full block bg-gray-100/80 p-2 my-1 rounded shadow-sm"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    name=""
                    id=""
                    placeholder="Ulasan, kritik, saran."
                    className="w-full block bg-gray-100/80 p-2 my-1 rounded shadow-sm"
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
                <a href="https://wa.link/1io1z3" target="_blank">
                  <img src={waIcon} alt="rsmkl-wa-icon" className="w-6 h-6" />
                </a>
                <img
                  src={gmailIcon}
                  alt="rsmkl-gmail-icon"
                  className="w-6 h-6"
                />
                <a
                  href="https://www.instagram.com/rsmkalikapas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                >
                  <img src={igIcon} alt="rsmkl-ig-icon" className="w-5 h-5" />
                </a>
                <a
                  href="http://www.youtube.com/@rsmkalikapaslamongan1157"
                  target="_blank"
                >
                  <img src={ytIcon} alt="rsmkl-yt-icon" className="w-6 h-6" />
                </a>
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
