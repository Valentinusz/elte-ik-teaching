import { useState } from "react";

export default function useForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const errors = {};

    if (username === "") {
        errors.username = "A felhasználónév nem lehet üres!";
    }

    if (password === "") {
        errors.password = "A jelszó nem lehet üres!";
    }

    return { username, setUsername, password, setPassword, errors, isValid: Object.keys(errors).length === 0 }
}