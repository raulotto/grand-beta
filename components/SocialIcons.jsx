// components/SocialIcons.jsx
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok } from 'react-icons/fa'

const socialLinks = [
  { icon: <FaFacebookF />, url: 'https://facebook.com' },
  { icon: <FaInstagram />, url: 'https://instagram.com' },
  { icon: <FaYoutube />, url: 'https://youtube.com' },
  { icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
  { icon: <FaTiktok />, url: 'https://tiktok.com' },
]

export default function SocialIcons() {
  return (
    <div className="ContainerFlex justify-start items-center p-0 gap-4 mt-4">
      {socialLinks.map((item, idx) => (
        <a
          key={idx}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-primary-dune transition"
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}
