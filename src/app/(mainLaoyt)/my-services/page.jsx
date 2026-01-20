import { getAllServices } from "@/service/service.service";
import ServiceClientSide from "./_components/ServiceClientSide";

const MyService = async () => {
  const allService = await getAllServices();

  return (
    <main className="bg-background min-h-screen pt-24 pb-20">
      <div className="max-w-362.5 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black text-foreground">
            Our <span className="text-primary">Medical</span> Services
          </h1>
          <p className="text-foreground/60 mt-4 text-lg max-w-2xl font-medium">
            Professional healthcare services delivered directly to your home in
            Rangpur Division.
          </p>
        </div>

        <ServiceClientSide initialServices={allService} />
      </div>
    </main>
  );
};

export default MyService;
