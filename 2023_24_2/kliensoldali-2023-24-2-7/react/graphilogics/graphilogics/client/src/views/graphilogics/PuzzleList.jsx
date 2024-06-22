import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadPuzzlesApi} from "../../state/puzzleServerSlice.js";
import {useGetPuzzleQuery, useGetPuzzlesQuery} from "../../state/puzzleApiSlice.js";

export default function PuzzleList() {
    // 1. fetch
    // const [data, setData] = useState([]);
    //
    // useEffect(() => {
    //     fetch("http://localhost:3030/puzzles")
    //         .then(response => {
    //             response.json().then((data) => {
    //                 setData(data.data)
    //             })
    //                 .catch(error => console.log(error))
    //         })
    //         .catch(error => console.log(error));
    // }, []);

    // 2.
    // const dispatch = useDispatch();
    // const {data, isLoading, isError, isSuccess} = useSelector(state =>state.puzzleServer)
    //
    // useEffect(() => {
    //     dispatch(loadPuzzlesApi())
    // }, [])


    // 3.
    const {data, isSuccess, isLoading, isError} = useGetPuzzlesQuery();
    const {data: puzzleData} = useGetPuzzleQuery(1);

    console.log(puzzleData);

    if (isLoading) {
        return <div>Loading ...</div>
    }

    if (isSuccess) {
        console.log(data)

        return (
            <ol>
                {data.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ol>
        )
    }


}
