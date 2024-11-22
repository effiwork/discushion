import React, { Component as Cp } from "react";
import styles from "./Time.module.css";
import mainStyles from "../../css/main.module.css";

type State = {
    now :Date;
};
/**@once*/
export default class Time extends Cp<{}, State>{
    timerID :number = -1;
    constructor(props :{}){
        super(props);
        this.state = {
            now: new Date()
        }
    }
    componentDidMount(){
        this.timerID = setInterval(()=>{
            this.setState({now: new Date()});
        }, 500) as unknown as number;
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    render() :React.ReactNode{
        return(
            <div>{this.state.now.getFullYear()}.{this.state.now.getMonth() + 1}.{this.state.now.getDate()} {this.state.now.getHours()}:{(this.state.now.getMinutes() + "").padStart(2, "0")}</div>
        );
    }
}