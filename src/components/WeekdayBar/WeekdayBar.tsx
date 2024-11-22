import React, { Component as Cp } from "react";
import styles from "./WeekdayBar.module.css";
import mainStyles from "../../css/main.module.css";
import { getDateAtWeekByWeekNumber } from "../../utils";
import DayTitle from "./DayTitle";

type Props = {
    config :SettingData;
    currentWeek :number;
};
type State = {
    time :Date;
};
/**@once 但鉴于东西太多还是把css放到外面去了*/
export default class WeekdayBar extends Cp<Props, State>{
    constructor(props :Props){
        super(props);
        this.state = {
            time: new Date()
        };
    }

    timerID :number = -12914;
    componentDidMount(){
        this.timerID = setInterval(()=>{
            this.setState({
                time: new Date()
            });
        }, 1000) as unknown as number;
    }
    componentWillUnmount(){
        if(this.timerID !== -12914) clearInterval(this.timerID);
    }

    render() :React.ReactNode{
        const currentWeek_Date = getDateAtWeekByWeekNumber(this.props.config.startWeek, this.props.currentWeek);
        return(
            <tr className={styles.tr}>
                {
                    this.props.config.startWeekAtSunday ? <DayTitle startAtSunday={this.props.config.startWeekAtSunday} weekendShowed={this.props.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={0}/> : null
                }
                <DayTitle startAtSunday={this.props.config.startWeekAtSunday} weekendShowed={this.props.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={1}/>
                <DayTitle startAtSunday={this.props.config.startWeekAtSunday} weekendShowed={this.props.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={2} />
                <DayTitle startAtSunday={this.props.config.startWeekAtSunday} weekendShowed={this.props.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={3} />
                <DayTitle startAtSunday={this.props.config.startWeekAtSunday} weekendShowed={this.props.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={4} />
                <DayTitle startAtSunday={this.props.config.startWeekAtSunday} weekendShowed={this.props.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={5} />
                {
                    this.props.config.showWeekend ?
                        this.props.config.startWeekAtSunday ? 
                            <DayTitle startAtSunday={this.props.config.startWeekAtSunday} weekendShowed={this.props.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={6} />
                        : <>
                            <DayTitle startAtSunday={this.props.config.startWeekAtSunday} weekendShowed={this.props.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={6} />
                            <DayTitle startAtSunday={this.props.config.startWeekAtSunday} weekendShowed={this.props.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={0} />
                        </>
                    : null
                }
            </tr>
        );
    }
}