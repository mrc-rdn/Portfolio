import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";




export default function Connect() {
  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/john-marco-ardina-71b166371/",
      icon: <FaLinkedin />,
      color: "text-blue-600 hover:text-blue-500",
    },
    {
      name: "GitHub",
      url: "https://github.com/mrc-rdn",
      icon: <FaGithub />,
      color: "text-gray-400 hover:text-gray-200",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/marco.ardina.1",
      icon: <FaFacebook  />,
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mrc_rdna/",
      icon: <FaSquareInstagram />,
      color: "text-red-500/80 hover:text-red-400",
    },
  ];

  return (
    <section className="lg:w-4/12  w-full justify-center flex pt-30 px-10">
      <div className="text-center max-w-2xl">
        <h2 className="text-4xl font-bold text-white mb-6">
          Connect With <span className="text-lime-600">Me</span>
        </h2>
        <p className="text-gray-400 mb-10">
          I’m always open to networking, collaborations, or just a friendly hello!
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`transtion duration-500 flex flex-col items-center gap-2 transition transform hover:-translate-y-1`}
            >
              <div
                className={`text-5xl ${link.color} transition duration-300`}
              >
                {link.icon}
              </div>
              <span className="text-gray-200">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
