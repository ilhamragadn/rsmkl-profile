import gmailIcon from "./assets/icons/gmail.png";
import igIcon from "./assets/icons/instagram.png";
import waIcon from "./assets/icons/whatsapp.png";
import ytIcon from "./assets/icons/youtube.png";
import RSMKLFull from "./assets/logo-rsmkl-full.png";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-full bg-gradient-to-b from-white via-sky-200 to-sky-600 py-4 px-24 mx-2 rounded-t-md">
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
  );
};

export default Footer;
