import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/data-science-apprenticeship-zeptolab");
  }, []);

  return (
    <div>
      {/* WARNING! This page is only to be redirected to a details page for Scholarship, because if there is not scholarship will find a 404 */}
    </div>
  );
}

export default Home;
