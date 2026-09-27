type Physio = {
  name: string;
  university: string;
  qualifications: string;
  specialization: string;
  certifications: string;
  yearsExperience: string;
};

export default function PhysioCard({ physio }: { physio: Physio }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-8">
      <p className="text-xl font-semibold text-text">{physio.name}</p>
      <p className="mt-1 text-sm font-medium text-primary">
        {physio.qualifications}
      </p>
      <p className="mt-4 text-sm text-muted">{physio.university}</p>
      <p className="mt-4 text-sm text-text">{physio.specialization}</p>
      <div className="mt-6 flex flex-wrap gap-2">
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