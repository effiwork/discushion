import React, { Component as Cp } from "react";
import styles from "./PropertyRendered.module.css";
import mainStyles from "../../../css/main.module.css";
import localforage from "localforage";
import { PropertysStore } from "../../types/properties";

interface Props{
    id :number;
    range :[number, number];
    title :string;
}
export async function PropertyRendered(props :Props){
    const store = await localforage.getItem<PropertysStore>("properties");
    //todo:
    if(store === null) throw new TypeError();
    const value = await localforage.getItem<PropertysStore>("properties");
    return(
        <div>{store[props.id].title}：</div>
    );
}