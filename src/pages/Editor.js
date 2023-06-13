import {
  faArrowLeft,
  faRocket,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef, useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Context from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";

const Editor = () => {
  const { topicList, handleSaveBlog, currentBlog, handleResetBlog } =
    useContext(Context);
  const [text, setText] = useState(
    currentBlog?.content ? currentBlog.content : ""
  );
  const [tone, setTone] = useState("");
  const navigate = useNavigate();
  const editorRef = useRef(null);

  const { topicId } = useParams();

  const currentTopic = topicList.find((item) => item.topicId === topicId);

  // editor text handler
  const handleTextChange = (value) => {
    setText(value);
  };

  // save
  const handleSave = (e) => {
    e.preventDefault();
    let blogDetails = {
      topic: currentTopic?.topic,
      content: text,
      tone: tone,
    };
    console.log("BLOG : ", blogDetails);
    handleSaveBlog(blogDetails);
  };

  // publish
  const handlePublish = () => {
    navigate(`/preview/${topicId}`);
  };

  // image upload handler
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = (event) => {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result.split(",")[1]; // Extract the base64 string without the data:image/*;base64 prefix
          const imageUrl = `data:${file.type};base64,${base64String}`;

          const quill = editorRef.current.getEditor();
          const range = quill.getSelection();
          const cursorPosition = range ? range.index : 0;
          quill.insertEmbed(cursorPosition, "image", imageUrl);
          quill.setSelection(cursorPosition + 1);
        };
        reader.readAsDataURL(file);
      }
    };
  };

  const handleBack = () => {
    handleResetBlog();
    navigate("/dashboard");
  };

  useEffect(() => {
    const quill = editorRef.current.getEditor();
    if (quill) {
      const toolbar = quill.getModule("toolbar");
      toolbar.addHandler("image", imageHandler);
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col justify-between gap-7">
      <div
        className="bg-white flex justify-between p-3 items-center gap-11 "
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <div className=" flex ">
          <button
            onClick={handleBack}
            className="py-2 px-3 transition duration-300 text-xs font-semibold text-gray-500 rounded hover:text-black"
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </button>
        </div>

        <div className="border overflow-hidden py-2 px-4 text-xs flex-1 font-medium rounded text-center line-clamp-1">
          <span className="line-clamp-1"> {currentTopic.topic} </span>
        </div>
        <div className="flex gap-2">
          <select
            onChange={(e) => setTone(e.target.value)}
            value={tone}
            className="py-2 text-xs px-3 border border-black text-black font-semibold rounded outline-none"
          >
            <option className="hidden">Select Tone</option>
            <option value="Formal">Formal</option>
            <option value="Casual">Casual</option>
          </select>
          <button
            onClick={handleSave}
            className="btn py-2  px-3 text-xs font-semibold text-white rounded "
          >
            <FontAwesomeIcon icon={faSave} />
            <span className="hidden sm:inline"> Save</span>
          </button>

          <button
            onClick={handlePublish}
            className="btn py-2  px-3 text-xs font-semibold text-white rounded "
          >
            <FontAwesomeIcon icon={faRocket} />
            <span className="hidden sm:inline"> Publish</span>
          </button>
        </div>
      </div>

      <div
        className="lg:w-8/12 md:w-9/12 w-11/12 mx-auto  relative flex-1 overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <ReactQuill
          ref={editorRef}
          value={text}
          onChange={handleTextChange}
          className="h-full bg-white rounded overflow-y-scroll "
          modules={{
            toolbar: {
              container: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ align: [] }],
                ["link", "image"],
                ["clean"],
                [{ color: [] }],
              ],
            },
          }}
          placeholder="Add a description of your event"
          id="txtDescription"
        />
      </div>
      <div className="p-4 bg-white text-xs text-center text-gray-500 font-medium">
        <span>
          Created by{" "}
          <a
            href="https://github.com/03brainy-clicks/speedyAssignment"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black"
          >
            Chandrakant Kushwah
          </a>
        </span>
      </div>
    </div>
  );
};

export default Editor;
