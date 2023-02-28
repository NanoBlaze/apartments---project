import { FunctionComponent, useEffect, useState } from "react";
import { getUser } from "../services/usersService";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const [user, setUser] = useState({
    _id: "",
    name: "",
    email: "",
    isPoster: "",
  });
  useEffect(() => {
    getUser()
      .then((result) => {
        setUser(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="main2 ">
          <h1 className="text-home-banner py-5">Profile</h1>

          <div className="col-10 col-lg-4 col-md-5 mx-auto">
            <div className="shadow p-3 bg-light mb-5 rounded  ">
              <p>
                <span className="font-w-500 ">Username: </span>
                <span className="font-w-400 text-success ">{user.name}</span>
              </p>
              <p>
                <span className="font-w-500 ">ID: </span>
                <span className="text-success">{user._id}</span>{" "}
              </p>
              <p>
                <span className="font-w-500">Email: </span>
                <span className="text-success">{user.email}</span>
              </p>
              {user.isPoster ? (
                <p>
                  <span className="font-w-500">User Rank:</span>
                  <span className="text-success"> Post User</span>
                </p>
              ) : (
                <p>
                  <span className="font-w-500">User Rank:</span>
                  <span className="text-success"> Cannot Post</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
