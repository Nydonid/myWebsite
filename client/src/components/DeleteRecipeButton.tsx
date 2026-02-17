import {Recipe} from "../RecipeInterface";

const DeleteRecipeButton = ({ recipe }: { recipe: Recipe }) => {
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this recipe?")) {
            try {
                const token = localStorage.getItem("token");
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