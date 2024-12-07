import { Box } from "@mui/material";
import { StyledSwiperBox } from "../style";
import { SkillsDataProps } from "../SkillAnimation/SkillAnimation";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const SkillSwiper = ({ data }: SkillsDataProps) => {
  return (
    <Box
      sx={{
        ".swiper-wrapper": {
          transitionTimingFunction: "linear",
        },
      }}
    >
      <Swiper
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={3500}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
        breakpoints={{
          0: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
          900: {
            spaceBetween: 30,
            slidesPerView: 5,
          },
          1200: {
            spaceBetween: 30,
            slidesPerView: 8,
          },
          1440: {
            spaceBetween: 30,
            slidesPerView: 10,
          },
          1920: {
            spaceBetween: 30,
            slidesPerView: 12,
          },
        }}
      >
        {data.map((skill) => (
          <SwiperSlide key={skill.id}>
            <StyledSwiperBox>
              <Box
                component="img"
                width="100%"
                height={40}
                src={skill.img}
                alt={skill.title}
              />
            </StyledSwiperBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SkillSwiper;
