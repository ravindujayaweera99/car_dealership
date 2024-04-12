import "./Welcome.css";
import qualityIcon from "../../assets/quality.svg";
import lowIcon from "../../assets/lowest.svg"
import satisfactionIcon from "../../assets/satis.svg"

const Welcome = () => {
  return (
    <div className="welcome">
      <h2>We help you to find your next Drive!</h2>
      <h1 className="top-heading">
        Welcome to <span className="brand-name">Real Car Dealers</span>
      </h1>
      <div className="qualities">
        <div className="col-1">
          <img src={lowIcon} alt="" />
          <h1>Lowest Prices in the Town</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            laboriosam optio doloribus, voluptatem laborum aspernatur dolorem
            nesciunt dolor exercitationem distinctio? Tenetur maxime delectus,
            cum natus explicabo suscipit assumenda a impedit.
          </p>
        </div>
        <div className="col-2">
          <img src={qualityIcon} alt="" />
          <h1>High Quality Vehicles</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut
            doloribus porro officia asperiores quasi, blanditiis molestias,
            molestiae obcaecati consectetur fugit. Molestiae vel, magnam dolor
            iste molestias possimus vitae in!
          </p>
        </div>
        <div className="col-3">
          <img src={satisfactionIcon} alt="" />
          <h1>Highly Satisfied Customer Base</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            repudiandae numquam deserunt quaerat debitis nam, labore quas ipsum
            placeat possimus enim expedita hic laborum accusantium,
            necessitatibus doloremque ducimus? Aliquid, modi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
