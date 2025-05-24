"use client"

const ExamplesClientPage = () => {
  const examples = [
    {
      id: 1,
      title: "Nexara Initiative Dashboard",
      description: "Complete dashboard showing all three Nexara initiatives with real-time data",
      category: "Dashboard",
      difficulty: "Intermediate",
      image: "/infinity-nexus-concept.png",
      demoUrl: "/overview",
      codeUrl: "/examples/initiative-dashboard",
      tags: ["Dashboard", "Yunus Inspire", "Trusted Ally", "Infinity Nexus"],
    },
    {
      id: 2,
      title: "Yunus Inspire Data Visualization",
      description: "Interactive charts and metrics for the Yunus Inspire initiative",
      category: "Data Visualization",
      difficulty: "Advanced",
      image: "/yunus-legacy-concept.png",
      demoUrl: "/yunus-inspire",
      codeUrl: "/examples/yunus-inspire-viz",
      tags: ["Charts", "Analytics", "Yunus Inspire"],
    },
    {
      id: 3,
      title: "Trusted Ally Community Platform",
      description: "Community features and social impact tracking for Trusted Ally",
      category: "Community",
      difficulty: "Intermediate",
      image: "/trusted-ally-concept.png",
      demoUrl: "/trusted-ally",
      codeUrl: "/examples/trusted-ally-community",
      tags: ["Community", "Social Impact", "Trusted Ally"],
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Nexara Examples & Demos</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore practical examples and real-world implementations of Nexara platform features. See how Yunus Inspire,
          Trusted Ally, and Infinity Nexus work in action.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured: Nexara Initiative Tracking</h2>
        <p className="text-gray-600 mb-6">
          A comprehensive example showing how to integrate all three Nexara initiatives into a unified tracking system.
        </p>
        {/* Featured Example Component Here */}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {examples.map((example) => (
          <div key={example.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={example.image || "/placeholder.svg"} alt={example.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{example.title}</h3>
              <p className="text-gray-600 mb-4">{example.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{example.category}</span>
                <span className="text-sm text-gray-500">Difficulty: {example.difficulty}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build with Nexara?</h2>
        <p className="text-gray-600 mb-6">Start implementing these examples in your own Nexara-powered applications</p>
        {/* CTA Component Here */}
      </section>
    </div>
  )
}

export default ExamplesClientPage
