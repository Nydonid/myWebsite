import MyHeader from "../components/MyHeader";

function Recipes() {
    return (
            <>
                <MyHeader />
                <h1 className="text-3xl font-bold mb-4 gap-4 max-w-7xl mx-auto p-4">My Recipes</h1>
                <main className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto p-4">
                    <div className="p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold">Chocolate Cake</h2>
                        <p className="text-gray-600">Delicious cake recipe...</p>
                    </div>
                    <div className="p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold">Pasta Alfredo</h2>
                        <p className="text-gray-600">Creamy pasta dish...</p>
                    </div>
                </main>
        </>
    );
}

export default Recipes;
