import { useState, useEffect } from "react";
import CourseCard from "../components/course-card";

const courses = [
  {
    title: "Full Stack Web Development",
    description:
      "Learn to build dynamic, responsive, and scalable web applications using front-end and back-end technologies like HTML, CSS, JavaScript, Node.js, and databases.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    id: 2,
    duration: "16 weeks",
    beginnerFriendly: true,
  },
  {
    title: "Python for Beginners",
    description:
      "Start your programming journey with Python. Learn the basics of Python syntax, data structures, and problem-solving techniques.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
    id: 3,
    duration: "8 weeks",
    beginnerFriendly: true,
  },
  {
    title: "Advanced Python",
    description:
      "Dive deeper into Python with advanced topics like decorators, generators, multithreading, and working with APIs.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    id: 4,
    duration: "10 weeks",
    beginnerFriendly: false,
  },
  {
    title: "Data Analytics",
    description:
      "Master data analysis techniques using tools like Python, Pandas, NumPy, and data visualization libraries like Matplotlib and Seaborn.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    id: 5,
    duration: "12 weeks",
    beginnerFriendly: false,
  },
  {
    title: "Java for Beginners",
    description:
      "Learn the fundamentals of Java programming, including object-oriented programming, data types, and control structures.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    id: 6,
    duration: "8 weeks",
    beginnerFriendly: true,
  },
  {
    title: "UI/UX Design",
    description:
      "Discover the principles of user interface and user experience design, including wireframing, prototyping, and usability testing.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    id: 7,
    duration: "10 weeks",
    beginnerFriendly: true,
  },
  {
    title: "Mobile App Development",
    description:
      "Build cross-platform mobile applications using frameworks like React Native, and learn to deploy apps to app stores.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    id: 8,
    duration: "14 weeks",
    beginnerFriendly: false,
  },
  {
    title: "Digital Marketing",
    description:
      "In this course, you'll learn how to create effective online marketing strategies, optimize social media campaigns, and analyze digital marketing metrics to grow any business.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a",
    id: 9,
    duration: "12 weeks",
    beginnerFriendly: true,
  },
  {
    title: "Graphics Design",
    description:
      "Learn the fundamentals of graphic design, including typography, color theory, and using tools like Adobe Photoshop and Illustrator.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
    id: 10,
    duration: "10 weeks",
    beginnerFriendly: true,
  },
  {
    title: "Cybersecurity",
    description:
      "Understand the basics of cybersecurity, including network security, encryption, and ethical hacking techniques.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    id: 11,
    duration: "12 weeks",
    beginnerFriendly: false,
  },
  {
    title: "Advanced Java",
    description:
      "Explore advanced Java concepts like multithreading, JDBC, JavaFX, and building enterprise-level applications.",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2",
    id: 12,
    duration: "14 weeks",
    beginnerFriendly: false,
  },
  {
    title: "Cisco IT Essentials",
    description:
      "Gain foundational knowledge in IT, including hardware, software, networking, and troubleshooting techniques.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    id: 13,
    duration: "10 weeks",
    beginnerFriendly: true,
  },
];

const Courses = () => {
  //   const [courses, setCourses] = useState([]);
  //   const [error, setError] = useState("");
  //   const [loading, setLoading] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  // Filter courses based on the search query
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //   const fetchCourses = async () => {
  //     setLoading(true);

  //     try {
  //       const response = await fetch(
  //         "https://api.digitalfortressltd.com/course/v1/courses/"
  //       );

  //       const data = await response.json();
  //       setCourses(data);
  //       console.log(courses);
  //     } catch (error) {
  //       setError(error);
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchCourses();
  //   }, []);
  return (
    <>
      <div className="bg-gray-50 pt-56 pb-16">
        <div className="max-w-7xl mx-auto px-3 md:px-8">
          <h1 className="text-3xl md:text-5xl font-medium mb-3">Courses</h1>
          <p className="text-gray-700 font-normal text-sm md:text-base leading-7">
            Providing aspiring professionals with the tools and materials they
            need to explore <br className="hidden md:block" /> and develop in
            their chosen fields.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-3 md:px-8">
          <div className="flex justify-end mb-8">
            <input
              type="search"
              placeholder="Search for a course"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-red-500 focus:border-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  duration={course.duration}
                  image={course.image}
                  beginnerFriendly={course.beginnerFriendly}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 text-xl">
                  No courses available matching your search.
                </p>
                <p className="text-gray-500 mt-2">
                  Try a different keyword or browse all courses.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
