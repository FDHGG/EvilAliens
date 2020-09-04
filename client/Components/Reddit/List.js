import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";

export default () => {
  const [posts, setPosts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filter, setFilter] = useState("");
  const [curr,setCurr] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      if(filters.length != 0 || filter != '') {
        setFilters(filter.split(","));
      }
    }, 2000);

    return () => {
      window.clearTimeout(t);
    };
  }, [filter]);

  const loadPosts = (next = null, prev = null) => {
    let url = "";
    if (filters[0] && filters[0] != "") {
      const q = filters.join("+OR+");
      url = `https://www.reddit.com/r/all/search.json?q=${q}`;
    } else {
      url = "https://www.reddit.com/r/all/.json";
    }
    if (next) {
      url +=
        filters[0] && filters[0] != "" ? `&after=${next}` : `?after=${next}`;
    } else if (prev) {
      url +=
        filters[0] && filters[0] != "" ? `&before=${prev}` : `?before=${prev}`;
    }
    axios
      .get(url)
      .then(({ data }) => {
        setPosts(data.data.children);
      })
      .catch((err) => console.log(err));
  };

  const nextPage = () => {
    setCurr(curr+1);
    loadPosts(posts[posts.length - 1].data.name,null);
  }

  const prevPage = () => {
    if(curr != 0) {
      setCurr(curr-1);
      loadPosts(false, posts[0].data.name);
    }
  }
  useEffect(() => {
    loadPosts(null,null,curr);
  }, [filters]);

  return (
    <React.Fragment>
      <div className="filter">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Separate keywords with ,"
        />
      </div>
      {posts.length == 0 ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <React.Fragment>
          <div className="posts">
            {posts.map((x) => (
              <Card key={x.data.id} post={x.data} />
            ))}
          </div>
          <div className="controls">
            <div onClick={nextPage}>
              Next <span className="right">{'>'}</span>
            </div>
            <div onClick={prevPage}>
              <span className="left">{'<'}</span> Prev
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
