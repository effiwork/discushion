import React, { Component as Cp } from "react";
import styles from "./TodoItem.module.css";
import mainStyles from "../../css/main.module.css";


interface Props{
    id :number;
    range :[number, number];
    title :string;
}
export function TodoItem(props :Props){
    return(
        <tr>{props.title}</tr>
    );
}