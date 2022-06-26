import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { useParams } from "react-router-dom";


export function Event(){
  const { slug } = useParams<{ slug: string }>()

  return(
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex flex-1">
        {slug 
        ? <Video lessonSlug={slug}/> 
        : <div className="flex-1 flex justify-center items-center">
          <p className=" text-5xl text-center">Clique em alguma aula ao lado</p></div>}
        <Sidebar/>
      </main>

    </div>
    
  )
}