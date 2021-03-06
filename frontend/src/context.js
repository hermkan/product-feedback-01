import React, { useState, useContext, createContext, useEffect } from "react";
import { data } from "./data";
import axios from "axios";
const AppContext = createContext();

const requests = data.productRequests.filter(
  (item) => item.status !== "suggestion"
);

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setOpenSideBar] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [checked, setChecked] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [requestsList, setRequestsList] = useState([]);
  const [usersData, setUsersData] = useState(data);

  const serverUrl = "http://localhost:4000/api/feedbacks";

  const fetchRequests = async () => {
    const { data } = await axios.get(serverUrl);
    setRequestsList(data);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const openSidebar = () => {
    setOpenSideBar(true);
  };
  const closeSidebar = () => {
    setOpenSideBar(false);
  };

  const statuses = [
    ...new Set(
      requestsList
        .map((item) => item.status)
        .filter((status) => status !== "suggestion")
    ),
  ];

  const suggestions = requestsList.filter(
    (item) => item.status === "suggestion"
  );
  const categories = [
    ...new Set(
      requestsList.map((request) => {
        return request.category;
      })
    ),
  ];

  return (
    <AppContext.Provider
      value={{
        serverUrl,
        categories,
        statuses,
        suggestions,
        showReplyInput,
        setShowReplyInput,
        usersData,
        setUsersData,
        empty,
        setEmpty,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        showDropDown,
        setShowDropDown,
        checked,
        setChecked,
        dropDown,
        setDropDown,
        requestsList,
        setRequestsList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
