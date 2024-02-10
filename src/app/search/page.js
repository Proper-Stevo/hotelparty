import SearchComponent from "../../components/search/index.js"
import Image from "next/image"

export default function search() {
    return (
        <>
        <div>
            <div>
                <img src="\search\hotelBanner.jpg" className="h-screen"/>
            </div>
            <SearchComponent />
            </div>
            <div>
                Explour Our Popular Locations
            </div>
            <div className="grid grid-cols-3">
                <div>
                    <Image
                    src=""
                    >

                    </Image>
                </div>
                <div>2</div>
                <div>3</div>
            </div>
        </>
    )
}