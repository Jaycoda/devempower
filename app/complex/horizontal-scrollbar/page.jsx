import React from "react";
import HorizontalScrollbar from "@/components/horizontal-scrollbar/HorizontalScrollbar";

const categories = [
  "Gaming",
  "Music",
  "Beauty & Fashion",
  "Comedy",
  "Food & Cooking",
  "Travel & Adventure",
  "Health & Fitness",
  "Education & Learning",
  "DIY & Crafts",
  "Science & Technology",
  "Lifestyle",
  "Pets & Animals",
  "Sports & Athletics",
  "Cars & Automobiles",
  "Home & Garden",
  "Parenting & Family",
  "Finance & Investing",
  "News & Current Affairs",
  "Art & Design",
  "Film & Animation",
  "History & Archaeology",
  "Nature & Wildlife",
  "Business & Entrepreneurship",
  "Faith & Spirituality",
  "Relationships & Dating",
  "Mental Health & Wellness",
  "Photography & Videography",
  "Literature & Writing",
  "Hobbies & Interests",
  "Social Causes & Activism",
];

const users = [
  { id: 1, username: "U#1", image: "https://i.pravatar.cc/150?img=3" },
  { id: 2, username: "U#2", image: "https://i.pravatar.cc/150?img=4" },
  { id: 3, username: "U#3", image: "https://i.pravatar.cc/150?img=5" },
  { id: 4, username: "U#4", image: "https://i.pravatar.cc/150?img=6" },
  { id: 5, username: "U#5", image: "https://i.pravatar.cc/150?img=7" },
  { id: 6, username: "U#6", image: "https://i.pravatar.cc/150?img=8" },
  { id: 7, username: "U#7", image: "https://i.pravatar.cc/150?img=9" },
  { id: 8, username: "U#8", image: "https://i.pravatar.cc/150?img=10" },
  { id: 9, username: "U#9", image: "https://i.pravatar.cc/150?img=11" },
  { id: 10, username: "U#10", image: "https://i.pravatar.cc/150?img=12" },
  { id: 11, username: "U#11", image: "https://i.pravatar.cc/150?img=13" },
  { id: 12, username: "U#12", image: "https://i.pravatar.cc/150?img=14" },
  { id: 13, username: "U#13", image: "https://i.pravatar.cc/150?img=15" },
  { id: 14, username: "U#14", image: "https://i.pravatar.cc/150?img=16" },
];

const HorizontalScrollbarPage = () => {
  return (
    <div className="bg-white rounded-lg mx-4 p-4">
      <h1>HorizontalScrollbar</h1>
      <br />
      <br />
      <h1 className="text-blue-800 text-2xl">Youtube Catagories</h1>
      <HorizontalScrollbar>
        {categories.map((item, index) => (
          <div
            key={index}
            className="border-2 border-gray-200 p-1 shrink-0 rounded-lg hover:border-gray-400 cursor-pointer"
          >
            <h1>{item}</h1>
          </div>
        ))}
      </HorizontalScrollbar>

      <br />
      <br />
      <h1 className="text-blue-800 text-2xl">Instagram Stories</h1>
      <HorizontalScrollbar>
        {users.map((item) => (
          <div key={item.id} className=" shrink-0">
            <img
              src={item.image}
              alt={item.username}
              className="w-14 h-14 rounded-full cursor-pointer hover:scale-125 transition-all duration-200"
            />
          </div>
        ))}
      </HorizontalScrollbar>
    </div>
  );
};

export default HorizontalScrollbarPage;
