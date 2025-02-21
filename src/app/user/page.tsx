import Link from "next/link";
import { NEXT_API_URL } from "../utils/constants";
import { userType } from "../utils/types";

const page = async () => {
  const response = await fetch(`${NEXT_API_URL}/api/user`, { method: "GET" });
  const userList: userType[] = await response.json();

  return (
    <div style={{ width: "150px", marginLeft: "20px", marginTop: "20px" }}>
      {userList.map((value) => {
        return (
          <Link href={"user/" + String(value.id)} key={value.id}>
            <div
              style={{
                margin: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "150px",
                height: "30px",
                color: "black",
                borderRadius: "10px",
                backgroundColor: "#f5f5f5",
              }}
            >
              {value.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default page;
