import Header from "./app/components/Header.component";
import TaskIn from "./app/components/TaskIn.component";
import Task from "./app/components/Task.component";
import Footer from "./app/components/Footer.component";


export default function Home() {
  const taskslist = [
    {id : 1, title : "Read a book" ,isDone : true},
    {id : 2, title : "Take a shower" ,isDone : false},
    {id : 3, title : "Sleep" ,isDone : false}
    

  ]
  return (
    <div className="container mx-auto">
      <Header />
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        <TaskIn/>
        <Task {...taskslist[0]} />
        <Task {...taskslist[1]} />
        <Task {...taskslist[2]} />
      </div>

      <Footer year = "2024" fullName = "Chayangkul Chanjarupong" studentId = "660610745" />
    </div>
  );
}