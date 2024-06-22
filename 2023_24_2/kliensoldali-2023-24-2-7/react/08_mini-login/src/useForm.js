import { useState } from "react";

export default function useForm() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const { username: username, password } = credentials;

    const errors = {};

    if (username === "") {
        errors.username = "A felhasználónév nem lehet üres.";
    }

    if (password === "") {
        errors.password = "A jelszó nem lehet üres.";
    }

    return { username, password, credentials, setCredentials, errors }
}