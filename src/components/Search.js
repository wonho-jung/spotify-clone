import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCategories } from "../features/userSlice";
import Header from "./Header";
import SearchPost from "./SearchPost";
import SearchHeader from "./SearchHeader";
function Search({ spotify }) {
  const category = useSelector(selectCategories);
  console.log(category.category);

  return (
    <SearchContainer>
      <SearchHeader spotify={spotify} />
      <h3>Browse all</h3>
      <CategoryContainer>
        <Test>
          {category?.category.categories?.items.map((item, idx) => (
            <SearchPost
              key={idx}
              id={item.id}
              spotify={spotify}
              image={item.icons[0].url}
              name={item.name}
            />
          ))}
        </Test>
      </CategoryContainer>
    </SearchContainer>
  );
}

export default Search;

const SearchContainer = styled.div`
  padding: 30px;
  flex: 0.8;
  height: 100vh;
  color: white;

  overflow: auto;
  background-color: #121212;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const CategoryContainer = styled.div`
  width: 100%;
`;
const Test = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
