import { CheckCircle } from "lucide-react";

export default function ProcessStep({
  number,
  icon,
  title,
  description,
  details,
}) {
  return (
    <div className="relative flex items-start">
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full text-xl font-bold">
        {number}
      </div>
      <div className="ml-6">
        <div className="flex items-center mb-2">
          <div className="text-blue-600 mr-3">{icon}</div>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4 text-lg">{description}</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {details.map((detail, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
