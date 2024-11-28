import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from '../context/contextApi';


const LeftNav = () => {
    const { selectCategories, setSelectCategories, mobileMenu } = useContext(Context);

    const navigate = useNavigate();

    const clickHanlder = (name, type) => {
        switch (type) {
            case "category":
                return setSelectCategories(name);
            case "home":
                return setSelectCategories(name);
            case "menu":
                return false;
            default:
                break;
        }
    };


  return (
    <div className="md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240] md:translate-x-0 transition-all">
        <div className="flex px-5 flex-col">
            {categories.map((item) => {
                return (
                    <React.Fragment key={item.name}>
                        <LeftNavMenuItem 
                            text={item.type === "home" ? "Home" : item.name}
                            icon={item.icon}
                            action={() => {
                                clickHanlder(item.name, item.type);
                                navigate("/")
                            }}
                            className={`${selectCategories === item.name ? "bg-white/[0.15]" : ""}`}
                        />
                        {item.divider && ( 
                            <hr className="my-0 border-white/[0.2]" />
                        )}
                    </React.Fragment>
                );
            })};
            <hr className="my-0 border-white/[0.2]" />
            <div className="text-white/[0.5] text-[15px]">
                Clone by: YT Krishna
            </div>
        </div>
    </div>
  );
};

export default LeftNav;