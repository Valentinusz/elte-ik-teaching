import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadPuzzlesFromApi} from "../../state/puzzleServerSlice.js";
import {useGetAllPuzzlesQuery, useGetPuzzleQuery} from "../../state/puzzleApiSlice.js";

export default function PuzzleList() {
    // const [data, setData] = useState([]);
    //
    // // 1. fetch api
    //
    // useEffect(() => {
    //     fetch("http://localhost:3030/puzzles").then(
    //         response => {
    //             response.json().then((data) => {
    //                 setData(data.data)
    //             })
    //         }
    //     )
    // }, []);


    // const dispatch = useDispatch();
    // const {data, isLoading, isError, isSuccess} = useSelector(state => state.puzzleServer.loadPuzzles);
    //
    // useEffect(() => {
    //     if (!isLoading) {
    //         dispatch(loadPuzzlesFromApi())
    //     }
    // }, [])

    const {data, isLoading, isError, isSuccess} = useGetAllPuzzlesQuery();
    const {data: puzzleData} = useGetPuzzleQuery(2);

    console.log("puzzle", puzzleData)

    if (isLoading) {
        return <div>Loading...</div>
    }



    if (isSuccess) {
        return (
            <ol>
                {data.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ol>
        )
    }


}
