import SearchBar from "material-ui-search-bar";
import React, { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  z-index: 1;
  height: 12px;
  white-space: nowrap;
  padding: 5px 10px;
  width: 500px;
    .ForwardRef-iconButton-2{
        color: white;
        background: #55AABE;
        border-radius: 0px 4px 4px 0px;
    }
    .ForwardRef-root-1 {
        height: 38px;
    }
    .MuiInputBase-root{
        font-size: 12px;
    }
    .MuiPaper-elevation1{
        filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.1)) drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.1)) drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.1));
    }
`;




const Search = (props) => {
  return (
    <SearchContainer>
        <SearchBar
            // dataSource={state.dataSource}
            // onChange={(value) => setState({dataSource: [ value, value+value, value+value+value]})}
            placeholder="What do you want to learn?"
            onRequestSearch={() => console.log('onRequestSearch')}
            style={{
                margin: '0 auto',
                maxWidth: 800,
                color: '#55AABE',
            }}
        />
    </SearchContainer>
  );
}

export default Search;

