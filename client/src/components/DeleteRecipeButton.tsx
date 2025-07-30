const DeleteRecipeButton = ({ recipeId }: { recipeId: number }) => {
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this recipe?")) {
            try {
                const token = localStorage.getItem("token");
                const res = await fetch(`http://localhost:5000/recipes/${recipeId}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (res.ok) {
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