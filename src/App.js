import ReactImageAnnotate from "react-image-annotate";
import "./styles.css";
import DropDownNav from "./Components/DropDownNav";

export default function App() {
  return (
    <div>
      <DropDownNav />
      <div className="createTemplate">
        <ReactImageAnnotate
          taskDescription="# Draw region around the important fields"
          images={[
            {
              src:
                "https://images.unsplash.com/photo-1561518776-e76a5e48f731?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
              name: "Create Template"
            }
          ]}
          regionClsList={["Table", "Header", "Name", "Other"]}
          regionTagList={["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"]}
          onExit={(event, value, value2) => console.log(event, value, value2)}
        />
      </div>
    </div>
  );
}
