import Image from "next/image";

type Physio = {
  slug: string;
  image: string;
  name: string;
  university: string;
  qualifications: string;
  specialization: string;
  certifications: string;
  yearsExperience: string;
};

export default function PhysioCard({ physio }: { physio: Physio }) {
  return (
    <div
      id={physio.slug}
      className="scroll-mt-24 rounded-2xl border border-border bg-white p-8"
    >
      <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full border-2 border-border">
        <Image
          src={physio.image}
          alt={physio.name}
          fill
          className="object-cover"
        />
      </div>
      <p className="mt-6 text-center text-xl font-semibold text-text">
        {physio.name}
      </p>
      <p className="mt-1 text-center text-sm font-medium text-primary">
        {physio.qualifications}
      </p>
      <p className="mt-4 text-center text-sm text-muted">{physio.university}</p>
      <p className="mt-4 text-center text-sm text-text">{physio.specialization}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <span className="rounded-full bg-bg-alt px-3 py-1 text-xs font-medium text-primary-dark">
          {physio.certifications}
        </span>
        <span className="rounded-full bg-bg-alt px-3 py-1 text-xs font-medium text-primary-dark">
          {physio.yearsExperience} years experience
        </span>
      </div>
    </div>
  );
}