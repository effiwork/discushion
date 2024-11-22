import React, { Component as Cp } from "react";
import styles from "./TopBar.module.css";
import mainStyles from "../../css/main.module.css";
import Time from "../Time/Time";
import Summary from "../../components/Summary/Summary";

/**@once*/
export default class TopBar extends Cp{
    render() :React.ReactNode{
        return(
            <div style={{
                display: "flex",
                flexFlow: "column nowrap",
                justifyContent: "space-evenly",
                width: "100dvw",
                height: "3rem",
                padding: ".2rem .4rem"
            }}>
                <div style={{
                    display: "flex",
                    flexFlow: "row nowrap",
                }}>
                    <Time />
                </div>
                <Summary />
            </div>
        );
    }
}