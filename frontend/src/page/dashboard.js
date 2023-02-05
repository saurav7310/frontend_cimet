import React from "react";

// here we using that state variable which is coming from parent file app and applying map function to return
// the desired data from the data object
const Dashboard = ({ appData }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Provider ID</th>
            <th>Plan Name</th>
            <th>Energy Type</th>
            <th>Contract Length</th>
          </tr>
        </thead>
        <tbody>
          {appData.map((ele) => {
            return (
              <tr key={ele.id}>
                <td>{ele.provider_id}</td>
                <td>{ele.plan_name}</td>
                <td>{ele.energy_type}</td>
                <td>{ele.contract_length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
