import React, { useContext } from "react";
import CommonButton from "../common/CommonButton";
import { Link } from "react-router-dom";
import routes from "../pageRoutes/routes.json";
import AuthUser from "../utils/AuthUser";
import ErrorPage from "../pages/ErrorPage";

const TransactionDetails = () => {
  const { auth } = useContext(AuthUser);
  const transactionDetail = JSON.parse(localStorage.getItem("details"));

  return auth.isAuthenticated === true ? (
    <div className="flex justify-center text-center mt-6 flex-col">
      <h1 className="text-3xl font-medium">Transaction Details</h1>
      <div className="flex flex-row text-center justify-center mt-7">
        <h1 className="font-semibold">Name:</h1>
        <span className="ml-3">{transactionDetail.name}</span>
      </div>
      <div className="flex flex-row text-center justify-center mt-7">
        <h1 className="font-semibold">Address:</h1>
        <span className="ml-3">{transactionDetail.address}</span>
      </div>
      <div className="flex flex-row text-center justify-center mt-7">
        <h1 className="font-semibold">Transaction Amount:</h1>
        <span className="ml-3">{transactionDetail.account.trasaction}</span>
      </div>
      <div className="flex justify-center mt-6">
        <Link to={routes.USER}>
          <CommonButton buttonName={"Back to user page"} />
        </Link>
      </div>
    </div>
  ) : (
    <ErrorPage />
  );
};

export default TransactionDetails;
