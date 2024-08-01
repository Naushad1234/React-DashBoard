import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
  return (
    <SettingSection icon={User} title={"Profile"}>
      <div className="flex flex-col items-center mb-6">
        <img
          src="anime.jpg"
          alt="Profile"
          className="rounded-full w-20 h-20 object-cover mb-4"
        />

        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-100">
            Md. Naushad Ali
          </h3>
          <p className="text-gray-400">naushad@gmail.com</p>
        </div>
      </div>

      <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
        Edit Profile
      </button>
    </SettingSection>
  );
};

export default Profile;
