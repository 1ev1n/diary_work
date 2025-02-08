'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "./sidebar_component.css";

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="sidebar-gradient">

            <div className={`icon-container ${pathname === "/calendar" ? "chosen-gradient" : "not-chosen-gradient"}`}>
                <Link href="/calendar" className="icon">
                    <img src="/icons/calendar.png" alt="Calendar" className="side-icon" />
                </Link>
            </div>

            <div className={`icon-container ${pathname === "/trains" ? "chosen-gradient" : "not-chosen-gradient"}`}>
                <Link href="/trains" className="icon">
                    <img src="/icons/excercises.png" alt="Trainings" className="side-icon" />
                </Link>
            </div>
        </div>
    );
}