import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import { searchUsers, getUser } from "../../context/github/GithubActions";

// usually form inputs have their own state so useState
function UserSearch() {
  const [text, setText] = useState("");

  const { users, dispatch } = useContext(GithubContext);

  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: users });

      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit} className=" w-full max-w-sm">
          <div className="flex items-center justify-between border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-9/12 text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search"
              value={text}
              onChange={handleChange}
            />
            <button className=" border hover:bg-gray-700 border-gray-700 hover:bg-teal-700 text-white text-sm py-3 px-7 rounded-full whitespace-nowrap">
              Go
            </button>
            {users.length > 0 && (
              <button
                onClick={() => dispatch({ type: "CLEAR_USERS" })}
                className="border border-gray-700 hover:bg-gray-700 border-teal-500 hover:text-teal-500 text-teal-500 text-sm py-3 px-7 rounded-full"
              >
                Clear
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserSearch;
