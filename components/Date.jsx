'use client';
import Countdown from "./Countdown";
import ScheduleEvent from "./ScheduleEvent";
import './components.css';

export default function Date() {
    return (
        <div className="flex flex-col text-center justify-center items-center space-y-4">
            <div className="pt-14 w-[70vw] md:w-[60%] lg:w-full font-bold text-sm  md:text-2xl lg:text-3xl">
                <h2 className=" lg:w-[60%] mx-auto">¡QUEREMOS QUE ESTÉS PRESENTE EN ESTE DÍA TAN IMPORTANTE!</h2>
            </div>
            <div className="fechario w-[70vw] md:w-[60%] ">
                <div className="grid grid-cols-3 font-semibold justify-center items-center  w-full text-sm sm:text-lg md:text-xl lg:text-2xl">
                    <p >MARZO</p>
                    <p id="day" className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl">22</p>
                    <p >2025</p>
                </div>
            </div>
            <div className="w-full">
                <Countdown />
            </div>
            <div className=" pt-10">
                <ScheduleEvent />
            </div>
        </div>
    );
}
