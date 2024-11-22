import React, { Component as Cp } from "react";
import styles from "./Discushion.module.css";
import mainStyles from "../css/main.module.css";
import TopBar from "../TopBar/TopBar";
import Table from "../Table/Table";

/**@once*/
export default class Discushion extends Cp{
    render() :React.ReactNode{
        return(<>
            <TopBar />
            <Table />
        </>);
    }
}