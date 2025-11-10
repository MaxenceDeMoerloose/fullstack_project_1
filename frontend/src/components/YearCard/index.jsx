import {Link} from "react-router-dom";

function YearCard({year}) {
  return (
      <div>
          <Link to={`${year}`}>year: {year}</Link>
      </div>
  );
}

export default YearCard;