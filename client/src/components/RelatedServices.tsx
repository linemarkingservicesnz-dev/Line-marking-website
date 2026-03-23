import { Link, useLocation } from "wouter";

const allServices = [
  { href: "/car-park-line-marking/", label: "Car Park Line Marking" },
  { href: "/warehouse-line-marking/", label: "Warehouse Line Marking" },
  { href: "/epoxy-flooring/", label: "Epoxy Flooring" },
  { href: "/non-slip-flooring/", label: "Non-Slip Flooring" },
  { href: "/protective-concrete-coatings/", label: "Protective Concrete Coatings" },
  { href: "/pedestrian-walkways/", label: "Pedestrian Walkways" },
  { href: "/sports-court-line-marking/", label: "Sports Court Line Marking" },
  { href: "/playground-markings/", label: "Playground Markings" },
  { href: "/line-removal/", label: "Line Removal" },
];

export function RelatedServices() {
  const [location] = useLocation();
  const services = allServices.filter((s) => s.href.replace(/\/$/, "") !== location.replace(/\/$/, ""));

  return (
    <div className="border-t border-gray-200 pt-8 mt-8 mb-8">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Related Services</h2>
      <ul className="flex flex-wrap gap-2">
        {services.map((service) => (
          <li key={service.href}>
            <Link href={service.href}>
              <span
                className="inline-block bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-700 text-sm font-medium px-4 py-2 rounded-md transition-colors cursor-pointer border border-gray-200 hover:border-blue-200"
                data-testid={`link-related-${service.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {service.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
