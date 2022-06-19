// import { useEffect, useReducer } from "react";
// import axios from 'axios';
// import { skillReducer, initialState, actionTypes } from "../reducers/skillReducer";
import { requestStates } from "../constants";
import { useSkills } from '../customHooks/useSkills';

export const Skills = () => {
    const [sortedLanguageList, fetchRequestState, converseCountToPercntage] = useSkills();//ここで良いのか分からない。


    return (
        <div id="skills">
            <div className="container">
                <div className="heading">
                    <h2>Skills</h2>
                </div>
                <div className="skills-container">
                    {
                        // state.requestState === requestStates.loading && (
                        fetchRequestState === requestStates.loading && (
                            <p className="description">取得中…</p>
                        )
                    }
                    {
                        //state.requestState === requestStates.success && (
                        fetchRequestState === requestStates.success && (
                            sortedLanguageList().map((item, index) => (
                                <div className="skill-item" key={index}>
                                    <p className="description"><strong>{item.language}</strong></p>

                                    {converseCountToPercntage(item.count)}%

                                </div>
                            ))
                        )
                    }
                    {
                        //state.requestState === requestStates.error && (
                        fetchRequestState === requestStates.error && (
                            <p className="description">エラーが発生しました</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}