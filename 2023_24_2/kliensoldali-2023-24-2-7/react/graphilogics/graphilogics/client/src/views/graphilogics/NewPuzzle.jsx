import {useCreatePuzzleMutation} from "../../state/puzzleApiSlice.js";

export default function NewPuzzle() {
    const [createPuzzle, {isLoading, isSuccess, isError}] = useCreatePuzzleMutation()

    return <button onClick={() => {
        createPuzzle({body: {
            "title": "Jármű",
            "puzzle": "[\"   #   #  \",\"  ### ### \",\"  ### ### \",\"   #   #  \",\" ### #### \",\" ### #### \",\"   #   #  \",\"### ### ##\",\" #########\",\"  ####### \"]"
        }})
    }}>New</button>
}
