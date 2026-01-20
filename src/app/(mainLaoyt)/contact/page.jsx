"use client";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const ContactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    details: "+880 1234 567 890",
    subDetails: "Sat - Thu, 9am - 8pm",
    color: "bg-primary",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    details: "info@homecare.com",
    subDetails: "Online support 24/7",
    color: "bg-secondary",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Visit Us",
    details: "Rangpur City, Bangladesh",
    subDetails: "Central Care Hub",
    color: "bg-primary",
  },
];

const Contact = () => {
  return (
    <section className="bg-background pt-32 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-foreground">
            How Can We <span className="text-secondary">Help</span> You?
          </h3>
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto text-lg">
            Have questions about our services or need to book a caregiver? Reach
            out to us, and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Side: Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {ContactInfo.map((info, i) => (
              <div
                key={i}
                className="flex items-center gap-6 p-8 rounded-[2.5rem] bg-primary/5 border border-primary/10 hover:border-primary/30 transition-all group"
              >
                <div
                  className={`${info.color} text-white p-4 rounded-2xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform`}
                >
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-xl">
                    {info.title}
                  </h4>
                  <p className="text-foreground/80 font-medium">
                    {info.details}
                  </p>
                  <p className="text-foreground/40 text-xs uppercase tracking-wider">
                    {info.subDetails}
                  </p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="p-8 rounded-[2.5rem] bg-secondary/5 border border-secondary/10">
              <h4 className="font-bold text-foreground mb-4">
                Follow Our Updates
              </h4>
              <div className="flex gap-4">
                {[<FaFacebookF />, <FaLinkedinIn />, <FaWhatsapp />].map(
                  (social, idx) => (
                    <button
                      key={idx}
                      className="w-12 h-12 rounded-xl bg-background border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                    >
                      {social}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-primary/5 dark:bg-primary/10 p-8 md:p-12 rounded-[3rem] border border-primary/10 shadow-2xl shadow-primary/5">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/70 ml-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-background border border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/70 ml-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="+880 1XXX XXXXXX"
                      className="w-full px-6 py-4 rounded-2xl bg-background border border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/70 ml-2">
                    Select Service
                  </label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-background border border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground appearance-none">
                    <option>Nursing Care</option>
                    <option>Elderly Care</option>
                    <option>Physiotherapy</option>
                    <option>Baby Sitting</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/70 ml-2">
                    Your Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Tell us how we can assist you..."
                    className="w-full px-6 py-4 rounded-2xl bg-background border border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 active:scale-95">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
