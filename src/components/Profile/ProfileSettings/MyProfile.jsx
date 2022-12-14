import React, { useState } from "react";
import EditButton from "../../Button/EditButton";
import NicknameModal from "../Modal/NicknameModal";

const MyProfile = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="mt-20 mb-8 font-semibold text-3xl">My Profile</div>
      <div className="flex flex-col border-y-2 border-app-black gap-3 py-3">
        <div className="flex flex-row justify-between items-center border-b-2 border-app-black overflow-x-auto">
          <div className="flex flex-row pr-6">
            <div className="bg-app-black-light items-baseline h-6 w-6 rounded-md flex-none"></div>
            <div className="flex flex-col mx-4">
              <div className="text-base">Nickname</div>
              <div className="md:my-4 text-gray-400 text-sm">
                Set a customized nickname for your profile
              </div>
            </div>
          </div>
          <div className="py-12 text-base px-6">Alberto1738</div>
          <div
            className="mx-2 flex rounded-md items-center bg-app-black py-2 w-auto px-6 justify-center hover:cursor-pointer"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <button>Edit</button>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <div className="bg-app-black-light h-6 w-6 items-baseline rounded-md flex-none"></div>
            <div className="flex flex-col mx-4">
              <div className="text-base">P2P Profile</div>
              <div className="my-4 text-gray-400 text-sm">
                Edit your P2P Profile
              </div>
            </div>
          </div>
          <div className="py-10">
            <EditButton title="Edit" />
          </div>
        </div>
      </div>
      {<NicknameModal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};

export default MyProfile;
