import { DropDownIcon } from "../../assets/sidebarIcons";
import { Dropdown } from "antd";

export default function DropDownUser() {
  const items = [
    {
      key: "logout",
      danger: true,
      label: "Logout",
    },
  ];

  const logout = () => {
    console.log(" User has been logged out!");
  };

  const onDropdownClick = ({ key }) => {
    if (key === "logout") {
      logout();
    }
  };

  return (
    <div>
      <Dropdown
        trigger={"click"}
        placement="bottomRight"
        menu={{
          items,
          onClick: onDropdownClick,
        }}
      >
        <div className="flex cursor-pointer items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gray-500"></div>
          <DropDownIcon />
        </div>
      </Dropdown>
    </div>
  );
}
