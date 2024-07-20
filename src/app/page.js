import header from "./components/header";
import task from "./components/task";
import taskin from "./components/taskin";
import footer from "./components/footer";
export default function Home() {
  const taskslist = [
    {id : 1, title : "Read a book" ,isdone : true},
    {id : 2, title : "Take a shower" ,isdone : false},
    {id : 3, title : "Sleep" ,isdone : false}
    

  ]
  return (
    <div className="container mx-auto">
      <header/>
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        <taskin/>
        <task {...taskslist[0]} />
        <task {...taskslist[1]} />
        <task {...taskslist[2]} />
      </div>
      <footer year = "2024" fullName = "Chayangkul Chanjarupong" studentId = "660610745" />
    </div>
  );
}