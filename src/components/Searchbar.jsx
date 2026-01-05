import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { fetchphoto, fetchvideo, fetchgif } from "../api/media-api";
import { useSelector,useDispatch } from "react-redux";
import { SetQuery } from "../redux/features/searchslice";
import { Link } from "react-router-dom";
import { Bookmark } from 'lucide-react';
const Searchbar = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.Search.query);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    dispatch(SetQuery(data.search))
    data.search = "";
  };
  return (
    <div className="lg:py-5 lg:px-8 p-2 w-full lg:h-20 h-22  flex items-center justify-between">
      <h1 onClick={()=> window.location.reload()} className="text-gray-200 text-3xl cursor-pointer mt-2 lg:mt-0 font-bold">Lemis!</h1>
      <form
        className=" w-[100%] lg:w-[50%] lg:h-[80%] items-center lg:justify-between justify-start flex lg:gap-3` lg:p-5 p-3 pt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input title="Search Anything"
          className=" border-2 lg:h-[80%] font-semibold text-xl self-center placeholder:text-gray-400 outline-0 text-white hover:bg-gray-900 hover:border-white  border-gray-400 lg:p-5 p-2 rounded-full w-[80%]"
          {...register("search", { required: true, maxLength: 30 })}
          type="text"
          placeholder="Search Anything..."
        />
        <button title="Search" className="border-2 lg:h-[50%] text-white flex lg:ml-0 ml-3 items-center rounded-full  text-center active:scale-95 hover:border-white border-gray-400 p-2 lg:px-3 lg:py-5">
          Search
        </button>
        <Link to={'/collection'}>
          <Bookmark size={28} color="white" className=" flex ml-3 cursor-pointer active:scale-95" />
        </Link>
        {errors.search && (
          <span
            id="error-msg"
            className="absolute top-14 lg:top-14 mx-auto text-red-500 transition font-bold justify-center"
            flex
            flex-col
          >
            This field is required
          </span>
        )}
      </form>
    </div>
  );
};

export default Searchbar;
