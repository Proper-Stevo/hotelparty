export default function search() {
    return (
        <>
        <div>
            <div>
                <img src="\search\hotel.jpg" className="h-96 w-96"/>
            </div>

            <div className="flex">
            <form>
                <div class="mb-4">
                    <label for="destinationDate" class="block  text-sm font-medium mb-2">Destination Date</label>
                    <input type="date" id="destinationDate" name="destinationDate" class="border w-full p-2 rounded" />
                </div>

                <div class="mb-4">
                    <label for="guestsAmount" class="block  text-sm font-medium mb-2">Guests Amount</label>
                    <input type="number" id="guestsAmount" name="guestsAmount" class="border w-full p-2 rounded" />
                </div>

                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Search</button>
            </form>
            </div>
            </div>
        </>
    )
}