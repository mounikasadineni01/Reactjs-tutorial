import { useRouteError } from "react-router-dom";

const ErrorPath = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOPS!!!</h1>
      <h2>
        {err.status}: {err.statusText}
      </h2>
    </div>
  );
};

export default ErrorPath;
