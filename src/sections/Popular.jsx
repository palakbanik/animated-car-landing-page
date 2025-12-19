import HeadingText from "../components/HeadingText";
import { RiShoppingBag2Line } from "react-icons/ri";

import { motion } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import porscheCarOne from "../assets/images/porsche-one.png";
import porscheCarTwo from "../assets/images/porsche-two.png";
import porscheCarThree from "../assets/images/porsche-three.png";
import porscheCarFour from "../assets/images/porsche-four.png";
import porscheCarFive from "../assets/images/porsche-five.png";

import speedIcon from "../assets/icons/speed-icon.svg";
import arrowIcon from "../assets/icons/arrow-icon.svg";
import chargingPileIcon from "../assets/icons/charging-pile-icon.svg";

import "../index.css";

const cars = [
    {
        id: 1,
        image: porscheCarOne,
        carName: "Porsche",
        carModel: "Turbo S",
        carMileage: "3.7 Sec",
        carMiles: "356 Km/h",
        cartType: "Electric",
        cartPrice: "$175,900",
    },
    {
        id: 2,
        image: porscheCarTwo,
        carName: "Porsche",
        carModel: "Taycan",
        carMileage: "3.7 Sec",
        carMiles: "356 Km/h",
        cartType: "Electric",
        cartPrice: "$114,900",
    },
    {
        id: 3,
        image: porscheCarThree,
        carName: "Porsche",
        carModel: "Turbo S Cross",
        carMileage: "3.7 Sec",
        carMiles: "356 Km/h",
        cartType: "Electric",
        cartPrice: "$150,900",
    },
    {
        id: 4,
        image: porscheCarFour,
        carName: "Boxster 718",
        carModel: "Turbo S",
        carMileage: "3.7 Sec",
        carMiles: "356 Km/h",
        cartType: "Electric",
        cartPrice: "$125,900",
    },
    {
        id: 5,
        image: porscheCarFive,
        carName: "Boxster 718",
        carModel: "Turbo S",
        carMileage: "3.7 Sec",
        carMiles: "356 Km/h",
        cartType: "Electric",
        cartPrice: "$128,900",
    },
];

export default function Popular() {
    return (
        <section
            id="popular"
            className="w-full max-w-7xl mx-auto pt-[72px] pb-20 pl-6 sm:px-20 overflow-hidden relative"
        >
            <motion.div
                initial={{
                    y: 100,
                    opacity: 0,
                }}
                whileInView={{
                    y: 0,
                    opacity: 100,
                    transition: { duration: 1.5 },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="w-full grid place-items-center text-center mb-14"
            >
                <HeadingText
                    text={"Choose Your Electric Car Of The Porsche Brand"}
                />
            </motion.div>

            <Swiper
                className="popular-swiper"
                modules={[Pagination]}
                pagination={{ clickable: true, dynamicBullets: true }}
                grabCursor
                slidesPerView={"auto"}
                spaceBetween={23}
                breakpoints={{
                    375: { slidesPerView: 1.5 },
                    420: { slidesPerView: 1.7 },
                    768: { slidesPerView: 2 },
                    1020: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                loop
            >
                {cars.map((car) => (
                    <SwiperSlide key={car.id}>
                        <motion.div
                            initial={{
                                x: 100,
                                opacity: 0,
                            }}
                            whileInView={{
                                x: 0,
                                opacity: 100,
                                transition: { duration: 1.5, delay: 0.5 },
                            }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="w-full max-w-[228px] h-[303px] rounded-2xl bg-custom-bg-dark-color relative overflow-clip z-0 flex items-center justify-center"
                        >
                            {/* blob */}
                            <div className="w-[190px] h-[190px] rounded-full bg-custom-blob/50 blur-2xl absolute -top-11 -left-11"></div>

                            <div className="bg-custom-btn-bg px-4 py-3 inline-block absolute bottom-0 right-0 rounded-tl-2xl">
                                <RiShoppingBag2Line />
                            </div>

                            {/* contents */}
                            <div className="absolute top-8 left-6">
                                <h3 className="font-semibold text-xl leading-[140%] tracking-normal">
                                    {car.carName}
                                </h3>
                                <p className="font-normal text-sm leading-[140%] tracking-normal text-custom-text-gray-light">
                                    {car.carModel}
                                </p>
                            </div>

                            <div className="absolute top-[100px] right-5">
                                <img
                                    src={car.image}
                                    alt={car.carName}
                                    draggable="false"
                                />
                            </div>

                            <div className="absolute bottom-[76px] left-6">
                                <div className="flex flex-col items-start gap-2">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <img
                                                src={speedIcon}
                                                alt="speed icon"
                                                draggable="false"
                                            />
                                            <p className="font-normal text-xs leading-[140%] tracking-normal">
                                                {car.carMileage}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <img
                                                src={arrowIcon}
                                                alt="arrow icon"
                                                draggable="false"
                                            />
                                            <p className="font-normal text-xs leading-[140%] tracking-normal">
                                                {car.carMiles}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <img
                                            src={chargingPileIcon}
                                            alt="charging pile icon"
                                            draggable="false"
                                        />
                                        <p className="font-normal text-xs leading-[140%] tracking-normal">
                                            {car.cartType}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="absolute bottom-6 left-6 font-semibold text-base leading-[140%] tracking-normal">
                                {car.cartPrice}
                            </h3>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
