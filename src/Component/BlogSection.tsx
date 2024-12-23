import BlogCard from "./BlogCard";

const data = [
  {
    img: "./img/post__1.webp",
    title: "Healthy Food Healthy Life",
    date: "Aug 27, 2023",
    comment: 8,
  },
  {
    img: "./img/post__2.webp",
    title: "Healthy Food Healthy Life",
    date: "Aug 25, 2023",
    comment: 1,
  },
  {
    img: "./img/post__3.webp",
    title: "Healthy Food Healthy Life",
    date: "Aug 30, 2023",
    comment: 6,
  },
];

function BlogSection() {
  return (
    <div className="container pt-16">
      <h2 className="font-bold text-2xl">Latest News</h2>
      <p className="text-gray-600 mt-2">
        Present posts in a best way to highlight interesting moments of yours
        blogs.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
        {data.map((ele) => {
          return (
            <BlogCard
              key={ele.date}
              img={ele.img}
              title={ele.title}
              date={ele.date}
              comment={ele.comment}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BlogSection;
