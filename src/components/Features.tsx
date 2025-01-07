import React from "react";

const features = [
  {
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: "🔒",
  },
  {
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    icon: "⚡",
  },
  {
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.",
    icon: "📊",
  },
  {
    title: "Connect with customers",
    description:
      "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    icon: "💬",
  },
  {
    title: "Connect the tools you already use",
    description:
      "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    icon: "🔗",
  },
  {
    title: "Our people make the difference",
    description:
      "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    icon: "👩‍💻",
  },
];

const Features = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-red-500 font-bold mb-4">Features</h2>
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Analytics that feels like it’s from the future
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
