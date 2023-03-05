import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";

const categories = [
  {
    name : "공지사항",
    value : "all"
  },
  {
    name : "자주 묻는 질문",
    value : "category1"
  },
  {
    name : "로그인 및 계정",
    value : "category2"
  },
  {
    name : "결제 및 환불",
    value : "category3"
  },
];

const FAQ = () => {
  const [category, setCatecory] = useState("all");
  
  return (
    <div>
      <CategoryFilter
        categories={categories}
        category={category}
        setCatecory={setCatecory}
      />
    </div>
  );
};

export default FAQ;