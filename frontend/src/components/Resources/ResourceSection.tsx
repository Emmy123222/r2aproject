import React from "react";

interface Resource {
  title: string;
  description: string;
  link?: string; // Optional link to external resource
}

interface ResourceSectionProps {
  title: string;
  resources: Resource[];
}

const ResourceSection: React.FC<ResourceSectionProps> = ({ title, resources }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-2">
        {title}
      </h2>

      {/* Resource List */}
      <ul className="space-y-4">
        {resources.map((resource, index) => (
          <li key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
            <h3 className="text-xl font-semibold text-gray-700">
              {resource.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{resource.description}</p>
            {resource.link && (
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-2 block"
              >
                Learn More
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Basic: React.FC = () => {
  const sections = [
    {
      title: "Sermons/Podcasts",
      resources: [
        {
          title: "Sunday Sermon - Faith in Action",
          description: "An inspiring message on living out your faith in everyday life.",
          link: "#",
        },
        {
          title: "Podcast: The Power of Prayer",
          description: "Insights and testimonies on the transformative power of prayer.",
        },
      ],
    },
    {
      title: "Blog",
      resources: [
        {
          title: "Finding Hope in Uncertain Times",
          description: "A reflection on maintaining hope and trust during challenging seasons.",
          link: "#",
        },
        {
          title: "The Joy of Giving",
          description: "Exploring the blessings of generosity and giving.",
        },
      ],
    },
    {
      title: "Recommended Reading",
      resources: [
        {
          title: "The Purpose Driven Life by Rick Warren",
          description: "A best-selling book on finding meaning and purpose in life.",
          link: "#",
        },
        {
          title: "Mere Christianity by C.S. Lewis",
          description: "A classic work on the essentials of the Christian faith.",
        },
      ],
    },
    {
      title: "Faith-Based Resources",
      resources: [
        {
          title: "Bible Study Guide",
          description: "A comprehensive guide for studying the Bible in-depth.",
          link: "#",
        },
        {
          title: "Daily Prayer Devotion",
          description: "A daily guide for intentional and focused prayer.",
        },
      ],
    },
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto p-6">
      {sections.map((section, index) => (
        <ResourceSection
          key={index}
          title={section.title}
          resources={section.resources}
        />
      ))}
    </div>
  );
};

export default Basic;
