function ProjectInfoCenterCardSection3({ cardsImages }) {
  return (
    <>
      <div className="c-section my-[4.375rem] md:my-[13.125rem] lg:my-[14.0625rem] xl:my-60 2xl:my-[15.9375rem] center-card-my 3xl:my-[18.75rem] ">
        <figure className="c-block-image [width:calc(100vw-5rem)] md:w-[80%] lg:[width:calc((100vw-13.125rem)*14/20+8.125rem)] mx-auto rounded-[3.0625rem] lg:rounded-[3.28125rem] xl:rounded-[3.5rem] 2xl:rounded-[3.71875rem] --center-card-rounded 3xl:rounded-[4.375rem] overflow-hidden">
          {cardsImages?.image && (
            <>
              <picture>
                <source
                  srcSet={cardsImages?.small}
                  type="image/webp"
                  media="(max-width: 1023px)"
                />
                <img
                  className="h-full w-full object-cover"
                  src={cardsImages?.image}
                  style={{
                    backgroundImage: `url(${cardsImages?.placeholder})`,
                    backgroundSize: "cover",
                    transition: "background-image 300ms ease",
                  }}
                  onLoad={(e) => {
                    e.target.style.backgroundImage = "none";
                  }}
                />
              </picture>
            </>
          )}
          {cardsImages?.video && (
            <>
              <video
                autoPlay
                muted
                loop
                playsInline
                src={cardsImages?.video}
                className=" h-full w-full object-cover"
              >
                <p className="u-screen-reader-text ">
                  Your browser does not support the video tag.
                </p>
              </video>
            </>
          )}
        </figure>
      </div>
    </>
  );
}

export default ProjectInfoCenterCardSection3;
