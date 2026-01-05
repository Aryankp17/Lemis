import React, { use, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchphoto, fetchvideo, fetchgif } from "../api/media-api";
import {
  SetError,
  setActivetab,
  SetLoading,
  SetQuery,
  SetResult,
  StopLoading,
} from "../redux/features/searchslice";
import { get } from "react-hook-form";
import Box from "./Box";

const SearchResult = () => {
  const { query, Activetab, Result, loading, error } = useSelector(
    (store) => store.Search
  );
  const dispatch = useDispatch();

  const getdata = async () => {
    try {
      dispatch(SetLoading(true))
      dispatch(SetError(null))
      let data;
      if (Activetab === "Photo") {
        let res = await fetchphoto(query);
        data = res;
      }
      if (Activetab === "Video") {
        let res = await fetchvideo(query);
        data = res;
      }
      if (Activetab === "GIF") {
        let res = await fetchgif(query);
        data = res;
      }
      dispatch(SetResult(data));
    } catch (error) {
      dispatch(SetError(error.message));
    } finally {
      dispatch(StopLoading(false));
    }
  };
  const Results = (
    <div className="h-[80vh] overflow-auto flex mt-2 lg:mt-0 grid mx-auto lg:grid-cols-4 relative z-10 grid-cols-2 px-4 py-2 justify-items-center gap-y-5 w-full">
      {loading && (
        <h1 className="absolute inset-0 bg-black/50 text-white flex items-center justify-center z-1">Loading...</h1>
      )}
      {error && (
        <h1 className="absolute inset-0 bg-black/50 text-white flex items-center justify-center z-1">
          Something went wrong!
        </h1>
      )}
      {!loading && !error && Result.length === 0 && (
        <h1 className="absolute inset-0 bg-black/50 text-white flex items-center justify-center z-1">No Results Found</h1>
      )}
      {!loading &&
        !error &&
        Result.length > 0 &&
        Result.map((item, idx) => {
          return <Box item={item} key={idx} />;
        })}
    </div>
  );
  useEffect(() => {
    if(query.trim() !== "") {
      getdata();
    }
  }, [Activetab, query]);
  return <>{Results}</>;
};

export default SearchResult;
