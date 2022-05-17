import Image from "next/image";

function Avatar({ url, className }) {
  return (
    <div className={`flex items-center rounded-full cursor-pointer bg-indigo-400 ${className}`}>
      <Image
        className={`rounded-full cursor-pointer transition duration-150 hover:scale-110`}
        height={35}
        width={35}
        src={url}
        alt="profile picture"
      />
    </div>
  );
}

export default Avatar;
