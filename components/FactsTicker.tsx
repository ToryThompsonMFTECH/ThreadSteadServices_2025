'use client'

const homeImprovementFacts = [
  "Regular maintenance can prevent 80% of home repair emergencies",
  "A well-maintained home can increase property value by up to 10%",
  "Fixing leaks promptly can save up to 10% on water bills",
  "Proper insulation can reduce heating and cooling costs by 20-30%",
  "Annual home maintenance typically costs 1-3% of your home's value",
  "Replacing weatherstripping can reduce energy costs by 10-15%",
  "Regular HVAC maintenance can extend system life by 5-10 years",
  "Caulking windows and doors can save up to $200 annually on energy bills",
  "A fresh coat of paint can increase home value by 2-5%",
  "Fixing small issues early prevents costly major repairs later",
  "Proper ventilation prevents mold and improves indoor air quality",
  "Regular gutter cleaning prevents foundation and roof damage",
  "Upgrading to LED lighting can reduce energy costs by 75%",
  "Sealing air leaks can improve home comfort and reduce energy bills",
  "Professional installation ensures warranties and code compliance",
]

export default function FactsTicker() {
  // Duplicate facts for seamless loop
  const duplicatedFacts = [...homeImprovementFacts, ...homeImprovementFacts]

  return (
    <section className="py-4 bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden relative border-y-2 border-primary-dark shadow-2xl" style={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.1)' }}>
      <div className="flex animate-scroll whitespace-nowrap">
        {duplicatedFacts.map((fact, index) => (
          <div
            key={index}
            className="flex items-center mx-12 flex-shrink-0"
          >
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-white flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm md:text-base font-semibold">
                {fact}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-primary via-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-primary-dark via-primary-dark to-transparent z-10 pointer-events-none" />
    </section>
  )
}

