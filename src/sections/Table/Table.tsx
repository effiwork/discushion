import React, { Component as Cp } from "react";
import styles from "./Table.module.css";
import mainStyles from "../../css/main.module.css";
import WeekdayBar from "../../components/WeekdayBar/WeekdayBar";

/**@once*/
export default class Table extends Cp{

    render() :React.ReactNode{
        return(<div style={{
            overflowY: "auto",
            height: "calc(100% - 3rem)"
        }}>
            <table style={{
                width: "100dvw",
                borderCollapse: "collapse",
                tableLayout: "fixed",
                overflowY: "auto"
            }}>
                <tbody>
                    <WeekdayBar />
                    <tr><td>tg67ut56sw</td></tr>
                </tbody>
            </table>
        </div>);
    }
}