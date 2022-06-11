import { useEffect } from "react";
import axios from 'axios';

export const Skills = () => {
    useEffect(() => { axios.get('https://api.github.com/users/marieono/repos').then((response) => console.log(response)) }, []);

    return (
        <div id="skills">
            <div className="container">
                <div className="heading">
                    <h2>Skills</h2>
                </div>
                <div className="skills-container">
                </div>
            </div>
        </div>
    )
}