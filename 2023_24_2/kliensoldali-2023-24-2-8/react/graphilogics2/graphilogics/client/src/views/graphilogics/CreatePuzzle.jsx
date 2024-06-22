import {useCreatePuzzleMutation} from "../../state/puzzleApiSlice.js";

export default function CreatePuzzle() {
    const [newPuzzle, {isLoading, isSuccess, data, isError, error}] = useCreatePuzzleMutation();

    return <button onClick={() => {
        newPuzzle({
            body: {
                "title": "Jármű",
                "puzzle": "[\"   #   #  \",\"  ### ### \",\"  ### ### \",\"   #   #  \",\" ### #### \",\" ### #### \",\"   #   #  \",\"### ### ##\",\" #########\",\"  ####### \"]"
            }
        })
    }}>Create</button>
}
