import Image from "next/image";
import Banner from "../components/HomePage/Banner/Banner";
import TopGenerations from "../components/HomePage/TopGeneration/TopGenerations";

export default function Home() {
  return (
    <div>
      <Banner />
      <TopGenerations />
    </div>
  );
}
