import { useState } from "react"; // TODO only copy paste grok
import InputRecipe from "../components/InputRecipe";
import EditRecipe from "../components/EditRecipe";
import { Recipe, Ingredient } from "../RecipeInterface";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
    const [recipe, setRecipe] = useState<Recipe>({
        recipe_id: 0,
        title: "",
        prep_time: "",
        description: "",
        instructions: [],
        imageurls: [],
        ingredients: []
    });

    const handleLogin = async () => {
        try {
            const res = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            const data = await res.json();
            if (data.token) {
                localStorage.setItem("token", data.token);
                alert("Login successful!");
            } else {
                alert("Login failed!");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {isLoggedIn && <InputRecipe />}
            {isLoggedIn && <EditRecipe recipe={recipe} />}
        </div>
    );
}

export default Login;