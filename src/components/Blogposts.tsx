import React from "react";
import blog1 from "../../assets/blog1.svg";
import blog2 from "../../assets/blog2.svg";
import blog3 from "../../assets/blog3.svg";
import avatar1 from "../../assets/Avatar1.svg";
import avatar2 from "../../assets/Avatar2.svg";
import avatar3_blog from "../../assets/Avatar3_blog.svg";
import diagonal_arrow from "../../assets/diagonal_arrow.svg";
import Image from "next/image";

const Blogposts = () => {
  const posts = [
    {
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      profile: avatar2,
      date: "20 Jan 2024",
      image: blog1,
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      author: "Phoenix Baker",
      profile: avatar1,
      date: "19 Jan 2024",
      image: blog2,
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      profile: avatar3_blog,
      date: "18 Jan 2024",
      image: blog3,
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="sm:flex justify-between mb-8">
          <div>
            <h2 className="text-base text-red-500 font-semibold mb-3">
              Our blog
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-gray-900">
              Lastest blog posts
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Tool and strategies modern teams need to help their companies
              grow.
            </p>
          </div>
          <div>
            <button className="hidden md:flex text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded-md font-semibold">
              View all posts
            </button>
          </div>
        </header>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="px-2 py-6 md:p-6">
                  <p className="text-sm text-red-500 font-semibold">
                    {post.category}
                  </p>
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold mt-2 text-gray-900">
                      {post.title}
                    </h4>
                    <Image src={diagonal_arrow} alt="" width={24} height={24} />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {post.description}
                  </p>
                  <div className="flex items-center mt-4">
                    <Image
                      src={post.profile}
                      alt={post.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {post.author}
                      </p>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div>
            <button className="md:hidden w-full text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded-md font-semibold">
              View all posts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogposts;
