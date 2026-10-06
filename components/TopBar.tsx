import { clinicConfig } from "@/content/clinic-config";

export default function TopBar() {
  return (
    <div className="bg-primary-dark text-white text-xs sm:text-sm">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
        <a
          href={`tel:${clinicConfig.contact.phone}`}
          className="font-medium text-white hover:text-white/80"
        >
          {clinicConfig.contact.phone}
        </a>
        <span className="hidden sm:inline text-white/80">
          {clinicConfig.hospital.name}
        </span>
      </div>
    </div>
  );
}