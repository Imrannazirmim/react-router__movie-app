import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <main>
      <div>
        <img
          src="2.jpg"
          alt=""
          className="w-full h-screen bg-cente bg-cover relative "
        />
        <div>
          <h2 className="text-3xl absolute top-[50%] left-[35%] text-[#e9f810]">
            Very awesome Movie, Action{" "}
          </h2>
          <p className="mt-3 text-balance absolute text-[#f7f1f6] top-[55%] left-[22%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            dolores labore ea fuga voluptate officia velit enim assumenda, ullam
            esse ex accusamus libero eveniet iure dolorem aliquam, quisquam
            repellat magni.
          </p>
          <NavLink to="./movie">
            <button className=" absolute text-white top-[75%] left-[40%] py-2 px-16 rounded bg-red-400">
              Explore Now
            </button>
          </NavLink>
        </div>
      </div>
    </main>
  );
};
