import HotelHero from "../../components/hotel/hotel_hero"
import Hotel2Column from "../../components/hotel/hotel_2_column"
import HotelAmenities from "../../components/hotel/hotel_amenitites"
import HotelBookNow from "@/components/hotel/hotel_book_now";
import HotelContactUs from "@/components/hotel/hotel_contact_us";

export default function Home() {
    return (
      <>
      <HotelHero />
      <Hotel2Column imagePos="right" />
      <Hotel2Column imagePos="left" />
      <HotelAmenities />
      <HotelBookNow />
      <HotelContactUs />
      </>
    );
  }
  