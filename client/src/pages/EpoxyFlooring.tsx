import { ServiceLayout } from "@/components/ServiceLayout";

export default function EpoxyFlooring() {
  return (
    <ServiceLayout
      title="Epoxy Flooring Systems"
      subtitle="Heavy-Duty, Seamless & Decorative Options"
      heroImage="https://images.unsplash.com/photo-1634839818817-f273b57368ce?auto=format&fit=crop&q=80" // epoxy floor
    >
      <div className="space-y-6 text-slate-600">
        <p className="lead text-xl font-medium text-slate-800">
          Epoxy resin flooring offers the ultimate combination of toughness and visual appeal. It creates a seamless, impervious surface ideal for environments requiring strict hygiene or heavy impact resistance.
        </p>

        <h2 className="text-2xl font-bold text-secondary font-display uppercase mt-8">High-Build Epoxy</h2>
        <p>
          A thick, self-leveling coating available in any color. Perfect for showrooms, workshops, and high-end garages. It hides minor imperfections in the concrete and provides a glass-like finish.
        </p>

        <h2 className="text-2xl font-bold text-secondary font-display uppercase mt-8">Flake Systems</h2>
        <p>
          Decorative vinyl chips are broadcast into the wet epoxy and sealed with a UV-stable topcoat. This "terrazzo-style" look is extremely popular for:
        </p>
        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
          <li>Residential garages</li>
          <li>Retail spaces</li>
          <li>School amenities</li>
          <li>Locker rooms</li>
        </ul>

        <h2 className="text-2xl font-bold text-secondary font-display uppercase mt-8">Chemical Resistance</h2>
        <p>
          We offer novolac epoxy systems designed to withstand harsh chemicals, acids, and solvents, making them suitable for battery charging stations, chemical bunds, and laboratories.
        </p>
      </div>
    </ServiceLayout>
  );
}
