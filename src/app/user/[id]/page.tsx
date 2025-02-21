import { NEXT_API_URL } from "@/app/utils/constants";
import { userType } from "@/app/utils/types";
import Link from "next/link";

type props = {
  params: Promise<{ id: string }>;
};

const userDetailPage = async ({ params }: props) => {
  const { id } = await params;
  const response = await fetch(`${NEXT_API_URL}/api/user/${id}`, {
    method: "GET",
  });
  const userData: userType = await response.json();

  return (
    <Link href={"/user"}>
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "400px",
          height: "30px",
          color: "black",
          borderRadius: "10px",
          backgroundColor: "#f5f5f5",
        }}
      >
        {userData.name} / {userData.age} / {userData.email}
      </div>
    </Link>
  );
};

export default userDetailPage;
