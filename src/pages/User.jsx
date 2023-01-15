import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import GithubContext from "../context/github/GithubContext";
import { getUser } from "../context/github/GithubActions";

function User() {
  const { user, loading, dispatch } = useContext(GithubContext);

  const params = useParams();
  // the last argument empty array is there so the function run only once
  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUserData = async () => {
      const userData = await getUser(params.login);
      dispatch({ type: "GET_USER", payload: userData });
    };
    getUserData();
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back To Search
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{name}</h2>
                <p>{login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 inline-block">
                  {type}
                </div>
                {hireable && (
                  <div className="mx-1 bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 inline-block">
                    Hireable
                  </div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div className="flex w-full rounded-lg shadow-md bg-base-100 ">
              {location && (
                <div className="container">
                  <div className="stat-title text-md">Location</div>
                  <div className="text lg stat-value">{location}</div>
                </div>
              )}
              {blog && (
                <div className="container">
                  <div className="stat-title text-md">Website</div>
                  <div className="text lg stat-value">
                    <a
                      href={`https://${blog}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="container">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text lg stat-value">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className=" w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="container flex flex-row-reverse mb-4">
            <div className="text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="mr-auto">
              <div className="pr-5">Followers</div>
              <div className="pr-5 text-3xl md:text-4xl">{followers}</div>
            </div>
          </div>
          <div className="container flex flex-row-reverse mb-4">
            <div className="text-secondary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="mr-auto">
              <div className="pr-5">Following</div>
              <div className="pr-5 text-3xl md:text-4xl">{following}</div>
            </div>
          </div>
          <div className="container flex flex-row-reverse mb-4">
            <div className="text-secondary">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="mr-auto">
              <div className="pr-5">Public repos</div>
              <div className="pr-5 text-3xl md:text-4xl">{public_repos}</div>
            </div>
          </div>
          <div className="container flex flex-row-reverse mb-4">
            <div className="text-secondary">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="mr-auto">
              <div className="pr-5">Public Gists</div>
              <div className="pr-5 text-3xl md:text-4xl">{public_gists}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
