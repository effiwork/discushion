import React, { Component as Cp } from "react";
import mainStyles from "../../css/main.module.css";

/**@once*/
export default class TopBar extends Cp{
    render() :React.ReactNode{
        return(<div>
            <span>本日任务：10</span>
            <span>本日 ddl：3</span>
        </div>);
    }
}