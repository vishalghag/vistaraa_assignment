import React from "react";
import { activeTableData } from "../utils/ActiveTableData";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ActiveTable = () => {
  const history = useNavigate();

  const getStatusColor = (status) => {
    return status === "active" ? "bg-green-500" : "bg-red-500";
  };

  const displayActiveTransaction = (details) => {
    if (details.account.status === "active") {
      history("/transaction");
      localStorage.setItem("details", JSON.stringify(details));
    } else {
      toast.error("Only Active List customer transation in shown in new page");
    }
  };

  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-4">Customers Details</h2>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Active Customer</th>
              </tr>
            </thead>
            <tbody>
              {activeTableData.map((detail) => (
                <tr key={detail.id}>
                  <td className="border px-4 py-2">{detail.name}</td>
                  <td className="border px-4 py-2">{detail.address}</td>
                  <td
                    onClick={() => displayActiveTransaction(detail)}
                    className="border px-4 py-2 text-center p-2 m-2 cursor-pointer"
                  >
                    <span
                      className={`rounded-md p-2 m-2 px-2 shadow-lg transform transition-transform duration-200 ease-in-out active:scale-95 text-white ${getStatusColor(
                        detail.account.status
                      )}`}
                    >
                      {detail.account.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActiveTable;
