'use client';
import { cinzelDecorative } from "@/public/fonts";
import Countdown from "./Countdown";
import ScheduleEvent from "./ScheduleEvent";

export default function Date() {
    return (
        <div className="flex flex-col text-center justify-center items-center space-y-4">
            <div className="p-14 w-full font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                <h2 className={`${cinzelDecorative.className} pb-6`}>AGENDA LA FECHA</h2>
                <p >22 DE MARZO DE 2025</p>
            </div>
            <div>
                <Countdown />
            </div>
            <div className=" pt-10">
                <ScheduleEvent />
            </div>
        </div>
    );
}
