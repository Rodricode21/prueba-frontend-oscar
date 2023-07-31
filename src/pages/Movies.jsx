import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { getMovies } from "../services/getMovies";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CardMovie = styled.div`
  border: 1px solid black;
  min-height: 50px;
  padding: 8px;
  margin: 8px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
`;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    getMovies(page).then((res) => setMovies(res));
  }, [page]);
  console.log(movies);
  return (
    <Wrapper>
      {movies &&
        movies?.movies?.map((movie) => {
          return (
            <CardMovie key={movie.id}>
              <p>{movie.name}</p>
              <p>${movie.budget}</p>
              <p>{movie.date}</p>
              <p>{movie.duration}(minutes)</p>
            </CardMovie>
          );
        })}
      {movies && (
        <PaginationContainer>
          <Pagination
            count={movies.totalPages}
            defaultPage={page}
            onChange={(e, value) => setPage(value)}
          />
        </PaginationContainer>
      )}
    </Wrapper>
  );
};

export default Movies;
