import Links from "../components/Links";
import Headline from "@/components/Headline";

export default function Main(props) {
    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Headline page={props.page}>
         <code>pages/{props.page}.js</code>
        </Headline>
        <Links/>
      </main>
    );
  }
