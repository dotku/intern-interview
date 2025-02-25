export function BenefitCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
