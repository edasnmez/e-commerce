import {  Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="font-montserrat text-white bg-[#252B42] px-[195px] pt-12 pb-4 flex flex-col gap-14 max-[420px]:px-24">

      <div className="flex justify-between items-start max-[420px]:flex-col max-[420px]:gap-12">
        <div >
          <h2 className="text-2xl font-bold mb-2">Consulting Agency For Your Business</h2>
          <p className="text-sm text-white">
           the quick fox jumps over the lazy dog
          </p>
        </div>
        <div >
          <button className="bg-[#23A6F0] text-white text-sm font-bold px-10 py-3.5 rounded-md hover:bg-[#23A6F0]/90 transition tracking-wide">
            Contact Us
          </button>
        </div>
      </div>


      <div className="flex justify-between font-bold max-[420px]:flex-col max-[420px]:gap-12">
        <div>
          <h4 className="text-lg  mb-4">Company Info</h4>
          <ul className="space-y-2 text-sm text-white">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Carrier</a></li>
            <li><a href="#">We are hiring</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg  mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-white">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Carrier</a></li>
            <li><a href="#">We are hiring</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg  mb-4">Features</h4>
          <ul className="space-y-2 text-sm text-white">
            <li><a href="#">Business Marketing</a></li>
            <li><a href="#">User Analytic</a></li>
            <li><a href="#">Live Chat</a></li>
            <li><a href="#">Unlimited Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg  mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-white">
            <li><a href="#">IOS & Android</a></li>
            <li><a href="#">Watch a Demo</a></li>
            <li><a href="#">IOS & Android</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg  mb-4">Get In Touch</h4>
          <ul className="space-y-2 text-sm text-white">
            <li className="flex items-center gap-2 "><Phone  /><span>(480) 555-0103</span></li>
            <li className="flex items-center gap-2 "> <MapPin /> <span>4517 Washington Ave.</span> </li>
            <li className="flex items-center gap-2 "> <Mail /> <span>debra.holt@example.com</span></li>

          </ul>
        </div>

      </div>

      <div className="flex justify-between max-[420px]:flex-col max-[420px]:py-6 max-[420px]:gap-12">
        <div>
          <p className="text-sm font-bold">Made With Love By Finland All Right Reserved </p>
        </div>
        <div className="flex gap-3 text-[#23A6F0]">
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
      </div>
    </footer>
  );
}
