import { Link } from "react-router-dom";

const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <h4>Hello, {user?.name}</h4>
      <Link to="/">
        <button className="btn">Logout</button>
      </Link>
    </section>
  );
};
export default Dashboard;
