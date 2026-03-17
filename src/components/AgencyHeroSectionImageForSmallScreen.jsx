import { images } from "../Data/AgencyHeroSectionData";
import useAgencyHeroImageSmallScreenAnimation from "./hooks/useAgencyHeroImageSmallScreenAnimation";

function AgencyHeroSectionImageForSmallScreen() {
  //  images animation start here
  const { imageRef3, imageSmallRef } = useAgencyHeroImageSmallScreenAnimation();
  //  images animation ends here

  return (
    <>
      <div className="images  h-full w-full">
        <picture>
          <source
            ref={imageSmallRef}
            srcSet={images[0].small}
            type="image/webp"
            media="(max-width: 1023px)"
          />
          <img
            ref={imageRef3}
            className="animate_hero_image h-full w-full object-cover rounded-[17.5px] "
            src={images[0].src}
            alt="SophieA_girl_jpg"
            loading="lazy"
            width={400}
            height={400}
            style={{
              backgroundImage: `url(${images[0].placeholder})`,
              backgroundSize: "cover",
            }}
            onLoad={(e) => (e.target.style.backgroundImage = "none")}
          />{" "}
        </picture>
      </div>
    </>
  );
}

export default AgencyHeroSectionImageForSmallScreen;
