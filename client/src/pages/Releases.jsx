import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import BlurCircle from "../components/BlurCircle";
import { useAppContext } from "../context/AppContext";
import { StarIcon } from "lucide-react";
import timeFormat from "../lib/timeFormat";

const Releases = () => {
  const { axios, getToken, user, image_base_url } = useAppContext();

  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchReleases = async () => {
    try {
      const { data } = await axios.get("/api/show/now-playing", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });

      if (data.success) {
        setShows(data.movies);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchReleases();
    }
  }, [user]);

  return !isLoading ? (
    <div className="relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">
      <BlurCircle top="150px" left="0px" />
      <BlurCircle bottom="50px" right="50px" />

      <h1 className="text-lg font-medium my-4">Resent Releases</h1>
      <div className="flex flex-wrap max-sm:justify-center gap-8">
        {shows.map((movie) => (
          <div key={movie.id} className="flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-66">
            <img
              src={image_base_url + movie.backdrop_path}
              alt=""
              className="rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer"
            />
            <p className="font-semibold mt-2 truncate">{movie.title}</p>
            <p className="text-sm text-gray-400 mt-2">
              {new Date(movie.release_date).getFullYear()}
            </p>

            <div className="flex items-center justify-between mt-4 pb-3">
              <button
                className="px-4 py-2 text-xs bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
              >
                Buy Tickets
              </button>

              <p className="flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1">
                <StarIcon className="w-4 h-4 text-primary fill-primary" />
                {movie.vote_average.toFixed(1)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Releases;
