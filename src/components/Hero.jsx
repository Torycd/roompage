import desktop1 from "../assets/images/desktop-image-hero-1.jpg";

const Hero = () => {
  return (
    <div className="flex h-full">
      <div
        className="p-5 text-white font-bold w-[65%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${desktop1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex space-x-5 items-center">
          <div className="flex items-center justify-center">
            <h2 className="text-4xl">ROOM</h2>
          </div>

          <ul className="flex space-x-5">
            <li>Home</li>
            <li>SHop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="w-[40%]">
        <div className="p-20 space-y-5">
          <h2 className="text-5xl font-bold">
            Discover innovative ways to decorate
          </h2>
          <p className="text-wrap">
            We provide unmatched qaunity, comfort, and style fro property
            Object.getOwnProperties across the couuntry We provide unmatched
            qaunity, comfort, and style fro property Object.getOwnProperties
            across the couuntry We provide unmatched qaunity, comfort, and style
            fro property Object.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
