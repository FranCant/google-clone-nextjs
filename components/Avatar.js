import Image from "next/image";

function Avatar({ url, className }) {
  return (
    <div className={`overflow-hidden flex items-center rounded-full cursor-pointer transition duration-150 hover:scale-110 ${className}`}>
      <Image
        height={35}
        width={35}
        src={url}
        alt="profile picture"
      />
    </div>
  );
}

export default Avatar;
