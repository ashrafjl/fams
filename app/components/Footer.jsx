import Image from "next/image";
import React from "react";
import Twitter from "../icons/Twitter";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";

const Footer = () => {
  return (
    <>
      <footer className="mt-[100px] gap-4 bg-[#E7E9EB] flex md:flex-row flex-col items-center py-12 sm:px-[80px] px-[40px]">
        <div className="flex-1">
          <div>
            <Image
              src={"/images/fams-logo-no-bg.png"}
              width={300}
              height={150}
            />
          </div>
          <div>
            <p className="mt-3 text-lg text-text-color max-w-[350px]">
              <strong className="text-primary">Address:</strong>Suite No: 806,
              DAMAC Business Tower, Business Bay, Dubai - UAE
            </p>
            <p className="mt-3 text-lg text-text-color max-w-[350px]">
              <strong className="text-primary">P.O. Box:</strong>19031
            </p>
            <p className="mt-3 text-lg text-text-color max-w-[350px]">
              <strong className="text-primary">Factory Address: </strong>4 20 St
              - Al Quoz - Al Quoz Industrial Area 4 - Dubai
            </p>
          </div>
        </div>
        <div className="flex-1">
          <p className="mt-3 text-lg text-text-color max-w-[350px]">
            <strong className="text-primary">Mobile:</strong>+971 55 2022455
          </p>
          <p className="mt-3 text-lg text-text-color max-w-[350px]">
            <strong className="text-primary">Phone:</strong>+971 4 4528798
          </p>
          <p className="mt-3 text-lg text-text-color max-w-[350px]">
            <strong className="text-primary">Fax:</strong>+971 4 4528949
          </p>
          <p className="mt-3 text-lg text-text-color max-w-[350px]">
            <strong className="text-primary">Email: </strong>
            infofamsevents.com
          </p>
          <div className="flex gap-6 mt-6">
            <Twitter classes={"size-5"} />
            <Facebook classes={"size-5"} />
            <Instagram classes={"size-5"} />
            <span className="flex items-center justify-center">
              <Image
                src={"/images/whatsapp.svg"}
                width={16}
                height={16}
                alt="whatsapp"
              />
            </span>
          </div>
        </div>
        <div className="flex-1 border border-primary rounded-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28885.375230335165!2d55.268966!3d25.180554!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69ccea2e580b%3A0x7947fd3f3d09693d!2sGLOBAL%20BRANDING%20Events%20%26%20Exhibitions%20%7C%20Exhibition%20Stand%20Contractor%20in%20Dubai%2C%20UAE!5e0!3m2!1sen!2sus!4v1727578969383!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: "none", width:'100%', height: '100%', minHeight:'400px'}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>
      <div className="bg-[#DDDDDD] flex md:flex-row flex-col items-center md:justify-between justify-center sm:px-[80px] px-[40px] py-6">
            <div>
                <p className="text-sm text-primary font-semibold">
                © Copyright 2024 <span className="text-secondary font-bold">FAMS Events & Exhibition</span>. All Right Reserved</p>
            </div>
            <div>
                <p className="text-sm text-primary font-semibold">
                    Designed & Developed by <a href="" className="text-secondary">Ashraf Jamal</a>
               </p>
            </div>
      </div>
    </>
  );
};

export default Footer;
