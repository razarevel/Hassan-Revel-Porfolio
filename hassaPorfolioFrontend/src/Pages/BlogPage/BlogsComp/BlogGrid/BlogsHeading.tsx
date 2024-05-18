import { FaChevronLeft } from "react-icons/fa";

export default function BlogsHeading() {
  return (
    <>
      <div className="space-y-[36px] md:space-y-0 md:flex items-center justify-between">
        <h1 className="text-darkBlue text-[2em] font-Bold">
          Latest Blog Posts
        </h1>
        {/* btn */}
        <div className="flex space-x-4 border rounded-full items-center justify-between px-[2rem] h-[3.5rem] text-[.875rem] font-Bold">
          <p>All Categories</p>{" "}
          <div className="-rotate-90">
            <FaChevronLeft />
          </div>
        </div>
      </div>
    </>
  );
}
