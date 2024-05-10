import { useRouteError } from "react-router-dom";
const NotFound = () => {
  const error = useRouteError() as Error;
  console.log(error);
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
};

export default NotFound;
