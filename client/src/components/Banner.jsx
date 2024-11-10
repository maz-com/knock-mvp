import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="navbar container">
        <div className="navbutton">
          <p>Admin</p>
        </div>
      </div>
      <div className="title container">
        <h1>Knock!</h1>
      </div>
      <div className="rolling-text container">
        {/* <p>Share & Re-Use</p> */}
      </div>
    </>
  );
};

export default Banner;
