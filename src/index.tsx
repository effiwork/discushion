import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./css/main.css";
import "./css/main.scrollbar.css";
import "./css/main.varibles.css";
import "./css/main.basicElements.css";
import "./css/main.antdFix.css";
import Discushion from "./sections/Discushion/Discushion";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
load();
export function load(){
    root.render(<StrictMode><Discushion key={Date.now()} /></StrictMode>);
}
export function expose(obj :anyObject){
    for(let i in obj){
        (window as any)[i] = obj[i];
    }
}
expose({load});