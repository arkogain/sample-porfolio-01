import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="border-t-2">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-5">
            <div className="">Designed & Development By Arko Gain</div>
            <div className="">Copyright@24 AG.</div>
            <div className="flex justify-center gap-4 items-center">
              <Github />
              <Facebook />
              <Instagram />
              <Linkedin />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
