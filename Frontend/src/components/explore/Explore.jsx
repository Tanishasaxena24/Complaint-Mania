import React from 'react';
import ReactPlayer from 'react-player';

function Explore() {
  return (
    <div className=" w-full p-5 md:p-10 from-red-300 to-red-50 ">
      <div className="flex flex-col p-4 md:p-8">
        <h1 className="bg-pink-900 p-4 text-center text-white text-xl md:text-2xl mb-5 rounded-lg font-bold">
          Register Complaints Seamlessly!
        </h1>
        <p className="font-semibold text-sm md:text-base">
          The platform complaint app is a user-friendly platform designed to streamline the process of filing, tracking, and resolving complaints. Users can easily submit their grievances or issues through a straightforward form, providing necessary details and any relevant attachments. The app ensures efficient communication by notifying users about the status of their complaints and any updates. An intuitive dashboard allows users to view all their submitted complaints, track their progress, and see resolutions.
        </p>
      </div>
      <div className="flex justify-center items-center m-4 gap-8 md:gap-20">
        <ReactPlayer
          url="/illustrate.mp4"
          controls
          width="100%"
          height="auto"
          className="max-w-md"
        />
      </div>
    </div>
  );
}

export default Explore;
