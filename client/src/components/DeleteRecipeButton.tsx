import {Recipe} from "../RecipeInterface";
import { clearToken, getToken } from "../auth";

const DeleteRecipeButton = ({ recipe }: { recipe: Recipe }) => {
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this recipe?")) {
            try {
                const token = getToken(); // null (and removed from storage) once expired
                if (!token) {
                    alert("Your session has expired, please log in again.");
                    window.location.reload();
                    return;
                }
                const apiUrl = process.env.REACT_APP_API_URL || "";
                const res = await fetch(`${apiUrl}/api/recipes/${recipe.recipe_id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (res.ok) {
                    alert("Recipe deleted successfully");
                    window.location.reload();
                } else {
                    if (res.status === 401 || res.status === 403) clearToken(); // token rejected by the server
                    alert("Failed to delete recipe");
                }

            } catch (err: unknown) {
                console.error(err instanceof Error ? err.message : "Unknown error");
                alert("Error deleting recipe");
            }
        }
    };

    return (
        <button type="button" className="btn btn-danger" onClick={handleDelete}>
            Delete
        </button>
    );
};

export default DeleteRecipeButton;