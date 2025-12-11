import Image from "next/image";
import Button from "../components/Button";

export default function Footer() {
  return (
    <footer className="mt-16 py-12 pb-8 flex flex-col items-center gap-12 bg-this-blue-950 lg:px-36 lg:items-stretch">
      <nav className="flex flex-col items-center gap-8 md:flex-row md:items-start lg:justify-between">
        <div className="flex flex-col items-center gap-8 md:items-stretch md:gap-16">
          <Image
            className="w-auto"
            src="logo-light.svg"
            width={0}
            height={0}
            alt="Logo"
          />
          <div className="flex gap-4">
            <Image
              className="w-5 h-5 cursor-pointer"
              src="icon-facebook.svg"
              width={0}
              height={0}
              alt="Logo"
            />
            <Image
              className="w-5 h-5 cursor-pointer"
              src="icon-youtube.svg"
              width={0}
              height={0}
              alt="Logo"
            />
            <Image
              className="w-5 h-5 cursor-pointer"
              src="icon-twitter.svg"
              width={0}
              height={0}
              alt="Logo"
            />
            <Image
              className="w-5 h-5 cursor-pointer"
              src="icon-pinterest.svg"
              width={0}
              height={0}
              alt="Logo"
            />
            <Image
              className="w-5 h-5 cursor-pointer"
              src="icon-instagram.svg"
              width={0}
              height={0}
              alt="Logo"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 text-this-gray-50 text-center md:flex-row xl:gap-32 md:text-left">
          <ul className="flex flex-col gap-4">
            <li>
              <a className="hover:text-this-green-500" href="/#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-this-green-500" href="/#">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:text-this-green-500" href="/#">
                Blog
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li>
              <a className="hover:text-this-green-500" href="/#">
                Careers
              </a>
            </li>
            <li>
              <a className="hover:text-this-green-500" href="/#">
                Support
              </a>
            </li>
            <li>
              <a className="hover:text-this-green-500" href="/#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Button />
          <span className="text-this-gray-600">
            © Digitalbank. All Rights Reserved
          </span>
        </div>
      </nav>
      <div className="text-this-gray-50 text-sm self-center">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/vitorbrunobueno
"
        >
          Vitor Bruno
        </a>
        .
      </div>
    </footer>
  );
}
