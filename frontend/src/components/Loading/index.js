import { SpinnerInfinity } from 'spinners-react';
import Loader from "react-loader-spinner";
import "./style.css";

export default function Loading() {
    return (
        <div className="loading-panel">
            <Loader
                type="Triangle"
                color="#00ffcf"
                height={150}
                width={150}
            />
        </div>
    )
}