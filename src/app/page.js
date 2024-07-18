import header from "../components/header";
import task from "@/components/task";
import taskin from "@/components/taskin";
import footer from "@/components/footer";
export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">

      {/* header section*/}
      <header/>

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <taskin />
        {/* task */}
        <task />
      </div>

      {/* //footer section */}
      <footer year="2567" fullname ="Chayangkul Chanjarupong 660610745" studentid = "660610745"/>
    </div>
  );
}
