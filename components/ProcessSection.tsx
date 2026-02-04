import ParallaxOverlay from './ParallaxOverlay'

const steps = [
  {
    number: '1',
    title: 'Reach Out',
    description: 'Call us or send a request with details and photos of your project.',
  },
  {
    number: '2',
    title: 'Get a Quote',
    description: 'Receive a clear estimate and timeline for your project.',
  },
  {
    number: '3',
    title: 'We Do the Work',
    description: 'On time, professional, and clean. We treat your home like our own.',
  },
  {
    number: '4',
    title: 'Enjoy Your Home',
    description: "We confirm you're satisfied before we consider the job complete.",
  },
]

export default function ProcessSection() {
  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden border-t border-gray-200">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 drop-shadow-lg">
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold max-w-2xl mx-auto">
            Simple, straightforward process from start to finish.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 hover:scale-125 transition-all duration-300 shadow-2xl hover:shadow-3xl drop-shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 drop-shadow-sm transition-colors duration-300 group-hover:text-primary">
                {step.title}
              </h3>
              <p className="text-gray-700 font-medium text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
