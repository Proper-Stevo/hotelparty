import HotelHero from "../../components/hotel/hotel_hero"
import Hotel2ColumnLeft from "../../components/hotel/hotel_2_column_left"
import HotelAmenities from "../../components/hotel/hotel_amenitites"
import HotelBookNow from "../../components/hotel/hotel_book_now";
import HotelContactUs from "../../components/hotel/hotel_contact_us";
import Hotel2ColumnRight from "../../components/hotel/hotel_2_column_right";

export default function Home() {
    return (
      <>
      <HotelHero />
      <Hotel2ColumnLeft  />
      <Hotel2ColumnRight  />
      <HotelAmenities />
      <HotelBookNow />
      <HotelContactUs />
      </>
    );
  }
  